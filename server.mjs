import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Analytics } from '@segment/analytics-node'
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import { btoa } from "abab";


import dotenv from 'dotenv';
// CHOOSE FILE TO SELECT
dotenv.config(); // Load environment variables if using a .env file
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

// Initialize Segment Analytics
const nodeWriteKey = {SEGMENTNODEWRITEKEY : process.env.SEGMENTNODEWRITEKEY}
const analytics = new Analytics({ writeKey: nodeWriteKey.SEGMENTNODEWRITEKEY })
console.log('nodeWriteKey : ', nodeWriteKey)


// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 4100;


// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON body
// Serve static files
app.use(express.static(__dirname)); // Serve static files directly from the root directory


// Set EJS as the template engine
app.set('view engine', 'ejs');

// Dummy database or data structure to simulate user storage
const users = new Map(); // Key: anonymousId, Value: userId

// EJS TEMPLATE
// Route to render HTML with SEGMENTAJSWRITEKEY injected
app.get('/', (req, res) => {
    res.render(path.join(__dirname, './index.ejs'), {
        SEGMENTAJSWRITEKEY: process.env.SEGMENTAJSWRITEKEY,
        SEGMENTNODEWRITEKEY: process.env.SEGMENTNODEWRITEKEY
    });
});



// Route to sync anonymousId and return userId
app.post('/api/share-ids', (req, res) => {
    const { anonymousId } = req.body;

    if (!anonymousId) {
        return res.status(400).json({ error: 'anonymousId is required' });
    }

    // Simulate fetching or generating a userId
    let userId = users.get(anonymousId);
    if (!userId) {
        // Generate a new userId if it doesn't exist
        userId = uuidv4();
        users.set(anonymousId, userId);
    }

    console.log(`AnonymousId: ${anonymousId}, UserId: ${userId}`);
    
    // Send back the userId
    res.json({userId});
});


// Reset endpoint
app.post('/api/reset', (req, res) => {
    const { anonymousId } = req.body;
    
    try {
        // Clear the user from your Map if it exists
        if (users.has(anonymousId)) {
            users.delete(anonymousId);
            console.log(`Cleared mapping for anonymousId: ${anonymousId}`);
        }

        res.status(200).json({
            message: 'Server-side reset successful',
            status: 200
        });
    } catch (error) {
        console.error('Error during server reset:', error);
        res.status(500).json({ 
            error: 'Error during server reset',
            details: error.message 
        });
    }
});


// SEGMENT NODE.JS EVENTS

// Track Event
app.post('/track', (req, res) => {
    console.log('req.body:', req.body);
    const { payload } = req.body;
    console.log('SERVER TRACK: payload', payload);
    
    try {
        // Destructure the payload and pass properties directly
        const { userId, anonymousId, context, event, properties } = payload;
        analytics.track({
            userId,
            anonymousId,
            event,
            properties,
            context
        });
        
        res.status(200).json({
            message: 'Track event sent successfully',
            status: 200,
            payload: { userId, anonymousId, event, properties, context }
        });
    } catch (error) {
        console.error('Error sending Track event:', error);
        res.status(500).json({ error: 'Error sending Track event' });
    }
});


// Identify Event
app.post('/identify', (req, res) => {
    console.log('req.body:', req.body);
    const { payload } = req.body;
    console.log('SERVER IDENTIFY: payload', payload);
    
    try {
        // Destructure the payload and pass properties directly
        const { userId, anonymousId, traits, context } = payload;
        
        analytics.identify({
            userId,
            anonymousId,
            traits,
            context
        });

        res.status(200).json({
            message: 'Identify event sent successfully',
            status: 200,
            payload: payload
        });
    } catch (error) {
        console.error('Error sending identify event:', error);
        res.status(500).json({ error: 'Error sending identify event' });
    }
});

// Page Event
app.post('/page', (req, res) => {
    console.log('req.body:', req.body);
    let { payload } = req.body;
    console.log('SERVER PAGE: payload', payload);
    
    try {
        // Destructure the payload and pass properties directly
        const { userId, anonymousId, category, name, properties, context } = payload;
        
        analytics.page({
            userId,
            anonymousId,
            category,
            name,
            properties,
            context
        });

        res.status(200).json({
            message: 'Page event sent successfully',
            status: 200,
            payload: payload
        });
    } catch (error) {
        console.error('Error sending Page event:', error);
        res.status(500).json({ error: 'Error sending Page event' });
    }
});

// Group Event
app.post('/group', (req, res) => {
    console.log('req.body:', req.body);
    let { payload } = req.body;
    console.log('SERVER GROUP:', {
        userId : payload.userId,
        anonymousId : payload.anonymousId,
        groupId : payload.groupId,
        traits : payload.traits,
        context : payload.context
    });
    
    try {
        const { userId, anonymousId, groupId, traits, context } = payload;
        analytics.group({
            userId,
            anonymousId,
            groupId,
            traits,
            context
        });

        res.status(200).json({
            message: 'Group event sent successfully',
            status: 200,
            payload: { userId, anonymousId, groupId, traits, context }
        });
    } catch (error) {
        console.error('Error sending Group event:', error);
        res.status(500).json({ error: 'Error sending Group event' });
    }
});


// Alias Event
app.post('/alias', (req, res) => {
    console.log('req.body:', req.body);
    let { payload } = req.body;
    console.log('SERVER ALIAS:', {
        userId : payload.userId,
        previousId : payload.previousId,
        context : payload.context
    });
    
    try {
        const { userId, previousId, context } = payload;
        analytics.alias({
            userId,
            previousId,
            context
        });

        res.status(200).json({
            message: 'Alias event sent successfully',
            status: 200,
            payload: { userId, previousId, context }
        });
    } catch (error) {
        console.error('Error sending Alias event:', error);
        res.status(500).json({ error: 'Error sending Alias event' });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

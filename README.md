# Client <> Server Implementation
This is a basic implementation of Segment's Analytics.js library with Segment's Node.js library. The goal of this implementation is to show how data is shared between a client and server.

### V1
With version 1, you'll have access to the functionality to be able to :
1. make fetch requests from the client to the server in order to share client-side generated data from the client to the server.
2. generate userId on the server and passing that userId from the server to the client
3. trigger events to be sent to either the Analytics.js source or to the Server source, triggered by the buttons listed under Client Side Events will send to the Segment Analytics.js source and the buttons listed under Server Side Events will send to the Segment Server source.
4. review the raw JSON event payloads sent by both the client and server.
5. isAdmin mode and differentiate an admin user's data from the impersonated user's data, made available via the Admin Mode toggle.
6. manually fill out a form with user data to trigger an Identify and Track event "Form Submitted".
7. send events from the code editor in either the Analytics.js format or JSON format, as well as trigger specific event methods per the selected event tab.
### V2
With version 2, coming soon, additional methods will be added to include the functionality to be able to : 
1. have greater observability of the data that's being passed between client and server.
2. pass data from the client to Segment's Analytics.js Querystring API.
3. address redirect behavior between subdomains.
4. additional functionality between the code editor and User Form.

## Prerequisites

Before running the script, ensure you have the following:
- Node.js installed on your machine.
  - Check if Node.js & NPM are currently installed
    - >```node -v```  
    - >```npm -v``` 
  - Install NPM for the first time
    - >```npm install -g npm```
  - Update NPM to the latest version
    - >```npm install -g npm@latest```
  - Install Node.js for the first time with Homebrew
    - >```brew install node```

- A Segment Analytics.js source write key.
  - [See your existing Javacript Sources in your Segment workspace](https://app.segment.com/goto-my-workspace/sources?search=javascript)
  - [Create a new Javascript Source in your Segment workspace](https://app.segment.com/goto-my-workspace/sources/catalog/javascript)

- A Segment Server source write key.
  - [See your existing Node Sources in your Segment workspace](https://app.segment.com/goto-my-workspace/sources?search=node)
  - [Create a new Server Source in your Segment workspace](https://app.segment.com/goto-my-workspace/catalog?category=Server)

- An existing GitHub repository (if you want to version-control your script).

## Setup

### 1. Clone the Repository : HTTPS or SSH

HTTPS
```
git clone https://github.com/segment-services-eng/segment-client-server-implementation.git
cd segment-client-server-implementation
```
SSH
```
git clone git@github.com:segment-services-eng/segment-client-server-implementation.git
cd segment-client-server-implementation
```


### 2. Install Dependencies
Open the terminal and run : 
```
npm install
```

### 3. Create .env file
```
touch .env
```

### 4. Add Segment Write Keys to .env

#### Analytics.js Client-side Source : 
1. Create/Locate a Javascript source in Segment.
2. Paste the line below into the .env file, also pasting your Segment Analytics.js source's writeKey inside the string : 
   ```
   SEGMENTAJSWRITEKEY=''
   ```
3. The Analytics.js source's writeKey will be dynamically loaded into the snippet within the <head> of the index.ejs file. *(No action is required.)*
   ```
   <%= SEGMENTAJSWRITEKEY %>
   ```

#### Node.js Server-side Source
1. Create/Locate a Node.js source (or any other server-side source) in Segment.
2. Paste the line below into the .env file, also pasting your Segment Server source's writeKey inside the string : 
   ```
   SEGMENTNODEWRITEKEY=''
   ```

#### The .env file should now look like this :
```
SEGMENTAJSWRITEKEY='yourSegmentAnalyticsJSSourceWriteKey'
SEGMENTNODEWRITEKEY='yourSegmentServerSourceWriteKey'
```

These writeKeys will be visible in the browser. If you do not want this behavior, then remove the two  p  tags from the index.ejs file, but do not remove the  div  tags.
```
<div class="api-keys">
      <p>AJS writeKey: <%= SEGMENTAJSWRITEKEY %></p>
      <p>SERVER writeKey: <%= SEGMENTNODEWRITEKEY %></p>
</div>
```

## File Structure
```
├── README.md
├── .env
├── diagram.mermaid
├── favicon.svg
├── index.ejs
├── package-lock.json
├── package.json
├── script.js
├── server.mjs
├── styles.css
└── users.json
```

## BEGIN SENDING DATA TO YOUR SEGMENT SOURCES
1. Once the .env file has both source's writeKeys saved, ```cd segment-client-server-implementation``` and start your server.
2. Start your server with this command : 
      >node server.mjs
3. Open the your local browser to localhost:4100
4. Follow the instructions at the top-left of the page to begin sending events.
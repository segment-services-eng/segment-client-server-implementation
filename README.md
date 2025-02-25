# Client <> Server Implementation
This is a basic implementation of Segment's Analytics.js library with Segment's Node.js library. The goal of this implementation is to show how data is shared between a client and server.
### V1
This app is currently V1, which includes the functionality to be able to :
1. make fetch requests from the client to the server in order to share client-side generated data from the client to the server.
2. generate userId on the server and passing that userId from the server to the client
3. trigger events to be sent to either the Analytics.js source or to the Server source, triggered by the buttons listed under the heading Client Side Events which sends to the Analytics.js Segment source and under the heading Server Side Events which sends to the Server Segment source.
4. review the raw JSON event payloads sent by both the client and server.
5. isAdmin mode which differentiates an admin user's data from the impersonated user's data, made available via the Admin Mode toggle.
6. manually fill out a form with user data to trigger an Identify and Track event "Form Submitted".
7. send events from the code editor in either the Analytics.js format or JSON format, as well as trigger specific event methods per the selected event tab.
### V2
In V2, additional methods will be added to include the functionality to be able to : 
1. pass data from the client to Segment's Analytics.js Querystring API.
2. address redirect behavior between subdomains.
3. additional functionality between the code editor and User Form.

____

## Command to install existing dependencies
``` sh 
$ npm i
```

## CONFIGURE THE APP WITH YOUR SEGMENT SOURCES
### EJS : Templating 
1. Create a .env file
   1. >touch .env

### Analytics.js Client-side Source : 
1. Create a Javascript source in Segment.
2. Paste the line below into the .env file, also pasting your Analytics.js Segment source's writeKey inside the string : 
   1. >SEGMENTAJSWRITEKEY=''
3. The index.ejs file currently renders the Analytics.js source's writeKey onto the page in the browser. 
   1. ><%= SEGMENTAJSWRITEKEY %>

### Node.js Server-side Source
1. Create a Node.js source (or any other server-side source)
2. Paste the line below into the .env file, also pasting your Node Segment source's writeKey inside string the string : 
   1. >SEGMENTNODEWRITEKEY=''


### The .env file should now look like this
``` sh
SEGMENTAJSWRITEKEY='yourSegmentAnalyticsJSSourceWriteKey'
SEGMENTNODEWRITEKEY='yourSegmentServerSourceWriteKey'
```


These variables are visible in the browser, so if you do not want this behavior, then removes these lines from the index.ejs file.
``` sh
<div class="api-keys">
      <p>AJS writeKey: <%= SEGMENTAJSWRITEKEY %></p>
      <p>SERVER writeKey: <%= SEGMENTNODEWRITEKEY %></p>
</div>
```


## BEGIN SENDING DATA TO YOUR SEGMENT SOURCES
1. Once the .env file has both source's writeKeys saved, all you'll need to do is navigate to the app's folder 'CLIENT-SERVER-IMPLEMENTAT' and start your server.
2. Start your server with this command : 
      >node server.mjs
3. Open the your local browser to localhost:4100.
4. Follow the instructions at the top-left of the page to begin sending events.


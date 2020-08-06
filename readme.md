# How do a front-end request to API Node

You can visualize the response (front-end) form: <a href='https://pablorodrigo52.github.io/node-api/'>GH-PAGES</a>
The server was uploaded on <a href='https://pablorodrigo52-api-node.herokuapp.com'>HEROKU</a>


## Explanation
The front make a GET request from server. The server receive the request and return a simple JSON to front.

- The request was made with .fetch();
- The server receive with express() and use cors() to not block requests from out of server;
- The server response with a JSON;
- The front receive this JSON and parse to mount the html content.
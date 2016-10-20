node-mock-webhook
=================
Used with ngrok to standup an external service that can be used as a mock webhook endpoint.

start ngrok

./ngrok http 8081

start node

node app.js

Use the endpoint as a webhook

http://76579c3f.ngrok.com

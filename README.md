# SimpleNodeJSExpress

1. Create package.json file with name, version and dependencies needed.
Ex:

{
  "name": "Express-web-app",
  "version": "1.0.0",
  "dependencies":
  {
    "express": "~4.0.0",
    "mysql": "*",
    "ejs": "~1.0.0"
  }
}

2. From root folder run -  npm install
this will install all modules mentioned in package json file.

3. Create server.js file - It contains all express related code such as starting server and listening to port specified, Which view engine to use for rendering view and registering routing paths.
4. Create router folder and add file main which contains only routing related info.
5. Create views folder and put all views in this folder.

Run server.js from node -  node server.js

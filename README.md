# Fruit App (React, Redux, Firebase)
[![Netlify Deploy Status](https://api.netlify.com/api/v1/badges/81dd2e40-2341-4036-9acf-92d37123ac33/deploy-status)](https://fruit-app.netlify.app)
[![SonarCloud Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=qtrandev_fruit-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=qtrandev_fruit-app)

![](https://github.com/qtrandev/fruit-app/blob/master/fruit-app1.png)

![](https://github.com/qtrandev/fruit-app/blob/master/fruit-app2.png)

![](https://github.com/qtrandev/fruit-app/blob/master/fruit-app3.png)

![](https://github.com/qtrandev/fruit-app/blob/master/fruit-app4.png)

## Environment variables

Add a ".env" file in the root folder (such as fruit-app/) with the following keys:  

REACT_APP_MAPBOX_TOKEN=pk...  
REACT_APP_API_KEY=AIz...  
REACT_APP_AUTH_DOMAIN=...firebaseapp.com  
REACT_APP_DATABASE_URL=https://...-db.firebaseio.com  
REACT_APP_MESSAGING_SENDER_ID=79...  
REACT_APP_PROJECT_ID=fr...  
REACT_APP_STORAGE_BUCKET=...appspot.com  

## Deploying With Netlify

To deploy with Netlify, add the environment variables in the .env file to the "Build & deploy" settings in the Environment section.  
Set Build command to: CI= npm run build  
Set Publish directory to: build/  

## Troubleshooting

* Before deploying remotely, remove any yarn.lock file in the project.

## SonarQube SonarCloud Project

[https://sonarcloud.io/dashboard?id=qtrandev_fruit-app](https://sonarcloud.io/dashboard?id=qtrandev_fruit-app)

# Create React App Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

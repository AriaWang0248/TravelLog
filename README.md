# Travel Log Application

This is a simple POC for Travel Log Application, it briefly describes the user Login, Register, and Posts modules of this application.

## Description

The Travel Log Application is meant to create a website that let users to share their travel experience, like sharing their hotel choice, car rental choices, and their reviews. So those potential travelers can browse through those posts and get useful information to make their future travel plans, and thus increase users’ reach to the hotels, and raise the popularity/ awareness of the hotels.

The front-end of this application was constructed with react, css3, and material UI, and the backend was built with node.js, express.js, mongoose, and MongoDB database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Home page with react-router-dom
- User Login and Register
- Manage user profile
- Travel Log gallery
- Search posts based on key words
- Write and post travel log
- Edit, delete posted logs

\*Some features are still in updating.

## Technologies used

React.js, JavaScript, Redux, HTML5, CSS3, Material UI, Node.js, Express.js, Mongoose, MongoDB

## Folder Structure

```
TravelLog
│
├── backend
│      ├── node_modules/
│      ├── models/
│      ├── routes/
│      ├── server.js
│      ├── package.json
│      └── package-lock.json
│
├── frontend/
│      ├── node_modules/
│      ├── public/
│      ├── src/
│      │    ├── actions/
│      │    ├── components/
│      │    ├── reducers/
│      │    ├── App.css
│      │    ├── App.js
│      │    ├── App.test.js
│      │    ├── index.css
│      │    ├── index.js
│      │    ├── serviceWorker.js
│      │    └── setupTests.js
│      ├── package.json
│      ├── package-lock.json
│      └── yarn.lock
│
├── package-lock.json
├── .gitgnore
└── README.md

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

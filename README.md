# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Git clone (https://github.com/manjuprem12/Mission_Journey_Orchestrator.git)
Path to the application (https://mission-journey-orchestrator.vercel.app/)
## Table of Contents
- [Project Setup] (#project-setup)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Dependencies](#dependencies)
- [Installing a Dependency](#installing-a-dependency)
- [Functionalities](#functionalities)
- [Testing](#testing)
- [Deployment](#deployment)
- [Documents Refered](#documents-refered)

## Project Setup
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
4. Start the development server
## Folder Structure
After creation, project look like this:
```
my-app/
  README.md
  node_modules/
  package.json
  package-lock.json
  public/
    index.html
    favicon.ico
  src/
    Assets/
       dream.jpeg
       home.jpeg
       journey.jpeg
       start.jpeg
    components/
       Home.js
       MissionForm.js
       MissionList.js 
    state/
       missionsSlice.js
       MockData.json
    style/
       Home.scss
       MissionList.scss
    utils/
       dateUtils.js
       validations.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg    
```
## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the packages used in the application it will create node modules.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Dependencies
react: ^18.3.1
react-dom: ^18.3.1
react-router-dom: ^6.23.1
redux: ^9.1.2
@reduxjs/toolkit: ^2.2.5
bootstrap: ^5.3.3
react-bootstrap: ^2.10.2
sass: ^1.77.4

## Installing a Dependency
The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```
npm install --save <library-name>
```

##Testing 
Starting with Home page
![image](https://github.com/manjuprem12/Mission_Journey_Orchestrator/assets/50079772/15a72426-2f83-4338-97a5-6aa7f0f34f4f)

in Feature there is a button called Next once click on it page will redirect to Mission list page
![image](https://github.com/manjuprem12/Mission_Journey_Orchestrator/assets/50079772/b7dae5a9-675a-4d56-a128-addfa24b7317)

##Functionalities
   1. Add mission
   2. Edit mission
   3. Delete mission
   4. add member
   5. Edit member
   6. Remove member
   7. Sorting for member in table
   8. Searching members
   9. Date Calculations
   10. Pagination
   



## Documents Refered

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn React Hooks, check out the [React Hooks documentation](https://react.dev/reference/react/hooks)

To learn Redux, check out the [Redux documentation ] (https://redux.js.org/)

To learn Bootstrap, check out the [Bootstrap documentation ] (https://getbootstrap.com/)

To learn React icons, check out the [React icons documentation ] (https://react-icons.github.io/react-icons/)

To learn Sass, check out the [Sass documentation ] (https://sass-lang.com/documentation/)

## Deployment
Code deployed in Github   (https://github.com/)
Code production done with Vercel (https://vercel.com)

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

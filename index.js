/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import Top from './topComponent';
// import Middle from './middleComponent';
// import Bottom from './bottomComponent';
// import Result from './Result';

// const AppContainer = createAppContainer(
//   createStackNavigator(
//     {
//       App: {
//         screen: App,
//       },
//       Top,
//       Middle,
//       Bottom,
//       Result,
//     },
//     {
//       defaultNavigationOptions: {
//         header: null,
//       },
//     },
//   ),
// );

AppRegistry.registerComponent(appName, () => <App />);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Header from './src/components/Header';
import Imgdata from './src/components/ImgData';
import Firstrow from './src/components/Firstrow';
import Secondrow from './src/components/Secondrow';
import Home from './src/Screens/Home';
import Thirdrow from './src/components/Thirdrow';
import Fourthrow from './src/components/Fourthrow';
AppRegistry.registerComponent(appName, () => App);

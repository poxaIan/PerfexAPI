import {AppRegistry} from 'react-native';
import App from './App'; // Ajuste o caminho conforme necessário, se o App.js não estiver na mesma pasta
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

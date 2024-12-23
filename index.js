import { AppRegistry } from 'react-native';
import FirstScreen from './screens/first'; // first.js 파일을 불러옵니다.
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => FirstScreen);

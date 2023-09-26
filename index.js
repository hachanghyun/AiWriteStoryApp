import SplashScreen from 'react-native-splash-screen'; // 패키지를 가져옵니다.

// ...

// 앱 초기화 과정에서 스플래시 화면을 호출합니다.
SplashScreen.show();

// 앱을 실행합니다.
AppRegistry.registerComponent(appName, () => App);
SplashScreen.hide();
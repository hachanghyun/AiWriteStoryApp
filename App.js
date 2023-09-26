import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'; // 스플래시 화면 패키지를 가져옵니다.
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // 앱 초기화 과정에서 스플래시 화면을 호출합니다.
        SplashScreen.preventAutoHideAsync();

        // 스프링 부트 API 엔드포인트에 GET 요청을 보내는 코드
        axios.get('http://localhost/api/hello')
            .then(response => {
                setMessage(response.data);
                // 스플래시 화면을 숨기는 코드를 추가합니다.
                SplashScreen.hideAsync();
            })
            .catch(error => {
                console.error(error);
                // 오류가 발생하더라도 스플래시 화면을 숨기는 코드를 추가합니다.
                SplashScreen.hideAsync();
            });
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{message}</Text>
        </View>
    );
}

export default App;

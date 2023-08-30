import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState } from 'react';

export default function App() {

  let [key, setKey] = useState(0);
  let [url, setUrl] = useState('https://www.w101.com.tw/');

  return (
    <View style={{ flex: 1, marginTop: 20 }} >
      <WebView key={key} source={{ uri: url }}/>
      <View style={{ 
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center'
      }}>
        <Text style={{ flex: 1 }} onPress={() => {
          setUrl('https://www.w101.com.tw/');
          setKey(key++);
        }}>首頁</Text>
        <Text style={{ flex: 1 }} onPress={() => {
          setUrl('https://www.w101.com.tw/job');
          setKey(key++);
        }}>找工作</Text>
        <Text style={{ flex: 1 }} onPress={() => {
          setUrl('https://www.w101.com.tw/user-center-msglist');
          setKey(key++);
        }}>訊息</Text>
        <Text style={{ flex: 1 }} onPress={() => {
          setUrl('https://www.w101.com.tw/user/index');
          setKey(key++);
        }}>會員</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

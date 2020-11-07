import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {WifiWizard, HotspotWizard} from 'react-native-wifi-and-hotspot-wizard';

export default function App() {

    const connect = () => {

    }
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button title={"CONNECT"} onPress={connect}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

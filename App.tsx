import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

//@ts-ignore
import {WifiWizard, HotspotWizard} from 'react-native-wifi-and-hotspot-wizard'

export default function App() {

    const connect = async () => {
        const enable = await WifiWizard.isWifiEnabled()
        if (!enable) {
            return console.log('NOT WORK WIFI')
        }
        WifiWizard.getNearbyNetworks().then((networks: any) => {
            alert(JSON.stringify(networks))
            // let jsonNetworks = JSON.parse(networks)
            // alert(jsonNetworks)
            console.log(networks, 'ALL JSON')
            let network = networks.filter((Network: any) => {
                return Network.SSID == "library"
            })
            if (network) {
                WifiWizard.connectToNetwork(network[0], 'library', '').then((status: any) => {
                    console.log('RESULT', status)
                    alert(status + 'RESULT')
                    if (status == "connected") {
                        // Further Tasks
                    }
                }).catch((err: any) => alert(err + 'ERR'))
            }
        })
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

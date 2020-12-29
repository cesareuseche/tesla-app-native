import React from 'react'
import { View, Image } from 'react-native'
import styles from './HeaderStyle.js'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.png')} />
            <Image style={styles.menu} source={require('../img/menu.png')} />
        </View>
    )
}

export default Header

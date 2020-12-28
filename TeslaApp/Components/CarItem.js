import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from './Button'
import styles from './CartItemStyles';


function CarItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../img/ModelX.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,999</Text>
            </View>
            <Button type="primary" />
        </View>
    )
}

export default CarItem;
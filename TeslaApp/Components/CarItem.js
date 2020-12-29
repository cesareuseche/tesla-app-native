import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from './Button'
import styles from './CartItemStyles';


function CarItem(props) {
    const { name, tagline, taglineCTA, image } = props;
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {

                    }}
                />
                <Button
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {

                    }}
                />
            </View>
        </View>
    )
}

export default CarItem;
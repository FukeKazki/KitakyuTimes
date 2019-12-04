import React from 'react'
import { StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Fab = () => {
    return (
        <ActionButton buttonColor="rgb(255,0,102)">
            <ActionButton.Item buttonColor='#5D99FF' title="dog" onPress={() => console.log("Dog!")}>
                <Icon name="dog" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#00CC99' title="cat" onPress={() => console.log("Cat!")}>
                <Icon name="cat" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#FF69A3' title="good" onPress={() => console.log("Heart!")}>
                <Icon name="heart" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    )
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 25,
        height: 25,
        color: 'white',
    }
})

export default Fab
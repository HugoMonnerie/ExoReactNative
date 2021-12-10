import React from "react";

import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { StyleSheet, FlatList, View, Text } from "react-native";

const Exo3 = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <FlatList
                    data={[
                        'Solène',
                        'Julien',
                        'Sylvie',
                        'Olivier',
                        'Sabrina',
                        'Léo',
                        'Hugo',
                    ]}
                    renderItem={({item, index}) => {
                        return (
                            <Text
                                style={styles.names}
                                ref={index}
                                onLongPress={() => {
                                    alert('Bonjour ' + item);
                                }}>
                                {item}
                            </Text>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    names: {
        fontSize: 35,
        color: 'black',
        backgroundColor: 'gray',
        padding: 20,
        margin: 20,
    },
});

export default Exo3;

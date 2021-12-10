import React from "react";

import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { StyleSheet, View } from "react-native";

const Exo1 = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.screen}>
                <View style={{ flex: 1, backgroundColor: "red" }} />
                <View style={styles.green}>
                    <View style={styles.row}/>
                    <View style={styles.row}/>
                    <View style={styles.row}/>
                </View>
                <View style={{ flex: 4, backgroundColor: "blue" }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    green: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "green",
        justifyContent: "space-around",
        alignItems: "center",
    },
    row: {
        backgroundColor: "yellow",
        borderWidth: 3,
        width: 50,
        height: 50,
    },
});

export default Exo1;

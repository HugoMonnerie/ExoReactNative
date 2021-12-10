import React from "react";

import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Exo2 = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.top}>
                <Text style={styles.bold}>
                    Inscription
                </Text>
                <Image style={styles.img}
                       source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
            </View>
            <View style={styles.inputTexts}>
                <TextInput style={styles.inputText} placeholder="Prénom" />
                <TextInput style={styles.inputText} placeholder="Nom" />
                <TextInput style={styles.inputText} placeholder="Mot de passe" secureTextEntry={true} />
                <TextInput style={styles.inputText} placeholder="Comfirmation du mot de passe" secureTextEntry={true} />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.submit} onPress={() => {
                    alert('Inscription enregistrée');
                }}>
                    <Text style={styles.textButton}>
                        Envoyer
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    top: {
        flex: 2,
        alignItems: "center",
        paddingTop: 5,
    },
    bold: {
        flex: 1,
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },
    inputTexts: {
        flex: 4,
        justifyContent: "space-around",
    },
    inputText: {
        backgroundColor: "lightgray",
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    bottom: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    submit: {
        color: "black",
        borderWidth: 1,
        borderRadius: 20,
        width: 200,
        height: 50,
        justifyContent: "space-around",
    },
    textButton: {
        color: "black",
        textAlign: 'center',
        fontSize: 15,
    },
});

export default Exo2;

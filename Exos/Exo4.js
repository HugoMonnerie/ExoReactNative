import React, { useCallback, useEffect, useMemo, useState } from "react";

import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Exo4 = props => {
    const [firstName, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [isPwdValid, setIsPwdValid] = useState(true);
    const [confirmPwd, setConfirmPwd] = useState("");

    useEffect(() => {
        if (! pwd) {
            return;
        }
        setIsPwdValid(pwd.length >= 3);
    }, [pwd]);

    const useMemoConfirmPwd = useMemo(() => {
        return pwd === confirmPwd;
    }, [pwd, confirmPwd]);

    const Submit = useCallback(() => {
        alert("Bonjour " + firstName + " " + name + ", votre mot de passe est " + pwd);
    },[firstName, name, pwd])

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.top}>
                <Text style={styles.bold}>Inscription</Text>
                <Image
                    style={styles.img}
                    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                />
            </View>
            <View style={styles.inputTexts}>
                <TextInput
                    style={styles.inputText}
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="Prénom"
                />
                <TextInput
                    style={styles.inputText}
                    value={name}
                    onChangeText={setName}
                    placeholder="Nom"
                />
                <TextInput
                    style={[styles.inputText, isPwdValid ? null : styles.inputTextError]}
                    value={pwd}
                    onChangeText={setPwd}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                />
                <TextInput
                    style={[styles.inputText, useMemoConfirmPwd ? null : styles.inputTextError]}
                    value={confirmPwd}
                    onChangeText={setConfirmPwd}
                    placeholder="Comfirmation du mot de passe"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.submit}
                    onPress={Submit}>
                    <Text style={styles.textButton}>Envoyer</Text>
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
    inputTextError: {
        borderColor: 'red'
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
        color: 'black',
        textAlign: "center",
        fontSize: 15,
    },
});

export default Exo4;

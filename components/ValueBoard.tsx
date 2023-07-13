import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ValueBoard = ({ value }: { value: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
};

export default ValueBoard;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 8,
        borderColor: "#0f0",
        backgroundColor: "#000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    text: {
        fontSize: 20,
        color: "#0f0",
    },
});

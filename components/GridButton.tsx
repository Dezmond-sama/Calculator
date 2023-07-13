import React from "react";
import {
    GestureResponderEvent,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

interface Props {
    title: string;
    size?: number;
    onPress?: (e: GestureResponderEvent) => void;
}

const GridButton = ({ title, size, onPress }: Props) => {
    return (
        <Pressable
            style={[styles.container, { flex: size || 1 }]}
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    );
};

export default GridButton;

const styles = StyleSheet.create({
    container: {},
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 2,
        borderRadius: 10,
        backgroundColor: "#ddb532",
    },
});

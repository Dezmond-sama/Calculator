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
    const pressed = ({ pressed }: { pressed: boolean }) => {
        return [styles.button, pressed ? styles.pressed : styles.released];
    };
    return (
        <View style={{ flex: size || 1 }}>
            <Pressable style={pressed} onPress={onPress}>
                <Text>{title}</Text>
            </Pressable>
        </View>
    );
};

export default GridButton;

const styles = StyleSheet.create({
    container: { flex: 1 },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 2,
        borderRadius: 10,
        backgroundColor: "#ddb532",
    },
    pressed: {
        backgroundColor: "#9b8027",
        borderColor: "#6e5c1e",
        borderWidth: 3,
    },
    released: {},
});

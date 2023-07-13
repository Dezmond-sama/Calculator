import { StyleSheet, Text, View } from "react-native";

const GridButton = ({ title, size }) => {
    return (
        <View style={[styles.container, { flex: size || 1 }]}>
            <View style={styles.button}>
                <Text>{title}</Text>
            </View>
        </View>
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

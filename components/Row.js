import { StyleSheet, View } from "react-native";

const Row = ({ children, height }) => {
    return <View style={[styles.row, { height: height }]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
    },
});

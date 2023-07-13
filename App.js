import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Row from "./components/Row";
import GridButton from "./components/GridButton";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text>Screen</Text>
            </View>
            <View style={styles.buttons}>
                <Row height={"20%"}>
                    <GridButton title="<--" size={1} />
                    <GridButton title="CE" size={1} />
                    <GridButton title="C" size={1} />
                    <GridButton title="+-" size={1} />
                    <GridButton title="sqrt" size={1} />
                </Row>
                <Row height={"20%"}>
                    <GridButton title="7" size={1} />
                    <GridButton title="8" size={1} />
                    <GridButton title="9" size={1} />
                    <GridButton title="/" size={1} />
                    <GridButton title="%" size={1} />
                </Row>
                <Row height={"20%"}>
                    <GridButton title="4" size={1} />
                    <GridButton title="5" size={1} />
                    <GridButton title="6" size={1} />
                    <GridButton title="*" size={1} />
                    <GridButton title="1/x" size={1} />
                </Row>
                <Row height={"40%"}>
                    <View style={{ flex: 4 }}>
                        <Row height={"50%"}>
                            <GridButton title="1" size={1} />
                            <GridButton title="2" size={1} />
                            <GridButton title="3" size={1} />
                            <GridButton title="-" size={1} />
                        </Row>
                        <Row height={"50%"}>
                            <GridButton title="0" size={2} />
                            <GridButton title="." size={1} />
                            <GridButton title="+" size={1} />
                        </Row>
                    </View>
                    <GridButton title="=" size={1} />
                </Row>
            </View>
            <StatusBar style="auto" translucent={true} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "center",
        margin: 8,
    },
    buttons: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#32350d",
        borderRadius: 15,
        padding: 5,
    },
});

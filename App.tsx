import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Row from "./components/Row";
import GridButton from "./components/GridButton";
import ValueBoard from "./components/ValueBoard";
import { toValidNumber } from "./tools";

export default function App() {
    const [currentNumber, setCurrentNumber] = useState("0");
    const setNumber = (value: string) => {
        console.log(value);
        setCurrentNumber((num) => toValidNumber(num + value));
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <ValueBoard value={"" + currentNumber} />
            </View>
            <View style={styles.buttons}>
                <Row height={"20%"}>
                    <GridButton title="<--" />
                    <GridButton title="CE" />
                    <GridButton title="C" />
                    <GridButton title="+-" />
                    <GridButton title="sqrt" />
                </Row>
                <Row height={"20%"}>
                    <GridButton title="7" onPress={() => setNumber("7")} />
                    <GridButton title="8" onPress={() => setNumber("8")} />
                    <GridButton title="9" onPress={() => setNumber("9")} />
                    <GridButton title="/" />
                    <GridButton title="%" />
                </Row>
                <Row height={"20%"}>
                    <GridButton title="4" onPress={() => setNumber("4")} />
                    <GridButton title="5" onPress={() => setNumber("5")} />
                    <GridButton title="6" onPress={() => setNumber("6")} />
                    <GridButton title="*" />
                    <GridButton title="1/x" />
                </Row>
                <Row height={"40%"}>
                    <View style={{ flex: 4 }}>
                        <Row height={"50%"}>
                            <GridButton
                                title="1"
                                onPress={() => setNumber("1")}
                            />
                            <GridButton
                                title="2"
                                onPress={() => setNumber("2")}
                            />
                            <GridButton
                                title="3"
                                onPress={() => setNumber("3")}
                            />
                            <GridButton title="-" />
                        </Row>
                        <Row height={"50%"}>
                            <GridButton
                                title="0"
                                size={2}
                                onPress={() => setNumber("0")}
                            />
                            <GridButton
                                title="."
                                onPress={() => setNumber(".")}
                            />
                            <GridButton title="+" />
                        </Row>
                    </View>
                    <GridButton title="=" />
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

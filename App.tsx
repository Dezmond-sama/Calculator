import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Row from "./components/Row";
import GridButton from "./components/GridButton";
import ValueBoard from "./components/ValueBoard";
import { toValidNumber, toValidNumberInput } from "./tools";

interface IOperationProps {
    priority: number;
    isLeft: boolean;
    operandsCount: number;
}

const operationsProps: { [id: string]: IOperationProps } = {
    "+": { priority: 1, isLeft: false, operandsCount: 2 },
    "-": { priority: 1, isLeft: true, operandsCount: 2 },
    "*": { priority: 2, isLeft: false, operandsCount: 2 },
    "/": { priority: 2, isLeft: true, operandsCount: 2 },
    "^": { priority: 3, isLeft: true, operandsCount: 2 },
};

export default function App() {
    const [currentNumberInput, setCurrentNumberInput] = useState("0");
    const [currentOperation, setCurrentOperation] = useState("");
    const [tokens, setTokens] = useState([]);
    const [operations, setOperations] = useState([]);

    const setNumberInput = (value: string) => {
        if (currentOperation) putOperationToStack();
        setCurrentNumberInput((num) => toValidNumberInput(num + value));
    };
    const setOperationInput = (value: string) => {
        if (currentNumberInput) putNumberToTokens();
        setCurrentOperation(value);
    };

    const putNumberToTokens = () => {
        setTokens((currentTokens) => [
            ...currentTokens,
            toValidNumber(currentNumberInput),
        ]);
        setCurrentNumberInput("");
    };

    const putOperationToStack = () => {
        const currentOperationPriority = operationsProps[currentOperation];
        let currentStack = [...operations];
        while (currentStack.length > 0) {
            console.log(currentStack);

            const topOperation = currentStack.pop();
            const topOperationPriority = operationsProps[topOperation];
            if (
                topOperationPriority.priority >
                    currentOperationPriority.priority ||
                (topOperationPriority.priority ===
                    currentOperationPriority.priority &&
                    topOperationPriority.isLeft)
            ) {
                setTokens((currentTokens) => [...currentTokens, topOperation]);
            } else {
                currentStack.push(topOperation);
                currentStack.push(currentOperation);
                setOperations([...currentStack]);
                setCurrentOperation("");
                return;
            }
        }
        setCurrentOperation("");
        setOperations([currentOperation]);
    };
    const calculate = () => {
        let lastOperand = currentNumberInput
            ? toValidNumber(currentNumberInput)
            : undefined;
        let currentTokens = [...tokens, lastOperand, ...operations.reverse()];
        console.log(currentTokens);
        let stack = [];
        let index: number = 0;
        while (index < currentTokens.length) {
            let token = currentTokens[index];
            const operationProps = operationsProps[token];
            if (operationProps) {
                let operands: string[] = stack.splice(
                    stack.length - operationProps.operandsCount,
                    operationProps.operandsCount
                );
                let res: number;
                switch (token) {
                    case "/":
                        res = +operands[0] / +operands[1];
                        break;
                    case "*":
                        res = +operands[0] * +operands[1];
                        break;
                    case "+":
                        res = +operands[0] + +operands[1];
                        break;
                    case "-":
                        res = +operands[0] - +operands[1];
                        break;
                    default:
                        res = +(operands[0] + operands[1]);
                }
                stack.push(res);
            } else if (token) {
                stack.push(token);
            }
            index++;
        }
        if (stack.length > 0) {
            setOperations([]);
            setTokens([]);
            setCurrentNumberInput(stack.pop());
        }
    };
    console.log("currentOperation", currentOperation);
    console.log("tokens", tokens);
    console.log("operations", operations);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <ValueBoard value={"" + currentNumberInput} />
            </View>
            <View style={styles.keyboard}>
                <Row height={"20%"}>
                    <GridButton title="<--" />
                    <GridButton title="CE" />
                    <GridButton title="C" />
                    <GridButton title="+-" />
                    <GridButton title="sqrt" />
                </Row>
                <Row height={"20%"}>
                    <GridButton title="7" onPress={() => setNumberInput("7")} />
                    <GridButton title="8" onPress={() => setNumberInput("8")} />
                    <GridButton title="9" onPress={() => setNumberInput("9")} />
                    <GridButton
                        title="/"
                        onPress={() => setOperationInput("/")}
                    />
                    <GridButton title="%" />
                </Row>
                <Row height={"20%"}>
                    <GridButton title="4" onPress={() => setNumberInput("4")} />
                    <GridButton title="5" onPress={() => setNumberInput("5")} />
                    <GridButton title="6" onPress={() => setNumberInput("6")} />
                    <GridButton
                        title="*"
                        onPress={() => setOperationInput("*")}
                    />
                    <GridButton title="1/x" />
                </Row>
                <Row height={"40%"}>
                    <View style={{ flex: 4 }}>
                        <Row height={"50%"}>
                            <GridButton
                                title="1"
                                onPress={() => setNumberInput("1")}
                            />
                            <GridButton
                                title="2"
                                onPress={() => setNumberInput("2")}
                            />
                            <GridButton
                                title="3"
                                onPress={() => setNumberInput("3")}
                            />
                            <GridButton
                                title="-"
                                onPress={() => setOperationInput("-")}
                            />
                        </Row>
                        <Row height={"50%"}>
                            <GridButton
                                title="0"
                                size={2}
                                onPress={() => setNumberInput("0")}
                            />
                            <GridButton
                                title="."
                                onPress={() => setNumberInput(".")}
                            />
                            <GridButton
                                title="+"
                                onPress={() => setOperationInput("+")}
                            />
                        </Row>
                    </View>
                    <GridButton title="=" onPress={calculate} />
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
    keyboard: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#32350d",
        borderRadius: 15,
        padding: 5,
    },
});

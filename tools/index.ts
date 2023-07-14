const splitToDecimal = (str: string): Array<string | undefined> => {
    const splitted = str.split(".");
    let decimal: string = undefined;
    if (splitted.length > 1) {
        decimal = splitted.pop();
    }
    let integer: string =
        (splitted.join("").match(/[1-9]\d*$/) || [""])[0] || "0";

    console.log(str, [integer, decimal]);
    return [integer, decimal];
};

export const toValidNumberInput = (str: string): string => {
    if (!str) return "";

    let [integer, decimal] = splitToDecimal(str);
    return decimal === undefined ? integer : integer + "." + decimal;
};

export const toValidNumber = (str: string): string => {
    let [integer, decimal] = splitToDecimal(str);

    return decimal && !decimal.match(/^0*$/)
        ? integer + "." + decimal
        : integer;
};

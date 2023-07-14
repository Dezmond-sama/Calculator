export const toValidNumber = (str: string): string => {
    const splitted = str.split('.')
    let decimal: string = undefined;
    if (splitted.length > 1){
        decimal = splitted.pop()
    }
    let integer: string = (splitted.join('').match(/[1-9]\d*$/)||[''])[0] || '0';

    return decimal === undefined ? integer : integer+'.'+decimal;
};
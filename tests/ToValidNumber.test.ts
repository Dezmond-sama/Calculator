import { toValidNumber } from '../tools';

test("Number validating simple", () => {
    expect(toValidNumber("123")).toBe("123");
    expect(toValidNumber("1.23")).toBe("1.23");
    expect(toValidNumber("0.123")).toBe("0.123");
    expect(toValidNumber("1.")).toBe("1.");
});

test("Number validating leading zeros", () => {
    expect(toValidNumber("0.123")).toBe("0.123");
    expect(toValidNumber("0123")).toBe("123");
    expect(toValidNumber("0000123")).toBe("123");
    expect(toValidNumber("01.23")).toBe("1.23");  
});

test("Number validating create zero", () => {
    expect(toValidNumber("")).toBe("0");
    expect(toValidNumber(".123")).toBe("0.123");
    expect(toValidNumber(".0123")).toBe("0.0123");
});

test("Number validating double periods", () => {
    expect(toValidNumber("1..23")).toBe("1.23");
    expect(toValidNumber(".1.23")).toBe("1.23");
    expect(toValidNumber("1.1.23")).toBe("11.23");
    expect(toValidNumber("11.23.")).toBe("1123.");
});

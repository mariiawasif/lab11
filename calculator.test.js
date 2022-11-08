const calculator= require('./calculator');

test("Testing sum", ()=> {
    expect(calculator.sum(1,2).toBe(3));
});

test("Testing subtract", ()=> {
    expect(calculator.subtract(4,3).toBe(1));
});

test("Testing divide", ()=> {
    expect(calculator.divide(8,4).toBe(2));
});

test("Testing multiply", ()=> {
    expect(calculator.multiply(1,2).toBe(2));
});






export function parseCalculationString(s:string): Array<any> {
    // --- Parse a calculation string into an array of numbers and operators
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('%*/+-'.indexOf(ch) > -1) {
            if (current === '' && ch === '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch);
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current !== '') {
        calculation.push(parseFloat(current));
    }
    return calculation;
}

export function calculate(calc: Array<any>): Array<number> {
    // --- Perform a calculation expressed as an array of operators and numbers

    
    var ops:any = [{'%': (a=1, b=1) => a *b/100},
               {'*': (a: number, b: number) => a * b, '/': (a: number, b: number) => a / b},
               {'+': (a: number, b: number) => a + b, '-': (a: number, b: number) => a - b}],
        newCalc: Array<number> = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) {
                currentOp = ops[i][calc[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }
}
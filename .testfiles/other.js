const math = require('mathjs')

/*
variable map
——————————————————————————————————————————————————————————————————————
11              21              a  op  b           d                e
——      ∓       ——      =       ————————  =    g  ——      =     g  ——
12              22                  c              c                f
——————————————————————————————————————————————————————————————————————
                                    op                          g
                                    + = 1                       + = 1
                                    - = 0                       - = 0
a = 0, b = 1, c = 2, d = 3, e (abs) = 4, f (abs) = 5, g = 6, e = 7, f = 8

*/

function solveFraction(param11, param12, param21, param22, paramOp){
    let a = param11 * param22;
    let b = param12 * param21;
    let c = (param12 == param22) ? param22 : param12 * param22;
    let d = (paramOp == 1) ? a + b : (a - b);
    let e = ((math.abs(d*c))/(math.gcd(((d<0)?d*-1:d),c)))/c;
    let f = ((math.abs(d*c))/(math.gcd(((d<0)?d*-1:d),c)))/d;
    let g = (e < 0 || f < 0 ) ? 0 : 1;
    return [a, b, c, d, e, f, g, math.abs(c), math.abs(d), math.abs(e), math.abs(f)]
}

var a = solveFraction(1, 3, 2, 4, 0);
b = (a[6] == 1) ? "+" : "-" ;
console.log(`1\t\t2\t\t${a[0]} + ${a[1]}\t\t\t${a[3]}\t\t\t${a[4]}\n——\t+\t——\t=\t——————\t=\t${b}\t——\t=\t${b}\t——\n3\t\t4\t\t${a[2]}\t\t\t${a[2]}\t\t\t${a[5]}`)
//                                                                l2                                               l3
console.log(`a ${a[0]}\tb ${a[1]}\tc ${a[2]}\td ${a[3]}\te ${a[4]}\tf ${a[5]}\tg ${a[6]}`)
/*
variable map
——————————————————————————————————————————————————————————————————————
11              21              a  op  b           d                e
——      ∓       ——      =       ————————  =    g  ——      =     g  ——
12              22                  c              c                f
——————————————————————————————————————————————————————————————————————
——————————————————————————————————————————————————————————————————————
A                C              E  op  F          RA                RC
——      ∓       ——      =       ————————  =    g  ——      =     g   ——
B                D                  G             RB                RD
——————————————————————————————————————————————————————————————————————
                                    op                          g
                                    + = 1                       + = 1
                                    - = 0                       - = 0
a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, c(abs) = 7, d(abs) = 8, e(abs) = 9, f(abs) = 10         
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
};
$(document).ready(function() {
    $("#compareButton").click(function() {
        let _11 = $('#numberA').val();
        let _12 = $('#numberB').val();
        let _21 = $('#numberC').val();
        let _22 = $('#numberD').val();
        let _op = ($("input[name='operators']:checked").val() == "yes" ? 1 : 0);
        var fractionResults = solveFraction(_11, _12, _21, _22, _op);
        for(let i = 0; i<fractionResults.length; i++){
            console.log(`${fractionResults[i]}\n`)
        };
        $('#numberE').val(fractionResults[0]);
        $('#numberF').val(fractionResults[1]);
        $('#numberG').val(fractionResults[2]);
        $('#numberRA').val(fractionResults[8]);
        $('#numberRB').val(fractionResults[2]);
        $('#numberRC').val(fractionResults[9]);
        $('#numberRD').val(fractionResults[10]);
        $('.resultOperator').text((fractionResults[6]==1)?'+ ——————':'- ——————');
        $('#my-image').show();
    });
    $("#clearButton").click(function() {
        $('#numberA').val('');
        $('#numberB').val('');
        $('#numberC').val('');
        $('#numberD').val('');
        $('#numberE').val('');
        $('#numberF').val('');
        $('#numberG').val('');
        $('#numberRA').val('');
        $('#numberRB').val('');
        $('#numberRC').val('');
        $('#numberRD').val('');
        $('#my-image').hide();
    });
});
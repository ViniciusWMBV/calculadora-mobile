function somar(){
    var n1 =  parseFloat  (document.getElementById('n1').value);
    var n2 =  parseFloat (document.getElementById('n2').value);
    var total = n1+n2;
    document.getElementById('result').value = total;
}
function sub(){
    var n1 =  parseFloat  (document.getElementById('n1').value);
    var n2 =  parseFloat (document.getElementById('n2').value);
    var total = n1-n2;
    document.getElementById('result').value = total;
}

function div(){
    var n1 =  parseFloat (document.getElementById('n1').value);
    var n2 =  parseFloat (document.getElementById('n2').value);
    var total = n1/n2;
    document.getElementById('result').value = total;
}

function mult(){
    var n1 =  parseFloat  (document.getElementById('n1').value);
    var n2 =  parseFloat (document.getElementById('n2').value);
    var total = n1*n2;
    document.getElementById('result').value = total;
}
document.addEventListener('DOMContentLoaded', function(){
Sname= document.getElementById('sum_name');
Sdate = document.getElementById('sum_date');
Sdur = document.getElementById('sum_duration');
Speak = document.getElementById('sum_peek');
Snormal = document.getElementById('sum_normal');
Sphone = document.getElementById('sum_phone');
Semail = document.getElementById('sum_email');
Sfa = document.getElementById('sum_fa');
Sfc = document.getElementById('sum_fc');
Ssa = document.getElementById('sum_sa');
Ssc = document.getElementById('sum_sc');
Sinf = document.getElementById('sum_inf');
Stotal = document.getElementById('sum_total');
cnumber = document.getElementById('cardNumber');
form = document.getElementById('payment');
btnconf = document.getElementById('Confirm');

function UpdateSummarytable(){
    Sname.innerText = localStorage.getItem('name');
    Sdate.innerText = localStorage.getItem('date');
    Sdur.innerText = localStorage.getItem('duration');
    Speak.innerText = localStorage.getItem('Peak');
    Snormal.innerText = localStorage.getItem('Normal');
    Sphone.innerText = localStorage.getItem('number');
    Semail.innerText = localStorage.getItem('mail');
    Sfa.innerText = localStorage.getItem('Foadult');
    Sfc.innerText = localStorage.getItem('Fochild');
    Ssa.innerText = localStorage.getItem('Sladult');
    Ssc.innerText = localStorage.getItem('Slchild');
    Sinf.innerText = localStorage.getItem('Infant');
    Stotal.innerText = localStorage.getItem('Total');
}
UpdateSummarytable();
cnumber.addEventListener('input', function(){
    if(cnumber.value.length == 16){
        document.getElementById('cardNumber').style.border = '2px solid green';
    }
    else{
        document.getElementById('cardNumber').style.border = '2px solid red';
    }
});
//button Validation
function ButtonActivation(){
    if(RequirdFullfilled()){
        btnconf.removeAttribute('disabled');
}
}
function RequirdFullfilled(){
    const rfield = form.querySelectorAll('[required]')
    for(const field of rfield){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;   
}
rfield.forEach(field => field.addEventListener('input', ButtonActivation));
});
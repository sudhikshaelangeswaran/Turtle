document.addEventListener('DOMContentLoaded', function(){
    Sdate = document.getElementById('sum_date');
    Sduration = document.getElementById('sum_duration');
    Speak = document.getElementById('sum_peek');
    Snormal = document.getElementById('sum_normal');
    Sfa = document.getElementById('sum_fa');
    Sfc = document.getElementById('sum_fc');
    Ssa = document.getElementById('sum_sa');
    Ssc = document.getElementById('sum_sc');
    Sinf = document.getElementById('sum_inf');
    Stotal = document.getElementById('sum_total');
    form = document.getElementById('detailsForm');
    btndetails = document.getElementById('btnDetails');
    rfield = form.querySelectorAll('[required]');
    let funame = document.getElementById('fullName');
    let email = document.getElementById('Email');
    let number = document.getElementById('mobNum');
    Sname =document.getElementById('sum_name');
    Semail = document.getElementById('sum_email');
    Snumber = document.getElementById('sum_phone');
    cemail = document.getElementById('confirmEmail');

    function UpdateSummaryTable(){
        Sdate.innerText = localStorage.getItem('date');
        Sduration.innerText = localStorage.getItem('duration');
        Speak.innerText = localStorage.getItem('Peak');
        Snormal.innerText = localStorage.getItem('Normal');
        Sfa.innerText = localStorage.getItem('Foadult');
        Sfc.innerText = localStorage.getItem('Fochild');
        Ssa.innerText = localStorage.getItem('Sladult');
        Ssc.innerText = localStorage.getItem('Slchild');
        Sinf.innerText = localStorage.getItem('Infant');
        Stotal.innerText = localStorage.getItem('Total');
        
    }
    UpdateSummaryTable();
    //button Validation
    function ButtonActivation(){
        if(RequirdFullfilled()){
            btndetails.removeAttribute('disabled');
    }
    }
    function RequirdFullfilled(){
        for(const field of rfield){
            if(!field.value.trim()){
                return false;
            }
        }
        return true;   
    }
    rfield.forEach(field => {
        field.addEventListener('input', ButtonActivation);
    });
    //localstorage update
    btndetails.addEventListener('click', function(){
    

    localStorage.setItem('name',funame.value);
    localStorage.setItem('mail',email.value);
    localStorage.setItem('number',number.value);
    });
    //summary update
    funame.addEventListener('input', function(){
        Sname.innerText = funame.value;
    });
    email.addEventListener('input', function(){
        Semail.innerText = email.value;
    });
    number.addEventListener('input', function(){
        Snumber.innerText = number.value;
    });
    cemail.addEventListener('input', function(){
        if(cemail.value == email.value){
            cemail.style.color = 'green';
        }
        else{
            cemail.style.color = 'red';
        }
    });
});
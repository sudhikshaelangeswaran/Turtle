document.addEventListener('DOMContentLoaded', function() {
    let peak_hour = 0;
    let normal_hour = 0;
    const sDate = document.getElementById('sum_date');
    const dte = document.getElementById('date');
    const sl_adult_minus= document.getElementById('sl-adult-minus');
    const sl_adult_plus = document.getElementById('sl-adult-plus');
    const sl_adult = document.getElementById('sl-adult');
    const sl_child_minus = document.getElementById('sl-child-minus');
    const sl_child_plus = document.getElementById('sl-child-plus');
    const sl_child = document.getElementById('sl-child');
    const for_adult = document.getElementById('foreigner-adult');
    const for_adult_minus = document.getElementById('foreigner-adult-minus');
    const for_adult_plus = document.getElementById('foreigner-adult-plus');
    const for_child = document.getElementById('foreigner-child');
    const for_child_minus = document.getElementById('foreigner-child-minus');
    const for_child_plus = document.getElementById('foreigner-child-plus');
    const inf = document.getElementById('infant');
    const inf_minus = document.getElementById('infant-minus');
    const inf_plus = document.getElementById('infant-plus');
    const duration = document.getElementById('duration-dropdown');
    const peak = document.getElementById('sum_peek');
    const normal = document.getElementById('sum_normal');
    const sum_fa = document.getElementById('sum_fa');
    const sum_fc = document.getElementById('sum_fc');
    const sum_sa = document.getElementById('sum_sa');
    const sum_sc = document.getElementById('sum_sc');
    const sum_inf = document.getElementById('sum_inf');
    const sum_total = document.getElementById('sum_total');
    const form = document.getElementById('ticketBooking');
    const btnbook = document.getElementById('btnBook');
    const sum_duration = document.getElementById('sum_duration');

    //Date
    function current_date(){
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        sDate.innerText = `${year}- ${month}- ${day}`;
    }
    const sl_asult=document.getelemsbyID("sl-adult");
  
    
    function BookDate() {
        let pickdate = dte.value;
        sDate.innerText = pickdate;
    }
    current_date();
    dte.addEventListener('change', BookDate);

    //Guest increase and Decrease
    sl_adult_minus.addEventListener('click', function(){
        if(sl_adult.value > 0){
            sl_adult.value--;
            sum_sa.innerText = sl_adult.value;
        }
    });
    sl_adult_plus.addEventListener('click', function(){
        sl_adult.value++;
        sum_sa.innerText = sl_adult.value;
    })
    sl_child_minus.addEventListener('click', function(){
        if(sl_child.value > 0){
            sl_child.value--;
            sum_sc.innerText = sl_child.value;
        }
    });
    sl_child_plus.addEventListener('click', function(){
        sl_child.value++;
        sum_sc.innerText = sl_child.value;
    });
    for_adult_minus.addEventListener('click', function(){
        if(for_adult.value > 0){
            for_adult.value--;
            sum_fa.innerText = for_adult.value;
        }
    });

    for_adult_plus.addEventListener('click', function(){
        for_adult.value++;
        sum_fa.innerText = for_adult.value;
    });
    for_child_minus.addEventListener('click', function(){
        if(for_child.value > 0){
            for_child.value--;
            sum_fc.innerText = for_child.value;
        }
    });
    for_child_plus.addEventListener('click', function(){
        for_child.value++;
        sum_fc.innerText = for_child.value;
    });
    inf_minus.addEventListener('click', function(){
        if(inf.value > 0){
            inf.value--;
            sum_inf.innerText = inf.value;
        }
    });
    inf_plus.addEventListener('click', function(){
        inf.value++;
        sum_inf.innerText = inf.value;
    });

    //duration
    function DurationSetup(){
        const s1 = document.getElementById('dur1');
        const s2 = document.getElementById('dur2');
        const s3 = document.getElementById('dur3');
        const s4 = document.getElementById('dur4');
        const s5 = document.getElementById('dur5');
        const s6 = document.getElementById('dur6');
        const s7 = document.getElementById('dur7');
        const s8 = document.getElementById('dur8');
        const s9 = document.getElementById('dur9');
        const s10 = document.getElementById('dur10');
        const s11 = document.getElementById('dur11');


    duration.addEventListener('change', function(){
        let duration_in = duration.value;
        if(duration_in == "7:00 am - 8:00 am" ){
            s1.innerText = duration_in;
            normal_hour += 1;
        }else if(duration_in == "8:00 am - 9:00 am"){
            s2.innerText = duration_in;
            normal_hour += 1;
        }else if(duration_in == "9:00 am 10:00 am"){
            s3.innerText = duration_in;
            peak_hour += 1;
        }else if(duration_in == "10:00 am 11:00 am"){
            s4.innerText = duration_in;
            peak_hour += 1;
        }else if(duration_in == "11:00 am 12:00 pm"){
            s5.innerText = duration_in;
            peak_hour += 1;
        }else if(duration_in == "12:00 pm 1:00 pm"){
            s6.innerText = duration_in;
            peak_hour += 1;
        }else if(duration_in == "1:00 pm 2:00 pm"){
            s7.innerText = duration_in;
            normal_hour += 1;
        }else if(duration_in == "2:00 pm 3:00 pm"){
            s8.innerText = duration_in;
            normal_hour += 1;
        }else if(duration_in == "3:00 pm 4:00 pm"){
            s9.innerText = duration_in;
            peak_hour += 1;
        }else if(duration_in == "4:00 pm 5:00 pm"){
            s10.innerText = duration_in;
            peak_hour += 1;
        }else if(duration_in == "5:00 pm - 6:00 pm"){
            s11.innerText = duration_in;
            peak_hour += 1;
        }

        
    })

Sathila 
    }
    DurationSetup();

    // Payment Calculation
    duration.addEventListener('change', function(){
        if(peak_hour > 0){
            peak.innerText = peak_hour;
        }
        if(normal_hour > 0){
            normal.innerText = normal_hour;
        }
    

        let fav = parseInt(for_adult.value);
        let fcv = parseInt(for_child.value);
        let sav = parseInt(sl_adult.value);
        let scv = parseInt(sl_child.value);

        let pfa = fav * peak_hour * 13;
        let nfa = fav * normal_hour * 10;
        let pfc = fcv * peak_hour * 8;
        let nfc = fcv * normal_hour * 5;
        let psa = sav * peak_hour * 6;
        let nsa = sav * normal_hour * 4;
        let psc = scv * peak_hour * 3
        let nsc = scv * normal_hour * 2;

        let total = pfa + nfa + pfc + nfc + psa + nsa + psc + nsc;
        sum_total.innerText = `${total} USD`;
    });

    //button Validation
    function ButtonActivation(){
        if(RequirdFullfilled()){
            btnbook.removeAttribute('disabled');
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
    duration.addEventListener('change', ButtonActivation);
    btnbook.addEventListener('click', function(){
        localStorage.setItem('date',sDate.innerText);
        localStorage.setItem('duration',sum_duration.innerText);
        localStorage.setItem('Sladult',sum_sa.innerText);
        localStorage.setItem('Slchild',sum_sc.innerText);
        localStorage.setItem('Foadult',sum_fa.innerText);
        localStorage.setItem('Fochild',sum_fc.innerText);
        localStorage.setItem('Infant',sum_inf.innerText);
        localStorage.setItem('Total',sum_total.innerText);
        localStorage.setItem('Peak',peak.innerText);
        localStorage.setItem('Normal',normal.innerText);
    });
});



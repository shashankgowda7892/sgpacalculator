function calculate(){
    Calc();

}




function Calc(v){
    var index = $(v).parent().parent().index();
    
    var sum=0;
    var total = document.getElementsByName("mark");
    // console.log(total);
    for( index =0 ; index < total.length ; index++){
        var marks = total[index].value;
        sum = +(sum) + +(marks);
    }
 
    document.getElementById("TOTALs").value = sum;

                            // percentage
    var percent = sum/(total.length);

    document.getElementById("PERCENT").value  = percent + " %";

                        // credits
    var credit;
    credit = document.getElementsByName("credit");
    var sgpa_sum = 0;
    for( index =0 ; index < credit.length ; index++){
        var sgpa_credit = credit[index].value;
        sgpa_sum = +(sgpa_sum) + +(sgpa_credit);
    }

                         // sgpa
    // var sums = 0;
    var stotal =0;
    var ssum= 0;
    for(let index = 0 ; index < total.length ; index++){
        var smarks = total[index].value;
        var scredit = credit[index].value;
        console.log(smarks);
        if(smarks == 100){
            smarks = 10;
            var s_marks = Math.trunc(smarks);
        }
        else if(smarks<=39){
            smarks = 0;
            var s_marks = Math.trunc(smarks);
        }
        else if(smarks>=40 && smarks<=49){
            smarks = 4;
            var s_marks = Math.trunc(smarks);
        }
        else if(smarks>=50 && smarks<=54){
            smarks = 5;
            var s_marks = Math.trunc(smarks);
        }
        else{
            smarks = (+(smarks)/10)+1;
            var s_marks = Math.trunc(smarks);
            // console.log(s_marks);
        }

         stotal = +(s_marks) * +(scredit);
         ssum = +(ssum) + +(stotal);

    }
    

    //   console.log(stotal);
    // //   console.log(stotal);
    //   console.log(ssum);
    //   console.log(sgpa_sum);

 
    var sgpa = ssum/sgpa_sum;

    document.getElementById("SGPA").value = sgpa;
 
   
}


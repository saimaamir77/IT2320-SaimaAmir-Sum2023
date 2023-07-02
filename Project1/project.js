let Matt = [45, 50, 47];
let Mike = [95, 73, 40];
let Mark = [10, 32, 24];
let Milt = [86, 74, 80];

let total = [Matt, Mike, Mark, Milt];
salesByPerson();
bestAndWorst();
commissionsByMonth();

function salesByPerson()
{
   let PerPerson = "Total for each person: ";
   for (i = 0; i < total.length; i++){       
        
            if (Array.isArray(total[i])){
                let a = total[i];
                let sum =  0;
                for (x = 0; x < a.length; x++  ) {
                    sum = sum +  a[x];         
                }
                PerPerson  = PerPerson + " " + sum ; 
            }
        
    }
    alert( PerPerson );

}

function bestAndWorst()
{
    let best = -1;
    let worst = -1;
    for (i = 0; i < total.length; i++){      
        {
            if (Array.isArray(total[i])){
                let a = total[i];
                let sum =  0;
               
                for (x = 0; x < a.length; x++  ) {
                    sum = sum +  a[x];                    
                }
                
                best = best > sum ? best : sum;
                worst = worst == -1 ? sum : worst;
                worst = worst < sum ? worst : sum;

            }
            
            
        }
    }
    alert('best: ' + best + '  worst: ' + worst);

}

function commissionsByMonth()
{
   let PerPersonCommission = "Total Commission per person: "; 
   for (i = 0; i < total.length; i++){       
        {
            if (Array.isArray(total[i])){
                let a = total[i];
                let sum =  0;
                for (x = 0; x < a.length; x++  ) {
                    sum = sum +  a[x];                    
                }
                PerPersonCommission  = PerPersonCommission + " " + sum * .13 ; 

            }
        }
    }
    alert( PerPersonCommission );

}
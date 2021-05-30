class Supermarket
{
    constructor(parraypurchase)
    {
        this.arraypurchase=parraypurchase;
    }
   calc_promotion=()=>
   {
       let array=[];
      
        this.arraypurchase.map(
            purch=>
            {
               if(purch.id===11)
               {
                   return;
               }
               else
               {
                let calc=purch.total_with_discount();
                let objtotaldiscount=
                {totaldiscount:calc.totaldiscount,
                    discount:calc.discount,
                    random:calc.random,
                    name:purch.customer
                }
                array.push(objtotaldiscount);
              }
            }
          
       
        )
    
       return array;
   }
}



module.exports={Supermarket}
 class Purchase
    {
        constructor(pid,ptotal,pcustomer)
        {
            this.id=pid;
            this.total=ptotal;
            this.customer=pcustomer;
        }
        total_with_discount=()=>
        {
            let t=this.total;
            let discount=0;
           let random=Math.floor(Math.random()*(101-1)+1)
           if(random<50)
           {
            discount=t*.15;
           }
           else
           {
            discount=t*.20;
           }
           let totaldiscount=t-discount;
           return {totaldiscount,discount,random}
        }
    

    }
module.exports={Purchase}
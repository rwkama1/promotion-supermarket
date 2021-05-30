 let Purchase=require("./Purchase").Purchase;
 let Supermarket=require("./Supermarket").Supermarket;

 let arraypurchase=[];

 arraypurchase.push(new Purchase(1,25.05,"Ghael"));
 arraypurchase.push(new Purchase(2,30,"John"));
 arraypurchase.push(new Purchase(3,15,"Asd"));
 arraypurchase.push(new Purchase(4,45,"Customer4"));
 arraypurchase.push(new Purchase(5,35,"Customer5"));
 arraypurchase.push(new Purchase(6,50,"Customer6"));
 arraypurchase.push(new Purchase(7,42,"Customer7"));
 arraypurchase.push(new Purchase(8,38,"Customer8"));
 arraypurchase.push(new Purchase(9,32,"Customer9"));
 arraypurchase.push(new Purchase(10,18,"Customer10"));

 let supermarket=new Supermarket(arraypurchase);
let calc_promotion=supermarket.calc_promotion();
 const show_calc=()=>
 {
    calc_promotion.map(
         calc=>{
         console.log("                                      ");
         console.log("Name: "+calc.name);
         console.log("The number obtained at random is: "+calc.random);
         console.log("The total to pay is: USD "+calc.totaldiscount)
         console.log("The discount applied is: "+calc.discount);

         }
     )
 }
 show_calc();


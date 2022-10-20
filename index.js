var kg_rate = prompt("Put in Your Chicken Kg Rate");
var g_value = prompt("How Many Grams of Chicken Did You Buy?"); 
var convert_kg = parseInt(kg_rate);
var convert_g = parseInt(g_value);    
var g_price = convert_kg / 1000;
var total = convert_g * g_price;

 alert("Sorry sir, prompt was not breaking from us, so we did  use the alert")
var receive_price = prompt("CHICKEN 1 Kg 500 HOW MUCH DO YOU NEED, TELL ME THE MONEY")
var convert_userperice = parseInt(receive_price)
var us_price = convert_userperice / 500;
var total2 = us_price * 1000;

function myfunc1(){
    document.write("<h1>FIRST AND SECOND PROMPT RESULT</h1>")
    document.write("<br>YOUR CHICKEN GRAM PRICE <br><br><b>PRICE:</b>",total,)
    document.write("<br><br><hr><h1>THIRD PROMPT RESULT</h1>")
    document.write("<br>OR TAKE YOUR CHIKEN <br><br> <b>GRAM:</b>",total2)
}
  myfunc1()





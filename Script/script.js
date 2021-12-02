let txtname = document.getElementById("name");
let txtmail = document.getElementById("email");
let txtphone = document.getElementById("phone");

let txtguest = document.getElementById("noOfGuests");
let txtdays = document.getElementById("noOfDays");

let rdroom = document.getElementsByTagName("roomType");
let rdmeal = document.getElementsByTagName("mealType");

let txtres = document.getElementById("res");
let txtrescost = document.getElementById("rescost");
let btnres = document.getElementById("addtoreserve");

let btnreserve = document.getElementById("reserve");
let btnclearres = document.getElementById("clearres");

let txtfinal = document.getElementById("final")
let btnaddtofav = document.getElementById("addtofav");
let btncheckfav = document.getElementById("checkfav");

btnres.addEventListener("click",addtores);
btnclearres.addEventListener("click",clearcurrentres);
btnreserve.addEventListener("click",confirmation);
btnaddtofav.addEventListener("click",addtofav);

var t=0;
var rn=0;
function addtores(){
    let guests=parseInt(txtguest.value);
    let days=parseInt(txtdays.value);

    if(document.getElementById('superior').checked){
        var x = "Superior";
        var roomcost = 25000;
    }else if(document.getElementById('deluxe').checked){
        var x = "Deluxe Room";
        var roomcost = 26000;
    }else if(document.getElementById('juniorSuite').checked){
        var x = "Junior Suite Room";
        var roomcost = 35000;
    }else if(document.getElementById('presidentialSuite').checked){
        var x = "Presidential Suite Room";
        var roomcost = 40000;
    }

    if(document.getElementById('ro').checked){
        var y = "Room Only";
        var mealcost = 1500;
    }else if(document.getElementById('bb').checked){
        var y = "Breakfast & Bed";
        var mealcost = 2000;
    }else if(document.getElementById('hb').checked){
        var y = "Half Board";
        var mealcost = 3500;
    }else if(document.getElementById('fb').checked){
        var y = "Full Board";
        var mealcost = 5000;
    } 
    var total=(roomcost+mealcost)*days;
    
    t=t+total;
    rn+=1;
    txtres.innerHTML+=x+"/"+y+"\n"+"Room Charges                       LKR " + roomcost +" * "+ days + "\n" + "Service/Meal Charge and Tax      LKR" + mealcost + "*" + days + "\n" + "Total Charge for room"+rn+"               LKR "+total+"\n"+"\n";
    txtrescost.innerHTML="Total Charge           LKR "+t;
    clearform();
}

function clearcurrentres(){
    txtres.innerHTML=null;
    txtrescost.innerHTML=null;
}
function confirmation(){
    let n=txtname.value;
    alert("Thank you ! \n"+"Your Reservation is Confirmed");
    txtfinal.innerText=txtres.value;
    clearcurrentres();
}
function clearform(){
    txtguest.value=null;
    txtdays.value=null;
}
function addtofav(){
    var userPreference;
    if (confirm("ADD TO FAVORITE?") == true) {
        userPreference = "Data added to favorite successfully!";
        window.localStorage.setItem("Added to favorite",txtres);
        
    } else {
        userPreference = "Data did not add to favorite!";
    }
    txtfinal.value=null;
    alert(userPreference)
}
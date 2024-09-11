function myFunction2(){
    var number = document.getElementById("nhap").value;
    var display;
    if (number== 1){
        display = "monday";
        document.getElementById("demo").style.color = "red";
    }

    else if(number== 2){
        display = "Tuesday";
        document.getElementById("demo").style.color = "blue";
    }
    else if(number== 3){
        display = "Wednesday";
        document.getElementById("demo").style.color = "pink";
    }

    else if(number== 4){
        display = "Thursday";
        document.getElementById("demo").style.color = "green";
    }

    else if(number== 5){
        display = "Friday";
        document.getElementById("demo").style.color = "grey";
    }
    else if(number== 6){
        display = "Saturday";
        document.getElementById("demo").style.color = "yelow";
    }
    else if(number==7){
        display = "Sunday";
        document.getElementById("demo").style.color = "brown";
    }
    document.getElementById("demo").innerHTML = display;


}
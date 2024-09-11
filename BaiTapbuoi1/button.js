function myFunction(){
    var number = document.getElementById("nhap").value ;
    var greating;
    if (number==0){
        greating = "Ban duoc 0 diem";
    }
    else if (number>=0){
        greating = "Do la so duong";
    }
    else{
        greating = "Do la so am"
    }
    document.getElementById("demo").innerHTML = greating ;
}
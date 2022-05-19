function Add(){
    var ID = document.getElementById("ID").value;
    var len=ID.length;
    var Email = document.getElementById("email").value;
    var GPA = document.getElementById("GPA").value;
    var phone = document.getElementById("Phone").value;
    var phLen =phone.length;
    if(len!=8)
    {
        alert("ID must be 8 digits");
    }

    // console.log(Email.indexOf("@fci-cu.edu.eg"));
    if(Email.indexOf("@stud.cu.edu.eg")==-1)
    {
        alert("Email Should End @stud.cu.edu.eg");
    }

    if(GPA >4 || GPA<0)
    {
        alert("GPA must between 0 and 4");
    }
    if(phLen!=11)
    {
        alert("Phone must be 11 digits");
    }
    
}
function Confirm(){
    console.log(5);
    let text = "Are you sure Add Student";
    if (confirm(text) == true) {
      text = "You Add Student Successfully!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("confirm").innerHTML=text;
}








//----------------------link pages---------------- //
if(window.location.href.indexOf("main.html") > -1)
{
    let items =document.getElementsByClassName("item");
    for(let i=0;i<4;i++)
    {
        items[i].onclick = function(){
            if(i==1)
            {
                location.href = "home.html";
            }else{
                alert("Dear TA Ibrahim Gomaa\n we choose Student Affairs Project");
            }
        }
    }
}else{
    let navigation = document.getElementsByClassName("navigation");

    let arr =["home.html","AddStudent.html","UpdateInfo.html","Search.html","Department.html","login.html"];

    for(let i=0;i<7;i++)
    {
        navigation[i].onclick = function(){
            location.href = arr[i];
        }
    }
}
//----------------------link pages------------------------------ //


//--------login valid------------------------------ //
function login(){
    let E=document.getElementById("email").value;
    let P=document.getElementById("pass").value;


    if(E.indexOf("@fci-cu.edu.eg")==-1)
    {
        alert("Email should contain @fci-cu.edu.eg");
    }else{
        if(E=="I.gomaa@fci-cu.edu.eg" && P=="11559922"){
            // alert(5);
            window.location.href = "home.html";
        }else{
            alert("Invalid Email or Password\nCorrect Email:I.gomaa@fci-cu.edu.eg\nCorrect Password:11559922")
        }
    }
}

//--------login valid--------------------------------- //



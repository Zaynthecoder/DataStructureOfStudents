studnamearray= [];

function submit()
{

    var name_1 = document.getElementById("studname1").value;
    var name_2 = document.getElementById("studname2").value;
    var name_3 = document.getElementById("studname3").value;
    var name_4 = document.getElementById("studname4").value;
    var name_5 = document.getElementById("studname5").value;

    studnamearray.push(name_1);
    studnamearray.push(name_2);
    studnamearray.push(name_3);
    studnamearray.push(name_4);
    studnamearray.push(name_5);

    console.log(studnamearray);

    document.getElementById("display_name").innerHTML = studnamearray;
    document.getElementById("submitbtn").style.display = "none";
    document.getElementById("sortbtn").style.display = "inline-block";

}    

function sorting() {
    studnamearray.sort();
    console.log(studnamearray)
    document.getElementById("display_name").innerHTML = studnamearray;
}


function binToDec(num,base,type)
{  
    var temp =""+num;
    var decimal = parseInt(num,base);
    
    console.log(base+"base");
    console.log(decimal+"decimal");
    document.getElementById("oct").value = decimal.toString(8);
    document.getElementById("hex").value = decimal.toString(16).toUpperCase();
       ///
    if(type=="signed")
    {
     if(temp.startsWith("1"))
     {
        c = parseInt(temp.substr(1),base);
        var b = "- "+c.toString(10);
     }
     else{
         c = parseInt(temp.substr(1),base);
         var b = c.toString(10);
     }

      ///
     
     console.log(b);
     document.getElementById("dec").value =b; 
    }
    else{
        var decimal = parseInt(num,base);
        document.getElementById("dec").value =decimal.toString(10); 
    }
    if(temp.startsWith("0"))
    {
        document.getElementById("bin").value =temp.substr(0,1)+decimal.toString(2);////
    }
    else{
        document.getElementById("bin").value = decimal.toString(2);////
    }
 

}

function conver()
{   
    var check=1;
    var ele = document.getElementsByClassName("math");
    l = ele.length;

    if(check==1)
    {
        if(ele[0].value!="")
    {   
       if(document.getElementById("Signed").checked)
        {   
            binToDec(ele[0].value,2,"signed");
            check = 2;
        }
        else{
            binToDec(ele[0].value,2,"unsigned");
            check = 2;
           }
    }

   else if(ele[1].value!="")
    {   
        var num =ele[1].value;
        binToDec(num,8);
        check = 2;
    }

   else if(ele[2].value!="")
    {
        binToDec(ele[2].value,10);
        check = 2;
    }

    else if(ele[3].value!="")
    {
        binToDec(ele[3].value,16);
        check = 2;
    }
    }
}






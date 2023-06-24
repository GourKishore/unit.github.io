
let propertyoflength=["Kilometre","Meter","Foot"];
let propertyofvolume=["Gallon","Liter","Mililiter"];
let propertyofmemory=["GB","MB","KB"];

let option="";
//------------------------------------------- for dropdown clearing 
function clearCombo() {
    var x = document.getElementById("first");
    var y = document.getElementById("second");
    for(i=0;i<4;i++){
        x.remove(x.i);
      y.remove(y.i);
     }
  }
//-------------------------------------------------onblur for remove input box
function blurfunc()
{
     document.f2.input1.value=""; 
     document.f3.input2.value="";
}
// -----------------------------------------------onchange function
function propertychange(element){
    var a="";
    a=element.value;
    if(a=="length")
    {
        clearCombo();
        for(let i=0;i<propertyoflength.length;i++)
        {
           document.f2.s2.options.add(new Option(propertyoflength[i], propertyoflength[i]));
           document.f3.s3.options.add(new Option(propertyoflength[i], propertyoflength[i]));
        }

     }
    else if(a=="volume")
    {
        clearCombo();
        for(let i=0;i<propertyofvolume.length;i++)
       {
            document.f2.s2.options.add(new Option(propertyofvolume[i], propertyofvolume[i])); 
            document.f3.s3.options.add(new Option(propertyofvolume[i], propertyofvolume[i])); 
       }
    }
    else if(a=="memory_unit")
    {
        clearCombo();
        for(let i=0;i<propertyofmemory.length;i++)
        {
            document.f2.s2.options.add(new Option(propertyofmemory[i], propertyofmemory[i]));
            document.f3.s3.options.add(new Option(propertyofmemory[i], propertyofmemory[i]));
        }
    }
    else
        console.log("error");
    
}



// -----------------------------------------------calculation function
function calfunc1()
{ 
    let m=document.f2.s2.value;
    let n=document.f3.s3.value;
    if(m == "Kilometre" && n == "Meter")
    {
        document.f3.input2.value=(document.f2.input1.value)*1000;
    }
    else if(m == "Kilometre" && n == "Foot")
    {
        document.f3.input2.value=(document.f2.input1.value)*3280.84;
    }
    else if(m == "Kilometre" && n == "Kilometre")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "Meter" && n == "Kilometre")
    {
        document.f3.input2.value=(document.f2.input1.value)/1000;
    }
    else if(m == "Meter" && n == "Foot")
    {
        document.f3.input2.value=(document.f2.input1.value)*3.280;
    }
    else if(m == "Meter" && n == "Meter")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "Foot" && n == "Kilometre")
    {
        document.f3.input2.value=(document.f2.input1.value)/3281;
    }
    else if(m == "Foot" && n == "Meter")
    {
        document.f3.input2.value=(document.f2.input1.value)/3.280;
    }
    else if(m == "Foot" && n == "Foot")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    
    //-------------------------------volume------------------------------------------
    
    else if(m == "Gallon" && n == "Liter")
    {
        document.f3.input2.value=(document.f2.input1.value)*3.78541;
    }
    else if(m == "Gallon" && n == "Mililiter")
    {
        document.f3.input2.value=(document.f2.input1.value)*3785.41;
    }
    else if(m == "Gallon" && n == "Gallon")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "Liter" && n == "Liter")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "Liter" && n == "Mililiter")
    {
        document.f3.input2.value=(document.f2.input1.value)*1000;
    }
    else if(m == "Liter" && n == "Gallon")
    {
        document.f3.input2.value=(document.f2.input1.value)/3.78541;
    }
    else if(m == "Mililiter" && n == "Liter")
    {
        document.f3.input2.value=(document.f2.input1.value)/1000;
    }
    else if(m == "Mililiter" && n == "Mililiter")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "Mililiter" && n == "Gallon")
    {
        document.f3.input2.value=(document.f2.input1.value)/3785;
    }

    //------------------------------------------ Memory-----------------------
    
    else if(m == "GB" && n== "GB")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "GB" && n== "MB")
    {
        document.f3.input2.value=(document.f2.input1.value)*1024;
    }
    else if(m == "GB" && n== "KB")
    {
        document.f3.input2.value=(document.f2.input1.value)*1048576;
    }
    else if(m == "MB" && n== "GB")
    {
        document.f3.input2.value=(document.f2.input1.value)/1024;
    }
    else if(m == "MB" && n== "MB")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
    else if(m == "MB" && n== "KB")
    {
        document.f3.input2.value=(document.f2.input1.value)*1024;
    }
    else if(m == "KB" && n== "GB")
    {
        document.f3.input2.value=(document.f2.input1.value)/1048576;
    }
    else if(m == "KB" && n== "MB")
    {
        document.f3.input2.value=(document.f2.input1.value)/1024;
    }
    else if(m == "KB" && n== "KB")
    {
        document.f3.input2.value=(document.f2.input1.value);
    }
}

function calfunc2()
{ 
    
    let x=document.f3.s3.value;
    let y=document.f2.s2.value;
    if(x == "Kilometre" && y == "Meter")
    {
        document.f2.input1.value=(document.f3.input2.value)*1000;
    }
    else if(x == "Kilometre" && y == "Foot")
    {
        document.f2.input1.value=(document.f3.input2.value)*3280.84;
    }
	else if(x == "Kilometre" && y == "Kilometre")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "Meter" && y == "Meter")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "Meter" && y == "Foot")
    {
        document.f2.input1.value=(document.f3.input2.value)*3.280;
    }
    else if(x == "Meter" && y == "Kilometre")
    {
        document.f2.input1.value=(document.f3.input2.value)/1000;
    }
    else if(x == "Foot" && y == "Kilometre")
    {
        document.f2.input1.value=(document.f3.input2.value)/3281;
    }
    else if(x == "Foot" && y == "Meter")
    {
        document.f2.input1.value=(document.f3.input2.value)/3.280;
    }
    else if(x == "Foot" && y == "Foot")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    //-------------------------------volume------------------------------------------
    
    else if(x == "Gallon" && y == "Liter")
    {
        document.f2.input1.value=(document.f3.input2.value)*3.78541;
    }
    else if(x == "Gallon" && y == "Mililiter")
    {
        document.f2.input1.value=(document.f3.input2.value)*3785.41;
    }
    else if(x == "Gallon" && y == "Gallon")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "Liter" && y == "Liter")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "Liter" && y == "Mililiter")
    {
        document.f2.input1.value=(document.f3.input2.value)*1000;
    }
    else if(x == "Liter" && y == "Gallon")
    {
        document.f2.input1.value=(document.f3.input2.value)/3.78541;
    }
    else if(x == "Mililiter" && y == "Liter")
    {
        document.f2.input1.value=(document.f3.input2.value)/1000;
    }
    else if(x == "Mililiter" && y == "Mililiter")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "Mililiter" && y == "Gallon")
    {
        document.f2.input1.value=(document.f3.input2.value)/3785;
    }

    //------------------------------------------ Memory-----------------------
    
    else if(x == "GB" && y == "GB")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "GB" && y == "MB")
    {
        document.f2.input1.value=(document.f3.input2.value)*1024;
    }
    else if(x == "GB" && y == "KB")
    {
        document.f2.input1.value=(document.f3.input2.value)*1048576;
    }
    else if(x == "MB" && y == "GB")
    {
        document.f2.input1.value=(document.f3.input2.value)/1024;
    }
    else if(x == "MB" && y == "MB")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
    else if(x == "MB" && y == "KB")
    {
        document.f2.input1.value=(document.f3.input2.value)*1024;
    }
    else if(x == "KB" && y == "GB")
    {
        document.f2.input1.value=(document.f3.input2.value)/1048576;
    }
    else if(x == "KB" && y == "MB")
    {
        document.f2.input1.value=(document.f3.input2.value)/1024;
    }
    else if(x == "KB" && y == "KB")
    {
        document.f2.input1.value=(document.f3.input2.value);
    }
}







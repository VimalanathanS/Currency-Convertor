async function change()
{
    let c1=document.getElementById("input1").value.toUpperCase();
    let c2=document.getElementById("input2").value.toUpperCase();
    let amt=parseFloat(document.getElementById("input3").value);
    if (!c1 || !c2 || isNaN(amt)) {
        window.alert('Please enter valid currency codes and amount.');
        return;
    }
    const apikey='d4e9ec1ba1decb5c11638734';
    const url=`https://v6.exchangerate-api.com/v6/${apikey}/latest/${c1}`;
    try 
    {
        const response = await fetch(url);
        if (!response.ok) 
        {
            window.alert('Country not Found...');    
            return;                
        }
        const data=await response.json();
        const rate=data.conversion_rates[c2];
        if (rate) 
        {
            const camt = amt * rate;
            console.log(camt);
            document.getElementById("result").value=camt.toFixed(2);
        } 
        else 
            window.alert('Conversion rate for the second country not found...');
    }
    catch{}
}
var ct=0;
function theme()
{
    ct++;
    if(ct%2!=0)
        dark();
    else
        light();
}
function dark()
{
    document.getElementById("bg").style.backgroundImage = "url('Lawrencium.jpg')";
    document.getElementById("h1").style.color="white";
    document.getElementById("contain").style.boxShadow="0 0 20px #ffffff";
    document.getElementById("input1").style.boxShadow="0 0 10px #ffffff";
    document.getElementById("input2").style.boxShadow="0 0 10px #ffffff";
    document.getElementById("input3").style.boxShadow="0 0 10px #ffffff";
    document.getElementById("result").style.boxShadow="0 0 10px #ffffff";
    document.getElementById("sub").style.boxShadow="0 0 10px #ffffff";
    document.getElementById("the").style.backgroundImage="linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%)";
    document.getElementById("the").style.color="black";
    document.getElementById("the").style.boxShadow="0 0 10px #ffffff";
    document.getElementById("the").innerHTML="Light";
}
function light()
{
    document.getElementById("h1").style.color="black";
    document.getElementById("bg").style.backgroundImage = "url('Cool\ Sky.jpg')";
    document.getElementById("contain").style.boxShadow="0 0 20px #000";    
    document.getElementById("input1").style.boxShadow="0 0 15px #000";
    document.getElementById("input2").style.boxShadow="0 0 15px #000";
    document.getElementById("input3").style.boxShadow="0 0 15px #000";
    document.getElementById("result").style.boxShadow="0 0 15px #000";
    document.getElementById("sub").style.boxShadow="0 0 5px #000";
    document.getElementById("the").style.backgroundImage="linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%)";
    document.getElementById("the").style.color="white";
    document.getElementById("the").style.boxShadow="0 0 10px #000";
    document.getElementById("the").innerHTML="Dark";
    
}
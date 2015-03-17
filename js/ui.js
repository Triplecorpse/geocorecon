/**
 * Created by Triplecorpse on 17.03.2015.
 */
/**
 * Created by Eldar_Khaitov on 3/17/2015.
 */
//document.getElementById("ddmmss").setAttribute("pattern","^[+,-]?\\d{1,3}[°]\\d{1,2}[']\\d{1,2}[\"]\\s\\d{1,3}[°]\\d{1,2}[']\\d{1,2}[\"]$");
//document.getElementById("ddmmmm").setAttribute("pattern","^[+,-]?\\d{1,3}[°]\\d{1,2}[.]\\d{1,2}[']\\s[+,-]?\\d{1,3}[°]\\d{1,2}[.]\\d{1,2}[']$");
//document.getElementById("dddd").setAttribute("pattern","^[+,-]?\\d{1,3}[.]\\d+[°]?\\s[+,-]?\\d{1,3}[.]\\d+[°]?$");
function inputChange(id)
{
    if((id == "ddmmss") && (document.getElementById("ddmmss").value != ""))
    {
        document.getElementById("ddmmmm").disabled = true;
        document.getElementById("dddd").disabled = true;
    }
    else if((id == "ddmmmm") && (document.getElementById("ddmmmm").value != ""))
    {
        document.getElementById("ddmmss").disabled = true;
        document.getElementById("dddd").disabled = true;
    }
    else if((id == "dddd") && (document.getElementById("dddd").value != ""))
    {
        document.getElementById("ddmmss").disabled = true;
        document.getElementById("ddmmmm").disabled = true;
    }
    else
    {
        document.getElementById("ddmmss").disabled = false;
        document.getElementById("ddmmmm").disabled = false;
        document.getElementById("dddd").disabled = false;

        document.getElementById("ddmmss").value = "";
        document.getElementById("ddmmmm").value = "";
        document.getElementById("dddd").value = "";
    }
}

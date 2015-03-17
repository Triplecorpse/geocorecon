/**
 * Created by Triplecorpse on 16.03.2015.
 */
//defining global variables
var gddmmss;
var gddmmPointM8;
var gddPointD8;

//global dd, mm and ss respectively
var latdd, latmm, latss;
var londd, lonmm, lonss;

//first we will see what field is filled
function checkFill()
{
    var ddmmss = document.getElementById("ddmmss").value;
    var ddmmmm = document.getElementById("ddmmmm").value;
    var dddd = document.getElementById("dddd").value;

    if(ddmmss.length != 0)
    {
        var latitude, longitude;

        sliceData(ddmmss);
        fromDdmmss(latdd, latmm, latss);
        latitude = gddmmPointM8;
        longitude = gddPointD8;

        fromDdmmss(londd, lonmm, lonss);
        latitude = latitude + " " + gddmmPointM8;
        longitude = longitude + " " + gddPointD8;

        document.getElementById("ddmmmm").value = latitude;
        document.getElementById("dddd").value = longitude;
    }

    if(ddmmmm.length != 0)
    {
        var latitude, longitude;

        sliceData(ddmmmm);
        fromDdmmPointM8(latdd, latmm);
        latitude = gddmmss;
        longitude = gddPointD8;

        fromDdmmPointM8(londd, lonmm);
        latitude = latitude + " " + gddmmss;
        longitude = longitude + " " + gddPointD8

        document.getElementById("ddmmss").value = latitude;
        document.getElementById("dddd").value = longitude;
    }

    if(dddd.length != 0)
    {
        var latitude, longitude;

        sliceData(dddd);
        fromDdPointD8(latdd);
        latitude = gddmmss;
        longitude = gddmmPointM8;

        fromDdPointD8(londd);
        latitude = latitude + " " + gddmmss;
        longitude = longitude + " " + gddmmPointM8;

        document.getElementById("ddmmss").value = latitude;
        document.getElementById("ddmmmm").value = longitude;
    }
}

//this function has to fill gdd, gmm and gss in any representation
function sliceData(data)
{
    //regexes
    var reddmmss = /^[+,-]?[0-9]{1,3}[°][0-9]{1,2}['][0-9]{1,2}["]$/;
    var reddmm = /^[+,-]?\d{1,3}[°]\d+[.]?\d{0,}[']/;
    //var redddd = /^[+,-]?[0-9]{1,3}[.][0-9]+[°]?$/;

    //if there is more than one whitespace
    if((data.indexOf(" ") != data.lastIndexOf(" ")) && (data.indexOf(" ") != -1))
    {
        alert("Неправильно введны данные. В поле должен быть один пробел.");
        throw "More than one whitespace";
    }

    //defining coordinates in text mode
    var latitude = data.slice(0, data.indexOf(" "));
    var longitude = data.slice(data.indexOf(" ") + 1);

    //--------identifying variables------------------------------------------------------------------------------------

    //degrees in any case
    latdd = latitude.slice(0, latitude.search(/[°]/));
    londd = longitude.slice(0, longitude.search(/[°]/));

    //minutes if exist
    if((latitude.search(reddmm) != -1) && (longitude.search(reddmm) != -1))
    {
        latmm = latitude.slice(latitude.search(/[°]/) + 1, latitude.search(/[']/));
        lonmm = longitude.slice(longitude.search(/[°]/) + 1, longitude.search(/[']/));
    }

    //seconds if exist
    if((latitude.search(reddmmss) != -1) && (longitude.search(reddmmss) != -1))
    {
        latss = latitude.slice(latitude.search(/[']/) + 1, latitude.search(/["]/));
        lonss = longitude.slice(longitude.search(/[']/) + 1, longitude.search(/["]/));
    }
}

/**
 * Created by Triplecorpse on 16.03.2015.
 */
//there are three representations:
//ddºmm'ss", ddºmm.mmmmmmmm', dd.ddddddddº

//this function converts from ddºmm'ss" to all others
function fromDdmmss(dd, mm, ss)
{
    gddPointD8 = dd / 1 + mm / 60 + ss / 3600;
    fromDdPointD8(gddPointD8);
}

//this function converts from ddºmm.mmmmmmmm to all others
function fromDdmmPointM8(dd, mmPointM8)
{
    gddPointD8 = dd / 1 + mmPointM8 / 60;
    fromDdPointD8(gddPointD8);
}

//this function converts from dd.ddddddddº to all others
function fromDdPointD8(ddPointD8)
{
    var dd = truncate(ddPointD8);
    var mm = (ddPointD8 - dd) * 60;
    var ss = ((ddPointD8 - dd) * 60 - mm) * 60;
    gddmmss = dd + "°" + truncate(mm) + "'" + ss + '"';
    gddmmPointM8 = dd + "°" + mm + "'";
}

//additional function for some conversions
function truncate(number)
{
    return number > 0
        ? Math.floor(number)
        : Math.ceil(number);
}

function chooseConverter()
{

}

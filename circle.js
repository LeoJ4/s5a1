function calcCircleArea(radius)
{
	var a = radius * radius * Math.PI;
	return a;
}

var radius;	
radius = window.prompt("Enter radius of circle","");
var a = "Radius = ";
var b = parseFloat(radius) + "; ";
var c = " Area of Circle = " + calcCircleArea(parseFloat(radius));
var z = a + b + c ;
window.alert(""+z);


  function process() 
  {
  	document.getElementById("num1").focus();
  	var number1, number2, n1, n2, sum;
  	/*
    number1 = document.forms["myform"].elements["num1"].value;
    number2 = document.forms["myform"].elements["num2"].value;
    */

    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;



    n1=parseInt(number1);
    n2=parseInt(number2);

    sum = n1 + n2;
    
/*
    var outputHtml = "";
        outputHtml += "<table>";
        outputHtml += "<tr><th>State</th><th>Capital</th></tr>";
        outputHtml += "<tr><td>CA</td><td>Sacramento</td></tr>";
        outputHtml += "<tr><td>NY</td><td>Albany</td></tr>";
        outputHtml += "</table>" ;
*/
        

  
    document.getElementById("result").innerHTML = ("The inputted numbers are " + n1 + " ," + n2 + "<br>The sum of the itergers are " + sum);
  }


function res() {
	document.getElementById("result").innerHTML = "";
	document.getElementById("num1").focus();
	
}
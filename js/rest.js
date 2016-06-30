var flag = 0;//using global flag variable to toggle between different values for flag so as to hide and show key-value editor on pressing params button
var data = "";
$("#params").click(function(){
	var params = {
					 placeHolderKey:"PARAMETER KEY",
					 placeHolderValue:"PARAMETER VALUE",
					 toggleButton: "Toggle_custom",
					 deleteButton:'<img class="deleteButton" src="img/delete.png">'
					};
					if(flag==0)
					{
						$("#kve_custom").show();
						$("#kve_custom").keyvalueeditor('init',params);
						flag=1;
					}
					else
					{
						$("#kve_custom").hide();
						flag=0;
					}
					
					$(".btn.btn-success").toggle();
});
$("#update").click(function(){

	var result = $("#kve_custom").keyvalueeditor('getValues');
	if(document.querySelector('select.btn.btn-default.dropdown-toggle').value == "item1")
	{
	 document.getElementById("myurl").value += '?'+$.param(result);
	}
	else 
	{
		alert("Since it's a request other than GET ,the parameters would be sent as content",function()
		{
			data = $.param(result);
		});
	}
});

//BELOW ARE METHODS TO HANDLE HTTP REQUESTS
$( window ).load(function(){
$(".btn.btn-primary").click(function(){
	if(document.getElementById("myurl").value == "")
	{
		alert("url can't be left blank");

	}
	else if(document.querySelector('select.btn.btn-default.dropdown-toggle').value == "item1")
	{
var req = new XMLHttpRequest();
var url = document.getElementById("myurl").value;
req.open("GET", url, true);
req.onreadystatechange = function() {
  if (req.readyState == 4) {
    // WARNING! Might be injecting a malicious script!
    $("#header").text(req.getAllResponseHeaders());
    $("#raw").text(req.responseText);
    $("#request").text("It's a GET request to "+url);
    }
   

    
  }

req.send();
}
else if(document.querySelector('select.btn.btn-default.dropdown-toggle').value == "item2")
{
	
	
var url = document.getElementById("myurl").value;
var http = new XMLHttpRequest();

//var params = "lorem=ipsum&name=binny";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
   	$("#header").text(http.getAllResponseHeaders());
    $("#raw").text(http.responseText);
    $("#request").text("It's a POST request to "+url);
    }
    else
    {
    	$("#raw").text("CAN'T PERFORM POST REQUEST ON THIS PAGE");
    	$("#header").text("CAN'T PERFORM POST REQUEST ON THIS PAGE");
    	$("#request").text("CAN'T PERFORM POST REQUEST ON THIS PAGE");
    }
}
http.send(data);
}

else if(document.querySelector('select.btn.btn-default.dropdown-toggle').value == "item3")
{
	var url = document.getElementById("myurl").value;

	var http = new XMLHttpRequest();

//var params = "lorem=ipsum&name=binny";
http.open("PUT", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
   	$("#header").text(http.getAllResponseHeaders());
    $("#raw").text(http.responseText);
    $("#request").text("It's a PUT request to "+url);
    }
    else
    {
    	$("#raw").text("CAN'T PERFORM PUT REQUEST ON THIS PAGE");
    	$("#header").text("CAN'T PERFORM PUT REQUEST ON THIS PAGE");
    	$("#request").text("CAN'T PERFORM PUT REQUEST ON THIS PAGE");
    }
}
http.send(data);
}


else 
{
	var url = document.getElementById("myurl").value;

	var http = new XMLHttpRequest();

//var params = "lorem=ipsum&name=binny";
http.open("DELETE", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
   	$("#header").text(http.getAllResponseHeaders());
    $("#raw").text(http.responseText);
    $("#request").text("It's a DELETE request to "+url);
    }
    else
    {
    	$("#raw").text("CAN'T PERFORM DELETE REQUEST ON THIS PAGE");
    	$("#header").text("CAN'T PERFORM DELETE REQUEST ON THIS PAGE");
    	$("#request").text("CAN'T PERFORM DELETE REQUEST ON THIS PAGE");
    }
}
http.send(data);
}


});
});



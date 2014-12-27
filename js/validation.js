function validate()
{
	if(window.document.myform.name.value=="")
	{
		alert("Name field is Mandatory");
		window.document.myform.name.focus();
		return false;		
	}
	if(window.document.myform.designation.value=="")
	{
		alert("Please mention the designation");
		window.document.myform.designation.focus();
		return false;		
	}
	if(window.document.myform.email.value=="")
	{
		alert("E-mail field is Mandatory");
		window.document.myform.email.focus();
		return(false);
	}
	str=window.document.myform.email.value;
	if(str.indexOf("@")==-1 ||str.indexOf(".")==-1 ||str.indexOf(",")!=-1||str.indexOf("?")!=-1||str.indexOf("%")!=-1||str.indexOf("<")!=-1||str.indexOf(">")!=-1||str.indexOf("&")!=-1||str.indexOf("+")!=-1||str.indexOf("=")!=-1||str.indexOf(" ")!=-1)
	{
		alert("Enter A Valid E-mail Id");
		window.document.myform.email.focus();
		return(false);
	}
	if(window.document.myform.comments.value=="")
	{
		alert("Please mention your query/suggestion/feedback");
		window.document.myform.comments.focus();
		return false;		
	}
}
$( document ).ready(function() {
	createLogIn();
});

function createLogIn(){
	var logInBox= $('<div>',{
		class: "logInBox"
	}).appendTo($('.log-in'))
	var block0 = $('<div>',{
		class:"headerblock"
	}).appendTo(logInBox)
	$('<h2>',{
		class: "head",
		html: "Welcome"
	}).appendTo(block0)
	
	var block1 = $('<div>',{
		class:"block"
	}).appendTo(logInBox)

	$('<h6>',{
		html: "Username"
	}).appendTo(block1)
	$('<input>',{
		id: "input-username",
		type:"text",
		placeholder:"haha"
	}).appendTo(block1)
	var block2 = $('<div>',{
		class:"block"
	}).appendTo(logInBox)
	$('<h6>',{
		html: "Password"
	}).appendTo(block2)
	$('<input>',{
		id: "input-password",
		type: "text",
		placeholder: "Wyxha0-fertob-zegtud"
	}).appendTo(block2)
	
	var link = $('<a>',{
		href:"./search.html"
	}).appendTo(logInBox)
	/*****Add onclick function****/
	$('<button>',{
		id: "log-in",
		type:"submit",
		html: "Sign In",
		class:"submit-btn",
		onclick: "authticateUser()"
	}).appendTo(link)
}

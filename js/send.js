//Создание списка выбранных статей  
var label1 = document.querySelectorAll(".documents_main label");
var showOrHide = function() {
    for (i=0;i<checkboxes1.length;i++){
		if (checkboxes1[i].checked) {
			if(document.querySelector(".attached_docs"+i)) {}
			else {
			var div = document.createElement('div');
			div.className = "attached attached_docs attached_docs"+i;
			div.innerHTML = label1[i].textContent + "<hr>";
			attached_links.appendChild(div);
			var bask = document.createElement('div');
			bask.className = "bask bask"+i;
			document.querySelector(".attached_docs"+i).appendChild(bask);
			delArticle(".bask"+i,".attached_docs"+i,"checkbox-"+i);
			}
		}
		else if(document.querySelector(".attached_docs"+i))
		document.querySelector(".attached_docs"+i).remove();
		counting();
	}};
for (i=0;i<checkboxes1.length;i++){
checkboxes1[i].addEventListener("change", showOrHide)};

var label2 = document.querySelectorAll(".links_main label");
var showOrHide2 = function() {
    for (i=0;i<checkboxes2.length;i++){
		if (checkboxes2[i].checked) {
			if(document.querySelector(".attached_links"+i)) {}
			else {
			var div = document.createElement('div');
			div.className = "attached attached_links attached_links"+i;
			div.innerHTML = label2[i].textContent + "<hr>";
			attached_links.appendChild(div);
			var bask = document.createElement('div');
			bask.className = "bask bask2"+i;
			document.querySelector(".attached_links"+i).appendChild(bask);
			delArticle(".bask2"+i,".attached_links"+i,"checkbox-2"+i);
			}
		}
		else if(document.querySelector(".attached_links"+i))
		document.querySelector(".attached_links"+i).remove();
		counting();
	}};
for (i=0;i<checkboxes2.length;i++){
checkboxes2[i].addEventListener("change", showOrHide2)};


var label3 = document.querySelectorAll(".science_main label");
var showOrHide3 = function() {
    for (i=0;i<checkboxes3.length;i++){
		if (checkboxes3[i].checked) {
			if(document.querySelector(".attached_science"+i)) {}
			else {
			var div = document.createElement('div');
			div.className = "attached attached_science attached_science"+i;
			div.innerHTML = label3[i].textContent + "<hr>";
			attached_links.appendChild(div);
			var bask = document.createElement('div');
			bask.className = "bask bask3"+i;
			document.querySelector(".attached_science"+i).appendChild(bask);
			delArticle(".bask3"+i,".attached_science"+i,"checkbox-3"+i);
			}
		}
		else if(document.querySelector(".attached_science"+i))
		document.querySelector(".attached_science"+i).remove();
		counting();
	}};
for (i=0;i<checkboxes3.length;i++){
checkboxes3[i].addEventListener("change", showOrHide3)};

document.getElementById("checkbox-111").addEventListener("change", showOrHide);
document.getElementById("checkbox-211").addEventListener("change", showOrHide2);
document.getElementById("checkbox-311").addEventListener("change", showOrHide3);


// К-во выбраных статей 
var countText;
function counting() {
	var count = document.querySelector(".count");
	window.countText = document.getElementById('attached_links').childNodes.length + " attached links";
	count.innerHTML = countText;
}
counting();


// Кнопка "Удалить" (синяя корзинка)
function delArticle(a,b,c){
	document.querySelector(a).addEventListener("click",function() {
	document.querySelector(b).remove();
	document.getElementById(c).checked = false;
	counting();
	})
};


//SEND button
var send = document.querySelector("input[type='button']");
var userName = document.querySelector("input[id='name']");
var email = document.querySelector("input[id='email']");
var message = document.querySelector("input[id='message']");
var sendingLinks = document.getElementById("attached_links");
	
send.addEventListener("click",function(event) {
	event.preventDefault();
	var articlesList = "";
	for (i=0;i<document.getElementById('attached_links').childNodes.length;i++){
		var k=i+1;
		var articlesList = articlesList + k + ". " + sendingLinks.children[i].childNodes[0].nodeValue + "\n\r";
	}
	alert("Name: " + userName.value + 
		  "\n\rEmail: " + email.value + 
		  "\n\rMessage: " + message.value +
		  "\n\r" + countText + ":\n\r" + articlesList);
	userName.value="";
	email.value="";
	message.value="";
	document.getElementById("attached_links").innerHTML = "";
	counting();
	for (i=0;i<document.querySelectorAll('input[type="checkbox"]').length;i++){
	document.querySelectorAll('input[type="checkbox"]')[i].checked = false;};
	showOrHideAddRemoveButtons(cadd,cremove);
	showOrHideAddRemoveButtons(cadd2,cremove2);
	showOrHideAddRemoveButtons(cadd3,cremove3);
});
//Buttons Add_All, Remove_All
//For documents
var showOrHideAddRemoveButtons = function(show,hide){
	hide.classList.remove("visible");
	hide.classList.toggle("hide");
	show.classList.remove("hide");
	show.classList.toggle("visible");
};
var checkboxes1 = document.querySelectorAll(".documents_main input");
var checkall = document.getElementById('checkbox-111');
for(var i=0; i<checkboxes1.length; i++) {
    checkboxes1[i].onclick = function() {
        var checkedCount = document.querySelectorAll('.documents_main input:checked').length;
		checkall.checked = checkedCount == checkboxes1.length;
        checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes1.length;
		if(checkedCount == checkboxes1.length) {showOrHideAddRemoveButtons(cremove,cadd)};
		if(checkedCount < checkboxes1.length) {showOrHideAddRemoveButtons(cadd,cremove)};
    }
}
checkall.onclick = function() {
    for(var i=0; i<checkboxes1.length; i++) {
        checkboxes1[i].checked = this.checked;
    }
}
var cadd = document.querySelector(".add_all_documents");
var cremove = document.querySelector(".remove_all_documents");
cadd.addEventListener("click",function() {showOrHideAddRemoveButtons(cremove,cadd)});
cremove.addEventListener("click",function() {showOrHideAddRemoveButtons(cadd,cremove)});

//For links
var checkboxes2 = document.querySelectorAll(".links_main input");
var checkall2 = document.getElementById('checkbox-211');
for(var i=0; i<checkboxes2.length; i++) {
    checkboxes2[i].onclick = function() {
        var checkedCount2 = document.querySelectorAll('.links_main input:checked').length;
        
        checkall2.checked = checkedCount2 == checkboxes2.length;
        checkall2.indeterminate = checkedCount2 > 0 && checkedCount2 < checkboxes2.length;
		if(checkedCount2 == checkboxes2.length) {showOrHideAddRemoveButtons(cremove2,cadd2)}
		if(checkedCount2 < checkboxes2.length) {showOrHideAddRemoveButtons(cadd2,cremove2)}
	}
}
checkall2.onclick = function() {
    for(var i=0; i<checkboxes2.length; i++) {
        checkboxes2[i].checked = this.checked;
    }
}
var cadd2 = document.querySelector(".add_all_links");
var cremove2 = document.querySelector(".remove_all_links");
cadd2.addEventListener("click",function() {showOrHideAddRemoveButtons(cremove2,cadd2)});
cremove2.addEventListener("click",function() {showOrHideAddRemoveButtons(cadd2,cremove2)});

//For science
var checkboxes3 = document.querySelectorAll(".science_main input");
var checkall3 = document.getElementById('checkbox-311');
for(var i=0; i<checkboxes3.length; i++) {
    checkboxes3[i].onclick = function() {
        var checkedCount3 = document.querySelectorAll('.science_main input:checked').length;
        
        checkall3.checked = checkedCount3 == checkboxes3.length;
        checkall3.indeterminate = checkedCount3 > 0 && checkedCount3 < checkboxes3.length;
		if(checkedCount3 == checkboxes3.length) {showOrHideAddRemoveButtons(cremove3,cadd3)}
		if(checkedCount3 < checkboxes3.length) {showOrHideAddRemoveButtons(cadd3,cremove3)}
	}
}
checkall3.onclick = function() {
    for(var i=0; i<checkboxes3.length; i++) {
        checkboxes3[i].checked = this.checked;
    }
}
var cadd3 = document.querySelector(".add_all_science");
var cremove3 = document.querySelector(".remove_all_science");
cadd3.addEventListener("click",function() {showOrHideAddRemoveButtons(cremove3,cadd3)});
cremove3.addEventListener("click",function() {showOrHideAddRemoveButtons(cadd3,cremove3)});
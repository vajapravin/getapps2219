/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/


var popupStatus = 0;

function loadPopup(){
	if(popupStatus==0){
		$("#darkBackgroundPopUp").css({
			"opacity": "0.7"
		});
		$("#darkBackgroundPopUp").fadeIn("slow");
		$("#loginPopup").fadeIn("slow");
		popupStatus = 1;
	}
}

function disablePopup(){
	if(popupStatus==1){
		$("#darkBackgroundPopUp").fadeOut("slow");
		$("#loginPopup").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#loginPopup").height();
	var popupWidth = $("#loginPopup").width();
	

	$("#loginPopup").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	
	$("#darkBackgroundPopUp").css({
		"height": windowHeight
	});
}


$(document).ready(function(){
	
	$("#displaypopup").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#loginPopupClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#darkBackgroundPopUp").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});

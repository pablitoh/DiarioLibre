
var timer = 0;


if(document.getElementsByClassName('mfp-wrap mfp-align-top mfp-auto-cursor modal-pase mfp-ready')[0] != null)
{
	hidePopup();
}
else {
	while(document.getElementsByClassName('mfp-wrap mfp-align-top mfp-auto-cursor modal-pase mfp-ready')[0] == null && timer < 10)
	{
		console.log("Los perro mas perro");
		setTimeout(function(){hidePopup()}, 2000);
		timer++;
	}
}
//Class modal: mfp-bg modal-pase mfp-ready
//Id Popup : mfp-wrap mfp-align-top mfp-auto-cursor modal-pase mfp-ready

function hidePopup()
{
	document.getElementsByClassName('mfp-wrap mfp-align-top mfp-auto-cursor modal-pase mfp-ready')[0].style.display = 'none'
	document.getElementsByClassName('mfp-bg modal-pase mfp-ready')[0].style.display = "none"
	document.getElementsByTagName("html")[0].style.overflow = "auto"

}

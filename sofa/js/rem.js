window.onload=function (argument) {
	// body...
	// alert(1);
	const desighwidh=750;
	const fontSize=100;
	// document.querySelectior("html").style.fontSize=fontSize+"px";
	function resizefont(){
		var CW = document.documentElement.clientWidth;
		// console.log(CW);
		var radio =CW/desighwidh;
		var newfontSize= fontSize*radio;
		document.querySelector("html").style.fontSize=newfontSize+"px";
	}
	resizefont();
	window.onresize=resizefont;
}
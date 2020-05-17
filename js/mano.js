function keisk_dydi(x){
	if (x<10){
		document.getElementById('paveikslelis').width=x*20;
		x++;
		setTimeout("keisk_dydi("+x+")",150);
	}


}
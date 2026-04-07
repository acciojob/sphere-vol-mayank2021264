function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let r = document.getElementById('radius');
	let v = document.getElementById('volume');
	let radius = parseInt(r.value);
	if(radius > 0){
		let volume = (4/3) * (Math.PI * radius**3);
		v.value = volume;
	}
	else{
		v.value  = NaN;
	}
} 

window.onload = function() {
	document.getElementById('MyForm').onsubmit
		= volume_sphere;
}

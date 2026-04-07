function volume_sphere() {
    //Write your code here
	let r = document.getElementById('radius');
	let v = document.getElementById('volume');
	let radius = parseInt(r.value);
	console.log(radius);
	if(radius > 0){
		console.log("button clicked")
		let volume = (4/3) * (Math.PI * radius**3);
		v.value = volume;
		return v.value;
	}
	else{
		console.log("else");
		v.value  = NaN;
		return v.value;
	}
} 

window.onload = function() {
	document.getElementById('MyForm').onsubmit
		= volume_sphere;
}

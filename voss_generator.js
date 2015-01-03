/*
   Voss fractal generator
   see [Loy-2006] p.357-360.
*/

// inlets and outlets
inlets = 1;
outlets = 3;

var oct = 4;
var st = new Array();
var n = 0;

function voss() {
	outlet(1,st);
	outlet(2,n);
	var sum = 0.0;
	for (var k=0;k<oct;k++) {
		if (n%Math.pow(2,k)==0) {
			st[k] = Math.random() * 2.0 + -1.0;
		}
		sum += st[k]; 
	}
	outlet(0,map(sum));
	n += 1;
}

function octave(value) {
	n = 0;
	st = new Array();
	oct = value;
	for (var i=0;i<oct;i++) {
		st[i] = Math.random();
	}
}

function map(val) {
	inmax = oct;
	inmin = oct * -1.0;
	outmax = 1.0;
	outmin = -1.0;
	a = (val - inmin) / (inmax - inmin);
	b = outmax - outmin;
	return(a * b + outmin);
}

function bang() {
   voss();
}

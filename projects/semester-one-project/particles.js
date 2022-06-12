let rows = 100;
let cols = 300;
let numParticles = rows * cols,
thickness = Math.pow( 80, 2 ),
spacing = 3,
margin = 100,
color = 220,
drag = 0.95,
ease = 0.25,

/*

used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

B = 4 / Math.PI,
C = -4 / Math.pow( Math.PI, 2 ),
P = 0.225,

*/
container,
particle,
canvas,
mouse,
list,
ctx,
tog,
man,
dx, dy,
mx, my,
d, t, f,
a, b,
i, n,
w, h,
p, s,
r, c;

particle = {
	vx: 0,
	vy: 0,
	x: 0,
	y: 0,
	xTouch: false,
	yTouch: false
};

function step() {

		if ( !man ) {

			t = +new Date() * 0.001;
			mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
			my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
	  	}
		b = ( a = ctx.createImageData( w, h ) ).data;

	  	for ( i = 0; i < numParticles; i++ ) {
		
			p = list[i];
		
			d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;

			if ( d < thickness ) {
				f = -thickness / d;
			  	t = Math.atan2( dy, dx );
			  	p.vx += f * Math.cos(t);
			  	p.vy += f * Math.sin(t);
			  	p.yTouch = p.xTouch = true;

			}

			if(p.xTouch){
				p.x += (( p.vx *= drag ) + (p.ox - p.x) * ease);
				if(Math.round(p.x) === p.ox){
					p.x = p.ox;
					p.xTouch = false;
				}
			}

			if(p.yTouch){
				p.y += (( p.vy *= drag ) + (p.oy - p.y) * ease);
				
				if(Math.round(p.y) === p.oy){
					p.y = p.oy;
					p.yTouch = false;
				}
			}

			// if((p.x + p.y) > 101 && (p.x + p.y) < 99){
				// p.x += ( p.vx *= drag ) + (p.ox - p.x) * ease;
				// p.y += ( p.vy *= drag ) + (p.oy - p.y) * ease;
			// } else {
			// 	p.x = 100;
			// 	p.y = 100;
			// 	p.touched = false;
			// }
			// for ( i = 0; i < numParticles; i++ ) {
			p = list[i];
			b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = color, b[n+3] = 255;
			// }

		}
		ctx.putImageData( a, 0, 0 );
	// } else {

	// 	b = ( a = ctx.createImageData( w, h ) ).data;
	// 	for ( i = 0; i < numParticles; i++ ) {
	// 		p = list[i];
	// 		b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = color, b[n+3] = 255;
	// 	}

	// 	ctx.putImageData( a, 0, 0 );
	// }

	requestAnimationFrame(step);
}

function setThickness(val) {
	thickness = Math.pow( val, 2 );
}

function setSpacing(val){
	spacing = val;
}

function setParticles(val){
	numParticles = val;
}

function updateParticleCanvas(_thickness, _spacing, _numParticles){
	setThickness(_thickness);
	setSpacing(_spacing);
	setParticles(_numParticles);
}

function init(containerTarget) {
	containerTarget = typeof containerTarget === 'undefined' ? 'container' : containerTarget;
	container = document.getElementById( containerTarget );
	canvas = document.createElement( 'canvas' );
	
	ctx = canvas.getContext( '2d' );
	man = false;
	tog = true;
	
	list = [];
	
	w = canvas.width = cols * spacing + margin * 2;
	h = canvas.height = rows * spacing + margin * 2;
	
	container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
	container.style.marginTop = Math.round( h * -0.5 ) + 'px';
	
	for ( i = 0; i < numParticles; i++ ) {
	  
	  p = Object.create( particle );
	  p.x = p.ox = margin + spacing * ( i % cols );
	  p.y = p.oy = margin + spacing * Math.floor( i / cols );
	  
	  list[i] = p;
	}

	container.addEventListener( 'mousemove', function(e) {

		let bounds = container.getBoundingClientRect();
		mx = e.clientX - bounds.left;
		my = e.clientY - bounds.top;
		man = true;
	  
	});
	
	container.appendChild( canvas );
	step();
}
init();
var THREEx	= THREEx || {};

/**
 * from original webgl anonymous demo
 */
THREEx.BentokAvatar	= function(){
	var container	= new THREE.Object3D()
	this.container	= container

	//POPTART
	var hat	= new THREE.Object3D();
	this.hat	= hat
	//		object	   x    y    z    w    h    d	  color
	// outline
	helper(	hat,    -2,   0,  -1,   7,   1,   3, 0x8b8b8b);
	helper(	hat,    -5,  -1,  -1,   4,   1,   3, 0x8b8b8b);
	helper(	hat,    -7,  -2,  -1,   3,   1,   3, 0x8b8b8b);
	helper(	hat,    -9,  -3,  -1,   3,   1,   3, 0x8b8b8b);
	helper(	hat,     4,  -1,  -1,   4,   1,   3, 0x8b8b8b);
	helper(	hat,     7,  -2,  -1,   3,   1,   3, 0x8b8b8b);
	helper(	hat,     9,  -3,  -1,   3,   1,   3, 0x8b8b8b);
	helper(	hat,    11,  -4,  -1,   1,   5,   3, 0x8b8b8b);
	helper(	hat,    -9,  -4,  -1,   1,   4,   3, 0x8b8b8b);
	helper(	hat,    -1,  -7,  -1,   6,   1,   5, 0x8b8b8b);
	helper(	hat,   -10,  -8,  -1,   2,   1,   3, 0x8b8b8b);
	helper(	hat,    -6,  -8,  -1,   6,   1,   5, 0x8b8b8b);
	helper(	hat,    -6,  -8,  -1,   6,   1,   5, 0x8b8b8b);
	helper(	hat,     4,  -8,  -1,   5,   1,   5, 0x8b8b8b);
	helper(	hat,   -10,  -9,  -1,   1,   1,   3, 0x8b8b8b);
	helper(	hat,    -8,  -9,  -1,   3,   1,   5, 0x8b8b8b);
	helper(	hat,     8,  -9,  -1,   3,   1,   5, 0x8b8b8b);
	helper(	hat,    12,  -8,  -1,   1,   2,   3, 0x8b8b8b);
	// filler
	helper(	hat,    -1,   -1,  -1,  5,   1,   3, 0xdedede);
	helper(	hat,    -4,   -2,  -1, 11,   1,   3, 0xdedede);
	helper(	hat,    -6,   -3,  -1, 15,   1,   3, 0xdedede);
	helper(	hat,    -8,   -4,  -1,  7,   1,   3, 0xdedede);
	helper(	hat,     3,   -4,  -1,  8,   2,   3, 0xdedede);
	helper(	hat,    -8,   -5,  -1,  2,   1,   3, 0xdedede);
	helper(	hat,    -4,   -5,  -1,  2,   1,   3, 0xdedede);
	helper(	hat,    -0,   -5,  -1,  3,   1,   3, 0xdedede);
	helper(	hat,    -5,   -6,  -1,  2,   1,   3, 0xdedede);
	helper(	hat,     4,   -6,  -1,  7,   1,   3, 0xdedede);
	helper(	hat,     6,   -7,  -1,  5,   1,   3, 0xdedede);
	helper(	hat,     9,   -8,  -1,  2,   1,   3, 0xdedede);
	// shadows
	helper(	hat,    -1,   -4,  -1,  4,   1,   3, 0xacacac);
	helper(	hat,    -6,   -5,  -1,  2,   1,   3, 0xacacac);
	helper(	hat,    -2,   -5,  -1,  2,   1,   3, 0xacacac);
	helper(	hat,    -8,   -6,  -1,  3,   1,   3, 0xacacac);
	helper(	hat,    -8,   -7,  -1,  1,   1,   3, 0xacacac);
	// highlights
	helper(	hat,    -3,   -6,  -1,  7,   1,   5, 0xc5c5c5);
	helper(	hat,    -7,   -7,  -1,  6,   1,   5, 0xc5c5c5);
	helper(	hat,     5,   -7,  -1,  1,   1,   5, 0xc5c5c5);
	helper(	hat,    -8,   -8,  -1,  2,   1,   5, 0xc5c5c5);
	helper(	hat,    -9,   -9,  -1,  1,   1,   5, 0xc5c5c5);
	helper(	hat,    11,   -9,  -1,  1,   1,   5, 0xc5c5c5);

	hat.position.x=-10.5;
	hat.position.y=9;
	container.add( hat );

	//Face
	var face	= new THREE.Object3D();
	this.face	= face
	//		object	   x    y    z    w    h    d	  color
	// outline
	helper(	face,   -7,   0,   0,   1,   11,   1, 0x8c7161);
	helper(	face,   13,   0,   0,   1,   11,   1, 0x8c7161);
	helper(	face,   -6,  -10,  0,   1,    5,   1, 0x8c7161);
	helper(	face,   12,  -10,  0,   1,    5,   1, 0x8c7161);
	helper(	face,   -6,  -15,  0,   2,    1,   1, 0x8c7161);
	helper(	face,   11,  -15,  0,   2,    1,   1, 0x8c7161);
	helper(	face,   -6,  -15,  0,   2,    1,   1, 0x8c7161);
	helper(	face,   11,  -16,  0,   1,    4,   1, 0x8c7161);
	helper(	face,   -5,  -16,  0,   1,    4,   1, 0x8c7161);
	helper(	face,   -5,  -19,  0,  16,    1,   1, 0x8c7161);
	// filler
	helper(	face,   -6,   -1,   0,  19,    9,   1, 0xc28a69);
	helper(	face,   -5,   -10,  0,  17,    5,   1, 0xc28a69);
	helper(	face,    0,   -16, .01,  7,    2,   1, 0xc28a69);
	helper(	face,   -4,   -15,  0,   4,    4,   1, 0xc28a69);
	helper(	face,    7,   -15,  0,   4,    4,   1, 0xc28a69);
	// highlights
	helper(	face,   -5,   1, .01,  15,    2,   1, 0xa7846f);
	helper(	face,   -6,   0, .01,   5,    2,   1, 0xa7846f);
	helper(	face,    8,   0, .01,   2,    2,   1, 0xa7846f);
	helper(	face,   -6,  -1, .01,   3,    2,   1, 0xa7846f);
	helper(	face,   -6,  -2, .01,   2,    2,   1, 0xa7846f);
	helper(	face,   -6,  -3, .01,   1,    6,   1, 0xa7846f);
	helper(	face,    3,  -8, .01,   1,    1,   1, 0xa7846f);
	helper(	face,    2,  -9, .01,   1,    2,   1, 0xa7846f);
	helper(	face,    1, -11, .01,   1,    1,   1, 0xa7846f);
	// light highlight
	helper(	face,   -3,  -6,.015,   4,    2,   1, 0xb5886e);
	helper(	face,    6,  -6,.015,   4,    2,   1, 0xb5886e);
	helper(	face,    3,  -9, .01,   2,    2,   1, 0xb5886e);
	helper(	face,    2,  -11,.01,   4,    1,   1, 0xb5886e);
	// eyebrows
	helper(	face,   -3,  -3, .01,   5,    1,   1, 0x5b4538);
	helper(	face,   -3,  -4, .01,   1,    1,   1, 0x5b4538);
	helper(	face,    5,  -3, .01,   5,    1,   1, 0x5b4538);
	helper(	face,    9,  -4, .01,   1,    1,   1, 0x5b4538);
	// eyesballs
	helper(	face,   -2,  -5.25, .02,4,    2,   1, 0xffffff);
	helper(	face,    5,  -5.25, .02,4,    2,   1, 0xffffff);
	helper(	face,    6,  -5.25, .03,2,    2,   1, 0x0352a2);
	helper(	face,   -1,  -5.25, .03,2,    2,   1, 0x0352a2);
	// beard outline
	helper(	face,    0,  -13,.01,   7,    1,   2, 0x564031);
	helper(	face,   -1,  -14,.01,   2,    1,   2, 0x564031);
	helper(	face,    6,  -14,.01,   2,    1,   2, 0x564031);
	helper(	face,   -2,  -15,.01,   2,    1,   2, 0x564031);
	helper(	face,    7,  -15,.01,   2,    1,   2, 0x564031);
	helper(	face,   -2,  -15,.01,   1,    3,   2, 0x564031);
	helper(	face,    8,  -15,.01,   1,    3,   2, 0x564031);
	helper(	face,   -3,  -18,.01,   2,    1,   2, 0x564031);
	helper(	face,    8,  -18,.01,   2,    1,   2, 0x564031);
	helper(	face,   -3,  -19,.01,   1,    2,   2, 0x564031);
	helper(	face,    9,  -19,.01,   1,    2,   2, 0x564031);
	helper(	face,   -3,  -21,.01,   2,    1,   2, 0x564031);
	helper(	face,    8,  -21,.01,   2,    1,   2, 0x564031);
	helper(	face,   -2,  -22,.01,   1,    4,   2, 0x564031);
	helper(	face,    8,  -22,.01,   1,    4,   2, 0x564031);
	helper(	face,   -1,  -25,.01,   1,    2,   2, 0x564031);
	helper(	face,    7,  -25,.01,   1,    2,   2, 0x564031);
	helper(	face,    -1, -27,.01,   2,    1,   2, 0x564031);
	helper(	face,    6,  -27,.01,   2,    1,   2, 0x564031);
	helper(	face,    0,  -28,.01,   7,    1,   2, 0x564031);
	// beard filler
	helper(	face,    1,  -14,.01,   5,    1,   2, 0x6b4c38);
	helper(	face,    0,  -15,.01,   1,    1,   2, 0x6b4c38);
	helper(	face,    6,  -15,.01,   1,    1,   2, 0x6b4c38);
	helper(	face,   -1,  -16,.01,   1,    2,   2, 0x6b4c38);
	helper(	face,    7,  -16,.01,   1,    2,   2, 0x6b4c38);
	helper(	face,    -1, -18,.01,   9,    7,   2, 0x6b4c38);
	helper(	face,    2,  -17,.01,   3,    1,   2, 0x6b4c38);
	helper(	face,    3,  -16,.01,   1,    1,   2, 0x6b4c38);
	helper(	face,    -2, -19,.01,  11,    2,   2, 0x6b4c38);
	helper(	face,     0, -25,.01,   7,    2,   2, 0x6b4c38);
	helper(	face,     1, -27,.01,   5,    1,   2, 0x6b4c38);
	// lips
	helper(	face,    1,  -15,.01,   5,    1,   1, 0xde918b);

	face.position.x=-12.5;
	face.position.y=0;
	container.add( face );

	// PIPE
	var pipe	= new THREE.Object3D();
	this.pipe	= pipe

	//		object	   x       y       z       w       h       d	  color
	helper(	pipe,    0,      0,      1,      1,      1,    1.5,  0x3e2f28);
	helper(	pipe,    .1,  -.25,      2,    1.1,    1.1,    1.5,  0x3e2f28);
	helper(	pipe,    .2,   -.5,      3,    1.2,    1.2,    1.5,  0x3e2f28);
	helper(	pipe,    .3,  -.75,      4,    1.3,    1.3,    1.5,  0x3e2f28);
	helper(	pipe,    .4,    -1,      5,    1.4,    1.4,    1.5,  0x3e2f28);
	helper(	pipe,    .5, -1.25,      6,    1.5,    1.5,    1.5,  0x3e2f28);
	helper(	pipe,    .6,  -1.5,      7,    1.6,    1.6,    1.5,  0x3e2f28);
	helper(	pipe,    .7, -1.75,      8,    1.7,    1.7,    1.5,  0x3e2f28);
	helper(	pipe,    .8,    -2,      9,    1.8,    1.8,    1.5,  0x3e2f28);
	helper(	pipe,    .9, -2.25,     10,    1.9,    1.9,    1.5,  0x3e2f28);
	helper(	pipe,     1,  -2.5,     11,      2,      2,    1.5,  0x3e2f28);
	helper(	pipe,   1.1, -2.75,     12,    2.1,     2.1,   1.5,  0x3e2f28);
	helper(	pipe,   1.2,    -3,     13,    2.2,     2.2,   1.5,  0x3e2f28);
	helper(	pipe,   1.3, -3.25,     14,    2.3,     2.3,   1.5,  0x3e2f28);
	helper(	pipe,   1.4,  -3.5,     15,    2.4,     2.4,   1.5,  0x3e2f28);
	helper(	pipe,    .5,    -2,     17,      4,       4,     4,  0x3e2f28);
	helper(	pipe,    .5,  -1.9,     17,   3.99,       1,  3.99,  0xc51902);
	// smoke
	helper(	pipe,    2,  0,     19,   1,       5,  1,  0xdedede);
	helper(	pipe,    3,  6,     19,   1,       6,  1,  0xdedede);
	helper(	pipe,    4,  11,     20,   1,       5,  1,  0xdedede);

	pipe.position.x=-8;
	pipe.position.y=-15;
	container.add( pipe );

	//FACE
	// var face	= new THREE.Object3D();
	// this.face	= face;
	// helper(	   face,   2,  -3,  -3,  12,   9,   4, 0x222222);
	// helper(	   face,   0,  -5,   0,  16,   5,   1, 0x222222);
	// helper(	   face,   1,  -1,   0,   4,  10,   1, 0x222222);
	// helper(	   face,  11,  -1,   0,   4,  10,   1, 0x222222);
	// helper(	   face,   3, -11,   0,  10,   2,   1, 0x222222);
	// helper(	   face,   2,   0,   0,   2,   2,   1, 0x222222);
	// helper(	   face,   4,  -2,   0,   2,   2,   1, 0x222222);
	// helper(	   face,  12,   0,   0,   2,   2,   1, 0x222222);
	// helper(	   face,  10,  -2,   0,   2,   2,   1, 0x222222);
	//
	// helper(	   face,   1, -5,   .5,  14,   5,   1, 0x999999);
	// helper(	   face,   3, -4,   .5,  10,   8,   1, 0x999999);
	// helper(	   face,   2, -1,   .5,   2,  10,   1, 0x999999);
	// helper(	   face,  12, -1,   .5,   2,  10,   1, 0x999999);
	// helper(	   face,   4, -2,   .5,   1,   2,   1, 0x999999);
	// helper(	   face,   5, -3,   .5,   1,   1,   1, 0x999999);
	// helper(	   face,  11, -2,   .5,   1,   2,   1, 0x999999);
	// helper(	   face,  10, -3,   .5,   1,   1,   1, 0x999999);
	// //Eyes
	// helper(	   face,   4,  -6,  .6,   2,   2,   1, 0x222222);
	// helper(	   face,  11,  -6,  .6,   2,   2,   1, 0x222222);
	// helper(	   face,3.99,-5.99, .6,1.01,1.01,1.01, 0xffffff);
	// helper(	  face,10.99,-5.99, .6,1.01,1.01,1.01, 0xffffff);
	// //MOUTH
	// helper(	   face,   5, -10,  .6,   7,   1,   1, 0x222222);
	// helper(	   face,   5,  -9,  .6,   1,   2,   1, 0x222222);
	// helper(	   face,   8,  -9,  .6,   1,   2,   1, 0x222222);
	// helper(	   face,  11,  -9,  .6,   1,   2,   1, 0x222222);
	// //CHEEKS
	// helper(	   face,   2,  -8,  .6,   2,   2, .91, 0xff9999);
	// helper(	   face,  13,  -8,  .6,   2,   2, .91, 0xff9999);
	//
	// face.position.x=-.5;
	// face.position.y=4;
	// face.position.z=4;
	// container.add(face);
	return;

	function helper(o, x, y, z, w, h, d, c){
		var material = new THREE.MeshLambertMaterial( { color: c} );
		var geometry = new THREE.CubeGeometry(w, h, d, 1, 1, 1);
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.x=x+(w/2);
		mesh.position.y=y-(h/2);
		mesh.position.z=z+(d/2);
		o.add( mesh );
	}
}

THREEx.BentokAvatar.prototype.update = function(delta, now){
	var past	= now - delta;
	// compute the frameIdx for present time
	var nFrames	= 12
	var animSpeed	= 10
	var frameIdxOld	= Math.floor((past*animSpeed) % nFrames)
	var frameIdxNow	= Math.floor((now *animSpeed) % nFrames)
	// if it is the same as last time, do nothing
	if( frameIdxNow === frameIdxOld )	return;
	// else move the object
	switch(frameIdxNow){
		case 0://2nd frame
			this.face.position.x++;
			this.feet.position.x++;
			break;
		case 1:
			this.face.position.y--;
			this.feet.position.x++;
			this.feet.position.y--;
			this.poptart.position.y--;
			break;
		case 2:
			this.feet.position.x--;
			break;
		case 3:
			this.face.position.x--;
			this.feet.position.x--;
			break;
		case 4:
			this.face.position.y++;
			break;
		case 5:
			this.poptart.position.y++;
			this.feet.position.y++;
			break;
		case 6://8th frame
			this.face.position.x++;
			this.feet.position.x++;
			break;
		case 7:
			this.poptart.position.y--;
			this.face.position.y--;
			this.feet.position.x++;
			this.feet.position.y--;
			break;
		case 8:
			this.feet.position.x--;
			break;
		case 9:
			this.face.position.x--;
			this.feet.position.x--;
			break;
		case 10:
			this.face.position.y++;
			break;
		case 11://1st frame
			this.poptart.position.y++;
			this.feet.position.y++;
			break;
	}
}

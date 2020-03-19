 /**
 * @licese
 * Jackson.js
 * License: MIT
 * Author: Lennox 'Red' Sears
 * Version: 0.0.1 
 * Date: 2020/03/13
 */

 (function(exports) {
 	function Jackson() {

 	}

 	Jackson.utl = {};
 	Jackson.dance = {};

 	Jackson.utl.randomInt = function(gap) {
 		let max = gap / 2;
 		let min = -1 * gap / 2;
 		return Math.floor(Math.random() * (max - min + 1)) + min;
 	};


 	//Track element dance
 	Jackson.dance.intervals = new Map();

 	Jackson.dance.stop = function(element) {
 		if(Jackson.dance.intervals.get(element) != undefined) {
 			clearInterval(Jackson.dance.intervals.get(element));
 		}
 	};

 	Jackson.dance.shake = function(element, range, rotate, speed) {
 		Jackson.dance.stop(element);
 		if(element.style != null) {
 			let inter = setInterval(function() {
	 			let stepX = Jackson.utl.randomInt(range);
	 			let stepY = Jackson.utl.randomInt(range);
	 			let angle = Jackson.utl.randomInt(rotate);

	 			element.style.transform = 'rotate(' + angle + 'deg)' + 'translate(' + stepX +'px, ' + stepY + 'px)';
	 			//element.style.-webkit-transform = 'rotate(' + angle + 'deg)' + 'translate(' + stepX +'px, ' + stepY + 'px)';
	 		}, 500 / speed);

	 		Jackson.dance.intervals.set(element, inter);
 		}
 	};

 	Jackson.dance.moonWalk = function(element) {
 		Jackson.dance.stop(element);
 		let posX = 0, posY = 0, rotA = 0;
 		let speed = 5;
 		//calculation, control the walk.
 		let walkStep = {
 			"x" : 0,
 			"y" : 0
 		}
 		let walkSpeed = 6;
 		//calculation, control the rotation direction
		let rDirection = 0; 
		let rSpeed = 0;
		//generate initial step
		walkStep.x = Jackson.utl.randomInt(walkSpeed);
		walkStep.y = Jackson.utl.randomInt(walkSpeed);
		rDirection = Jackson.utl.randomInt(rSpeed);

 		if(element.style != null) {
 			let inter = setInterval(function() {

 				//Detect touching viewport edge
 				let eleRect = element.getBoundingClientRect();
 				if(eleRect.top < 0 ) {
 					walkStep.y = Math.abs(walkStep.y)
 				}
 				if(viewport_height - eleRect.bottom < 0 ) {
 					walkStep.y = Math.abs(walkStep.y) * -1
 				}
 				if(eleRect.left < 0 ) {
 					walkStep.x = Math.abs(walkStep.x)
 				}
 				if(viewport_width - eleRect.right < 0 ) {
 					walkStep.x = Math.abs(walkStep.x) * -1
 				}
 				
	 			posX += (walkStep.x);
	 			posY += (walkStep.y);
	 			rotA += (rDirection);


	 			//Todo
	 			//element.style.transform-origin = "center center";
	 			element.style.transform = 'rotate(' + rotA + 'deg)' + 'translate(' + posX +'px, ' + posY + 'px)';
	 			//element.style.-webkit-transform = 'rotate(' + angle + 'deg)' + 'translate(' + stepX +'px, ' + stepY + 'px)';

	 			console.log(JSON.stringify(eleRect) + ' ' + JSON.stringify(walkStep) + ' ' + rDirection)
	 		}, 500 / speed);

	 		Jackson.dance.intervals.set(element, inter);
 		}
 	}

 	//add hat emoji 🎩 on element text.
 	Jackson.dance.hatOn = function (element) {
 		if(element.innerText) {
 			if(element.innerText.charCodeAt(0)!= 55356)
 			element.innerText = "🎩" + element.innerText;
 		}
 	}

 	exports.Jackson = Jackson;
 }(this));
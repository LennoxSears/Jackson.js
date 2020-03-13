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
 			var inter = setInterval(function() {
	 			let stepX = Jackson.utl.randomInt(range);
	 			let stepY = Jackson.utl.randomInt(range);
	 			let angle = Jackson.utl.randomInt(rotate);

	 			element.style.transform = 'rotate(' + angle + 'deg)' + 'translate(' + stepX +'px, ' + stepY + 'px)';
	 		}, 500 / speed);

	 		Jackson.dance.intervals.set(element, inter);
 		}
 	};

 	exports.Jackson = Jackson;
 }(this));
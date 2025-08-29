elements.up_pusher = {
	color: "#9fafdf",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(let h = 0; h < pixel.pushStrength; h++) {
			for(let i = (pixel.range - 1); i >= 0; i--) {
				if (!isEmpty(pixel.x, pixel.y-1-i, true)) {
					tryMove(pixelMap[pixel.x][pixel.y-1-i], pixel.x, pixel.y-2-i);
				}
			}
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.down_pusher = {
	color: "#9fafdf",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(let h = 0; h < pixel.pushStrength; h++) {
			for(let i = (pixel.range - 1); i >= 0; i--) {
				if (!isEmpty(pixel.x, pixel.y+1+i, true)) {
					tryMove(pixelMap[pixel.x][pixel.y+1+i], pixel.x, pixel.y+2+i);
				}
			}
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.left_pusher = {
	color: "#9fafdf",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(let h = 0; h < pixel.pushStrength; h++) {
			for(let i = (pixel.range - 1); i >= 0; i--) {
				if (!isEmpty(pixel.x-1-i, pixel.y, true)) {
					tryMove(pixelMap[pixel.x-1-i][pixel.y], pixel.x-2-i, pixel.y);
				}
			}
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.right_pusher = {
	color: "#9fafdf",
	properties: {
		range: 1,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushStrength ??= 1;

		for(let h = 0; h < pixel.pushStrength; h++) {
			for(let i = (pixel.range - 1); i >= 0; i--) {
				if (!isEmpty(pixel.x+1+i, pixel.y, true)) {
					tryMove(pixelMap[pixel.x+1+i][pixel.y], pixel.x+2+i, pixel.y);
				}
			}
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.up_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 1,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;

		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) pixel.pushTime = 0;
		if(pixel.charge) pixel.pushTime = pixel.pushLength;

		if(pixel.pushTime > 0) {
			for(let h = 0; h < pixel.pushStrength; h++) {
				for(let i = (pixel.range - 1); i >= 0; i--) {
					if (!isEmpty(pixel.x, pixel.y-1-i, true)) {
						tryMove(pixelMap[pixel.x][pixel.y-1-i], pixel.x, pixel.y-2-i);
					}
				}
			}
			pixel.pushTime--;
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.down_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 1,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;

		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) pixel.pushTime = 0;
		if(pixel.charge) pixel.pushTime = pixel.pushLength;

		if(pixel.pushTime > 0) {
			for(let h = 0; h < pixel.pushStrength; h++) {
				for(let i = (pixel.range - 1); i >= 0; i--) {
					if (!isEmpty(pixel.x, pixel.y+1+i, true)) {
						tryMove(pixelMap[pixel.x][pixel.y+1+i], pixel.x, pixel.y+2+i);
					}
				}
			}
			pixel.pushTime--;
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.left_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 1,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;

		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) pixel.pushTime = 0;
		if(pixel.charge) pixel.pushTime = pixel.pushLength;

		if(pixel.pushTime > 0) {
			for(let h = 0; h < pixel.pushStrength; h++) {
				for(let i = (pixel.range - 1); i >= 0; i--) {
					if (!isEmpty(pixel.x-1-i, pixel.y, true)) {
						tryMove(pixelMap[pixel.x-1-i][pixel.y], pixel.x-2-i, pixel.y);
					}
				}
			}
			pixel.pushTime--;
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

elements.right_e_pusher = {
	color: "#9f9f6f",
	properties: {
		range: 1,
		pushTime: 0,
		pushLength: 5,
		pushStrength: 1,
	},
	tick: function(pixel) { 
		pixel.range ??= 1;
		pixel.pushTime ??= 0;
		pixel.pushLength ??= 5;
		pixel.pushStrength ??= 1;

		if(isNaN(pixel.pushTime) || pixel.pushTime < 0) pixel.pushTime = 0;
		if(pixel.charge) pixel.pushTime = pixel.pushLength;

		if(pixel.pushTime > 0) {
			for(let h = 0; h < pixel.pushStrength; h++) {
				for(let i = (pixel.range - 1); i >= 0; i--) {
					if (!isEmpty(pixel.x+1+i, pixel.y, true)) {
						tryMove(pixelMap[pixel.x+1+i][pixel.y], pixel.x+2+i, pixel.y);
					}
				}
			}
			pixel.pushTime--;
		}
		doDefaults(pixel);
	},
	category: "machines",
	state: "solid",
}

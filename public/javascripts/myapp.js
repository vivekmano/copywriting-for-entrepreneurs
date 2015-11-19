$('.step').stepify({
   distribution:[1,1,1,1,1],
   nextHooks : {
		0 : [ 
				function(){ $('.active').removeClass('active').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		1 : [ 
				function(){ $('.active').removeClass('active').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		2 : [ 
				function(){ $('.active').removeClass('active').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		3 : [ 
				function(){ $('.active').removeClass('active').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		4 : [ 
				function(){ $('.active').removeClass('active').next().addClass('active');},
				function ($stepContainer){ return true;} 
			]
	},
	prevHooks : {

		1 : [ 
				function(){ $('.active').removeClass('active').prev().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		2 : [ 
				function(){ $('.active').removeClass('active').prev().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		3 : [ 
				function(){ $('.active').removeClass('active').prev().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		4 : [ 
				function(){ $('.active').removeClass('active').prev().addClass('active');},
				function ($stepContainer){ return true;} 
			]
	}
});
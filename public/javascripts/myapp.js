$('.step').stepify({
   distribution:[1,1,1,1,1],
   nextHooks : {
		0 : [ 
				function(){ $('.active').removeClass('active').addClass('done').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		1 : [ 
				function(){ $('.active').removeClass('active').addClass('done').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		2 : [ 
				function(){ $('.active').removeClass('active').addClass('done').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		3 : [ 
				function(){ $('.active').removeClass('active').addClass('done').next().addClass('active');},
				function ($stepContainer){ return true;} 
			],
		4 : [ 
				function(){ $('.active').removeClass('active').addClass('done').next().addClass('active');},
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

//add onclick handler for the navigation tabs
//when triggered, need to:
//1) move to correct section
    //hide current sections, unhide all other sections
//2) make sure that the buttons below are correct
    //?
//3) update the navbar
    //use the code from the hooks above

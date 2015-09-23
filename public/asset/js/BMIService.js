var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
		  url: '/api/bmi', //end-point to backend
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//Fazer em casa
		return "";
	}
	
};
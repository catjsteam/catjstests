var mytestscripts = {


	ajaxtest: function(context, app) {

		context.scrap.resolve = false;

		var ref = _catjs.manager;
		var ldef = ref.defer();

		ldef.promise.then(function(result) {			
			console.log("AJAX result:", result);
		});

		app.ajax("app.json", function(obj, err) {
			if (err) {
				console.log("Igot an error: ", err);            
				return undefined;
			}			
			ldef.resolve(obj);

		});				

		return ldef;
	},



	ajaxalltest: function(context, app) {
		
		var catjsdef = _catjs.manager.defer();

		var defer1 = Q.defer();

		app.ajax("app.json", function(obj, err) {
			if (err) {
				console.log("Igot an error: ", err);            
				return undefined;
			}			
			defer1.resolve(obj);

		});				


		var defer2 = Q.defer();

		app.ajax("app.json", function(obj, err) {
			if (err) {
				console.log("Igot an error: ", err);            
				return undefined;
			}			
			defer2.resolve(obj);

		});				

		Q.all([defer1.promise, defer2.promise]).then(function (results) {
			
			console.log("AJAX results: ", results.length, results);

		}).done(function() {					

			catjsdef.resolve();
		});		


		return catjsdef;
	}
};
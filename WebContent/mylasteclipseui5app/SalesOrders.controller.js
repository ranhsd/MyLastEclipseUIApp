sap.ui.controller("mylasteclipseui5app.SalesOrders", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mylasteclipseui5app.SalesOrders
*/
	onInit: function() {
		
		/**
		 * This is how we create odata model in eclipse projects
		 * proxy in order to avoid cross domain issues. In Web IDE we don't need it since it taking care by
		 * HCP front-end server
		 * you can read more about it here: 
		 * https://help.sap.com/saphelp_nw74/helpdata/de/2d/3f5fb63a2f4090942375df80abc39f/content.htm 
		 */		
		var oModel = new sap.ui.model.odata.ODataModel("proxy/sap/opu/odata/IWBEP/gwdemo/",{
			json: true,
			user: "{REPLACE_WITH_YOUR_ES4_USERNAME}",
			password: "{REPLACE_WITH_YOUR_ES4_PASSWORD}"
		});
		
		this.getView().setModel(oModel);
		oModel.refresh();
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mylasteclipseui5app.SalesOrders
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mylasteclipseui5app.SalesOrders
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mylasteclipseui5app.SalesOrders
*/
//	onExit: function() {
//
//	}

});
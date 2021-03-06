sap.ui.jsview("primeiro.primeiro.view.demo", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.demo
	 */
	getControllerName: function () {
		return "primeiro.primeiro.controller.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.demo
	 */
	createContent: function (oController) {
		var oSimpleInput = new sap.m.Input({
			placeholder:"Enter Name.."
		});
		
		var oBtn = new sap.m.Button({
			text: "Submit"	
		});
		// 3:52 --- 
		var oPage = new sap.m.Page({
			title: "Simple App",
			// title: "OLARRRRRRRRR",
			content: [
				oSimpleInput,
				oBtn
			]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.App", {

		onInit: function () {
			// set data model on view.
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		onShowHello: function () {
			// Show Hello World native JS alert.
			alert("Hello World");
		}
	});
});
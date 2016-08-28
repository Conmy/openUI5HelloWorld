sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, JSONModel, MessageToast, ResourceModel) {
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

			// Set i18n model on the view.
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.wt.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");


		},

		onShowHello: function () {
			// Read message from i18n model.
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// Show the message.
			MessageToast.show(sMsg);
		}
	});
});
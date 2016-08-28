sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (controller) {
	"use strict";

	return controller.extend("sap.ui.demo.wt.controller.App", {

		onShowHello: function () {
			alert("Hello World");
		}
	});
});
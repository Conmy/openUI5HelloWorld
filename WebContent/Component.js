sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/wt/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.wt.Component", {
        metadata : {
            manifest : "json"
        },
        init : function () {
            // Call the init on the parent.
            UIComponent.prototype.init.apply(this, arguments);

            // Set data model.
            var oData = {
                recipient : {
                    name : "World"
                }
            };

            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            // Set dialog
            this.helloDialog = new HelloDialog();
        }
    });
});

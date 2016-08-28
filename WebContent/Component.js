sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
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
            // Set i18n model.
            var i18nModel = new ResourceModel({
                bundleName : "sap.ui.demo.wt.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});

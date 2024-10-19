sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/library"
], function(Controller, JSONModel,mobileLibrary) {
    "use strict";

    return Controller.extend("ui5.databinding.controller.App", {
        onInit: function() {
            // JSON model ka instance create karna
            var oModel = new JSONModel();

            // Data ko data.json se load karna
            oModel.loadData("./model/data.json");

            // Model ko view par set karna
            this.getView().setModel(oModel);

            // Model ko console me print karna (optional)
            console.log(oModel);
            
            // Model par change event listener lagana
            oModel.attachPropertyChange(function(oEvent) {
                var newValue = oEvent.getParameter("value");
                console.log("New Value: " + newValue);
            });
        },
     async formatMail(sFirstName, sLastName) {
			const oBundle = this.getView().getModel("i18n").getResourceBundle();

			return mobileLibrary.URLHelper.normalizeEmail(
				`${sFirstName}.${sLastName}@example.com`,
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		}
    });
});

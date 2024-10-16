sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
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
        }
    });
});

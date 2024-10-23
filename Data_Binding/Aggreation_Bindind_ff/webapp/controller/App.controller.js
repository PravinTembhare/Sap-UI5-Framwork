sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ObjectAttribute",
    "sap/ui/model/json/JSONModel",
    "sap/m/library",
    "sap/ui/model/type/Currency"
], function(Controller,ObjectAttribute, JSONModel,mobileLibrary,Currency) {
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
		},
        productListFactory(Id,Context){
          let UIC;
           if(Context.getProperty("UnitsInStock")===0 && Context.getProperty("Discontinued")===true){
            UIC=this.byId("productSimple").clone(Id)
           }else{
            UIC=this.byId("productExtended").clone(Id)
            if (Context.getProperty("UnitsInStock") < 1) {
            UIC.addAttribute(new ObjectAttribute({
               text:{
                   
                   path:"i18n>outOfStock"
            }  
            }))
        }
           }
return UIC







        }
		

		
       

    });
});

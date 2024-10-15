sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],(Controller,MessageToast) =>{
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.App",{
onShowHello(){
      const input=this.getView().byId("input")
      const nam=input.getValue()
     // read msg from i18n model
     const oBundle = this.getView().getModel("i18n").getResourceBundle();
     const sRecipient = this.getView().getModel().getProperty("/recipient/name");
     const sMsg = oBundle.getText("helloMsg", [sRecipient]);

     // show message
     MessageToast.show(sMsg+''+nam);
}

    });
});
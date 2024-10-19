sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/m/library",
  "sap/ui/model/json/JSONModel"
],(Controller,MessageToast,mobileLibrary,JSONModel)=>{
"use strict";
return Controller.extend("ui5.walkthrough.controller.Nested",{
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
    onShowHello(){
        const input=this.getView().byId("input")
        const nam=input.getValue()
       // read msg from i18n model
       const oBundle = this.getView().getModel("i18n").getResourceBundle();
       const sRecipient = this.getView().getModel().getProperty("/recipient/name");
       const sMsg = oBundle.getText("helloMsg", [sRecipient]);
  
       // show message
       MessageToast.show(sMsg+''+nam);
  },
  async onOpenDialog() {

  this.oDialog ??= await this.loadFragment({
    name:"ui5.walkthrough.view.HelloDialog"
  });
  this.oDialog.open();

 

  

  },
  async OnPressX(){
   this.oDialog.close()
  },
  async formatMail(sFirstName, sLastName) {
    
    const oBundle = this.getView().getModel("i18n").getResourceBundle();
    return mobileLibrary.URLHelper.normalizeEmail(
      `${sFirstName}.${sLastName}@example.com`,
    oBundle.getText("mailSubject", [sFirstName]),
      oBundle.getText("mailBody"));
  }
 

})



})

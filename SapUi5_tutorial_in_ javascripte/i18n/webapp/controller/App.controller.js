sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
],(Controller,Message,JSONModel,ResourceModel)=>{
"use strict";
return Controller.extend("ui5.walkthrough.controller.App",{
onInit(){
    const OData ={
     recipient:{
        name:"World"
     }
    };
    const oModel = new JSONModel(OData);
    this.getView().setModel(oModel);

    const i18nModel=new ResourceModel({
        bundleName:"ui5.walkthrough.i18n.i18n"
    });
    this.getView().setModel(i18nModel,"i18n");
    
},

onpress(){
    const oBundle=this.getView().getModel("i18n").getResourceBundle();

    const sRecipient=this.getView().getModel().getProperty("/recipient/name");
    const sMsg=oBundle.getText("hellomsg",[sRecipient])
    Message.show(sMsg);
}


});





})
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],(Controller,Message,JSON) =>{
    "use strict";
    return Controller.extend("ui5.walkthrough.comntroller.App",
    {
onInit(){
    const oData ={
        recipient:{
            name:"World"
        }
    };
    console.log(oData)
    const Model=new JSON(oData);
    console.log(Model)
    this.getView().setModel(Model)
},
 onpress(){
Message.show("Hello World")
 }

    })
}
)
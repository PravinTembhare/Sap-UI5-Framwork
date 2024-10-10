sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

 ], (Controller,Msg) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
       onpress() {
        this.byId("but").setText("hi")
        Msg.show("bro")
          

       }
    });
 });
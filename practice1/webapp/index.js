sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], function(Button, MessageToast) {
    'use strict';
    new Button({
         text:"Tap here",
         press(){
          MessageToast.show("Hellow bro kesa ")
         }


    }).placeAt("content");
    
});
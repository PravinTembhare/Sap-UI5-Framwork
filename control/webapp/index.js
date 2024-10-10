sap.ui.define([
    "sap/m/Button" ,
   "sap/m/Text"
   
   
], function(Button,Text) {
    "use strict";
    
    new Button({
        text:" hi I am text",
        press() {
    new Text({
        text:"hi bro "
    }).placeAt("button")
    }

}).placeAt("content")
    
new Text({
    text:"hi pravin"

}).addStyleClass("custumTextColor").placeAt("con")

});
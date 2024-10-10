sap.ui.define([
   "sap/ui/core/mvc/XMLView"
], function(XML) {
    'use strict';
    XML.create({
        viewName:"ui5.walkthrough.view.App"
    }).then( function(oXML){
        oXML.placeAt("content")
    })
});
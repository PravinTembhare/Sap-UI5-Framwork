sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("ui5.databinding.Component",{
        metadata:{
            interfaces:["sap.ui.core.IAsyncContentCreation" ],
            manifest:"json"
                
        }
    })
});
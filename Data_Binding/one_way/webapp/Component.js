sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/BindingMode"
], function(UIComponent,BindingMode) {
    'use strict';
    return UIComponent.extend("ui5.databinding.Component",{
        metadata:{
            interfaces:["sap.ui.core.IAsyncContentCreation" ],
            manifest:"json"
                
        },

		init() {
			
			UIComponent.prototype.init.apply(this, arguments);

			this.getModel().setDefaultBindingMode(BindingMode.OneWay);
		}

    })
});
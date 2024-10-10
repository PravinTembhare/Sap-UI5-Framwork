sap.ui.define([
   "sap/ui/core/Control",
   "sap/m/RatingIndicator",
   "sap/m/Label",
   "sap/m/Button"
], function(Control,RatingIndicator,Label,Button) {
    'use strict';

    return Control.extend("ui5.walkthrough.control.ProductRating",{
        metadata:{
                 properties :{
                    value : {type:"float",defaultValue:0}
                 },
                 aggregations :{
                    _rating :{type :"sap.m.RatingIndictor", multiple:false, visibility:"hidden"},
                        _label :{type:"sap.m.Label",miltiple:false,visibility:"hidden"},
                        _button:{type:"sap.m.Button",multiple:false,visibility:"hidden"}
                 },
                 events:{
                    change:{
                         parameters:{
                            value:{type:"int"}
                         }
                    }
                 }


                   },
                   init(){
                    this.setAggregation("_rating",new RatingIndicator({
                    value:this.getValue(),
                    iconSize:"2rem",
                    visualMode:"Half",
                    liveChange:this.onRate.bind(this)

                    }));
                    this.setAggregation("_label",new Label({
                        text:"{i18n>productratehere}"
                    }).addStyleClass("sapUiTineMarginTopBottom"));
                    this.setAggregation("_button", new Button ({
                        text:"{i18n>productbutton}",
                        press:this.onSubmit.bind(this)
                    }).addStyleClass("sapUiTinyMarginTopBottom"));
                   },
                   setValue(fValue){
                    this.setProperty("value",fValue,true);
                    
                    this.getAggregration("_rating").setValue(fValue);

                   }


    })



    
    
});
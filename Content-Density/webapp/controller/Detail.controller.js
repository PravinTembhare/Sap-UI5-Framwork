sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller,History,MessageToast, JSONModel ) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.Detail", {
		onInit(){
            const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");

            const oRouter =this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this.onObjectMatched,this);
        },
        onObjectMatched(oEvent){
            this.byId("rating").reset();
this.getView().bindElement({
    path:"/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
    model:"invoice"
})
        },
        onNavBack(){
            const oHistory=History.getInstance();
            console.log(oHistory)
            const sPreviousHash=oHistory.getPreviousHash();
           console.log(sPreviousHash,"hi")
           if (sPreviousHash !== undefined) {
            window.history.go(-1);
        } else {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("overview", {}, true);
        }

        },

		onRatingChange(oEvent) {
			const Valuef = oEvent.getParameter("value");
			const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [Valuef]));
		}

	});
});
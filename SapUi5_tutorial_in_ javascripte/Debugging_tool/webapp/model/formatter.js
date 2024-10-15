sap.ui.define([
   
],()=>{
    "use strict"
    return{

statusText(sstatus){
    const oResource=this.getOwnerComponent().getModel("i18n").getResourceBundle();
    console.log(sstatus)
    console.log(oResource)
    switch(sstatus){
        case "A":
            return oResource.getText("invoiceStatusA");
        case "B":
            return oResource.getText("invoiceStatusB");
        case "C":
            return oResource.getText("invoiceStatusC");
            default:
                return sstatus;
    }
}




    }
})
sap.ui.define([
    
    'jquery.sap.global',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(jQuery, Fragment, Controller, JSONModel) {
"use strict";

var PageController = Controller.extend("bts.testapp.testproject1.controller.profilePage", {

    onInit: function (oEvent) {

        // set explored app's demo model on this sample
        var oModel = new JSONModel(sap.ui.require.toUrl("bts/testapp/testproject1/model/empdata.json"));
        this.getView().setModel(oModel);

        this.getView().bindElement("/PeopleCollection/0");

        this._formFragments = {};

        // Set the initial form to be the display one
        this._showFormFragment("Display");
    },
    
    // homeLogo: function(){
    //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    //     oRouter.navTo("home");
    // },
    logoutNavigation: function(){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("home");
    },
    backNavigation: function(){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("detail");
    },

    handleEditPress : function () {

        //Clone the data
        this._oSupplier = Object.assign({}, this.getView().getModel().getData().PeopleCollection[0]);
        this._toggleButtonsAndView(true);

    },

    handleCancelPress : function () {

        //Restore the data
        var oModel = this.getView().getModel();
        var oData = oModel.getData();

        oData.PeopleCollection[0] = this._oSupplier;

        oModel.setData(oData);
        this._toggleButtonsAndView(false);

    },

    handleSavePress : function () {

        this._toggleButtonsAndView(false);

    },

    _toggleButtonsAndView : function (bEdit) {
        var oView = this.getView();

        // Show the appropriate action buttons
        oView.byId("edit").setVisible(!bEdit);
        oView.byId("save").setVisible(bEdit);
        oView.byId("cancel").setVisible(bEdit);

        // Set the right form type
        this._showFormFragment(bEdit ? "Change" : "Display");
    },

    _getFormFragment: function (sFragmentName) {
        var pFormFragment = this._formFragments[sFragmentName],
            oView = this.getView();

        if (!pFormFragment) {
            pFormFragment = Fragment.load({
                id: oView.getId(),
                name: "bts.testapp.testproject1.view." + sFragmentName
            });
            this._formFragments[sFragmentName] = pFormFragment;
        }

        return pFormFragment;
    },

    _showFormFragment : function (sFragmentName) {
        var oPage = this.byId("pageForm");

        oPage.removeAllContent();
        this._getFormFragment(sFragmentName).then(function(oVBox){
            oPage.insertContent(oVBox);
        });
    }

});

return PageController;

});

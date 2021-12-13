sap.ui.define([
	'jquery.sap.global',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (jQuery, Fragment, Controller, JSONModel) {
		"use strict";

		// return Controller.extend("bts.testapp.testproject1.controller.EmpHistory", {
		// 	onInit: function(){
                
        //     }
		// });

        var PageempController = Controller.extend("bts.testapp.testproject1.controller.EmpHistory", {

            onInit: function (oEvent) {
        
                // set explored app's demo model on this sample
                var oModel = new JSONModel(sap.ui.require.toUrl("bts/testapp/testproject1/model/emphistory.json"));
                this.getView().setModel(oModel);
        
                this.getView().bindElement("/EmploymentHistory/0");
        
                this._formFragments = {};
        
                // Set the initial form to be the display one
                this._showFormFragment("EmpHistoryDisplay");
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
        
            EmpHisEditPress : function () {
        
                //Clone the data
                this._oSupplier = Object.assign({}, this.getView().getModel().getData().EmploymentHistory[0]);
                this._toggleButtonsAndView(true);
        
            },
        
            EmpHisCancelPress : function () {
        
                //Restore the data
                var oModel = this.getView().getModel();
                var oData = oModel.getData();
        
                oData.EmploymentHistory[0] = this._oSupplier;
        
                oModel.setData(oData);
                this._toggleButtonsAndView(false);
        
            },
        
            EmpHisSavePress : function () {
        
                this._toggleButtonsAndView(false);
        
            },
        
            _toggleButtonsAndView : function (eEdit) {
                var oView = this.getView();
        
                // Show the appropriate action buttons
                oView.byId("EmpHisedit").setVisible(!eEdit);
                oView.byId("EmpHissave").setVisible(eEdit);
                oView.byId("EmpHiscancel").setVisible(eEdit);
        
                // Set the right form type
                this._showFormFragment(eEdit ? "EmpHistoryChange" : "EmpHistoryDisplay");
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
                var oPage = this.byId("pageEmp");
        
                oPage.removeAllContent();
                this._getFormFragment(sFragmentName).then(function(oVBox){
                    oPage.insertContent(oVBox);
                });
            }
        
        });
        
        return PageempController;

	});
sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("bts.testapp.testproject1.controller.home", {
            onInit:function (){},

            homeLogo: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("home");
            },

            backNavigation: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("HRadmin");
            },
            
            loginNavigation: function(){
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("login");
                },

            loginUser: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("loginUser");
            },

			onHomePress: function () {
                var oIconTabHeader = this.byId('iconTabHeader');
                oIconTabHeader.setSelectedKey('invalidKey');
    
                var oLabel = this.byId('labelId');
                oLabel.setText('Home Screen');
            },
    
            onSelectTab: function (event) {
                var oLabel = this.byId('labelId');
                var oTab = event.getParameter('item');
    
                oLabel.setText(oTab.getText());

			},

		});
	});

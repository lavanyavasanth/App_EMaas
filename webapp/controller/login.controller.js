sap.ui.define([
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageBox'
], 

function(Fragment, Controller, JSONModel, MessageBox) {
"use strict";

return Controller.extend("bts.testapp.testproject1.controller.login", {


    onInit: function(){},

    homeLogo: function(){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("home");
    },
    loginNavigation: function(){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("login");
    },

    onLoginTap: function() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("profilePage");
    },
    // onNextTap: function() {
    //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
    //     oRouter.navTo("detail");
    // },

    onLoginUser:function(){
        var username = this.getView().byId('username');
        var password= this.getView().byId('password');
        
        var user = 'testemp';
        var pass = '1234';
        
        
        if(username.getValue() === ''){
            MessageBox.error("Please enter Username!!!");
            return;
        }else if(password.getValue() === ''){
            MessageBox.error("Please enter Password!!!");
            return;
        }else{
        if(username.getValue() === user && password.getValue()=== pass){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail");
            // MessageBox.success("Login Successfull!!!");
        }else{
            MessageBox.error("Invalid Username and Password!!!");
            return;
        }
        }
        // var username = this.getView().byId('username');
        // var password= this.getView().byId('password');
        
        // var user = 'testhire';
        // var pass = '1234';
        
        
        // if(username.getValue() === ''){
        //     MessageBox.error("Please enter Username!!!");
        //     return;
        // }else if(password.getValue() === ''){
        //     MessageBox.error("Please enter Password!!!");
        //     return;
        // }else{
        // if(username.getValue() === user && password.getValue()=== pass){
        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        //     oRouter.navTo("HRadmin");
        //     // MessageBox.success("Login Successfull!!!");
        // }else{
        //     MessageBox.error("Invalid Username and Password!!!");
        //     return;
        // }
        // }

        }

    // onHomePress: function () {
    //     var oIconTabHeader = this.byId('iconTabHeader');
    //     oIconTabHeader.setSelectedKey('invalidKey');

    //     var oLabel = this.byId('labelId');
    //     oLabel.setText('Home Screen');
    // },

    // onSelectTab: function (event) {
    //     var oLabel = this.byId('labelId');
    //     var oTab = event.getParameter('item');

    //     oLabel.setText(oTab.getText());

    // }
  
  
});


});



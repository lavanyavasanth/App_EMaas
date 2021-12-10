/*global QUnit*/

sap.ui.define([
	"btstestapp./testproject1/controller/TestView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TestView Controller");

	QUnit.test("I should test the TestView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

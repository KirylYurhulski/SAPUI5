sap.ui.define(
	[
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller){
		"use strict";		

		return Controller.extend("mvc.main",{
/**
* @memberOf mvc.main
*/
			onInit: function(){
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData("models/tile.json");
				this.getView().setModel(oModel);				
			},
/**
* @memberOf mvc.main
*/
			onTilePress : function(evt) {
				app.to(dashboardPage);
			}
		})
	}
)
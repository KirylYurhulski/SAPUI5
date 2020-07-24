sap.ui.define(
	[
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller){
		"use strict";		

		return Controller.extend("mvc.dashboard.dashboard",{
/**
* @memberOf mvc.dasboard.dashboard
*/
			onInit: function() {
				this.setIceCreamModel();
				this.onInitPieChart();
			},
/**
* @memberOf mvc.dashboard.dashboard
*/
			setIceCreamModel: function(){
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData("models/iceCream.json");
				this.getView().setModel(oModel, "IceCreamModel");
			},
/**
* @memberOf mvc.dashboard.dashboard
*/
			onInitPieChart: function(){
				var oChart = this.getView().byId("idPieChart");
	            oChart.setVizProperties({
					plotArea:{
						dataLabel:{
							visible: true,
							type:'value'
						},
						drawingEffect: 'glossy'
					},
					title:{
						text:'Flavor-Sales'
					},
					legendGroup:{
						layout:{
							position: 'left'
						}
					}
	            });
			},
/**
* @memberOf mvc.dashboard.dashboard
*/
			onNavButtonPress: function(){
				app.back();
			}			
		})
	}
)
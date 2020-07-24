<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
	lang="{{ str_replace('_', '-', app()->getLocale()) }}"
	xml:lang="en-US"
	itemscope="" 
	itemtype="http://schema.org/WebSite">
	<head>
		<meta charset="utf-8" />
		<title>Dashboad</title>
		
		<script src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"	
			id="sap-ui-bootstrap"
			data-sap-ui-libs="sap.m, sap.ui.commons, sap.suite.ui.commons, sap.viz"
			data-sap-ui-theme="sap_bluecrystal">
		</script>

		<script type="text/javascript">
			sap.ui.localResources("mvc");
			var app = new sap.m.App({
				initialPage:"idMainView"
			});
			var mainPage = new sap.ui.view({
				id:"idMainView",
				viewName:"mvc.main",
				type:sap.ui.core.mvc.ViewType.XML
			});
			app.addPage(mainPage);
			var dashboardPage = new sap.ui.view({
				id:"idDashboardView",
				viewName:"mvc.dashboard.dashboard",
				type:sap.ui.core.mvc.ViewType.XML
			});
			app.addPage(dashboardPage);
			app.placeAt("content");		
		</script>

	</head>
	<body class="sapUiBody" role="application">
		<div id="content"></div>
	</body>
</html>
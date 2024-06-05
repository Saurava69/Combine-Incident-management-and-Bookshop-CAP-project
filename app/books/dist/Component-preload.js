//@ui5-bundle ns/books/Component-preload.js
sap.ui.require.preload({
	"ns/books/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("ns.books.Component",{metadata:{manifest:"json"}})});
},
	"ns/books/i18n/i18n.properties":'# This is the resource bundle for ns.books\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=BookShop\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,25\nflpTitle=Books\n\n#XFLD,27\nflpTitle=book shop\n',
	"ns/books/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"ns.books","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.5","toolsId":"3ce1a5e9-3cf6-4a25-b9c3-85c21f29915a"},"dataSources":{"mainService":{"uri":"odata/v4/admin/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"books-view":{"semanticObject":"books","action":"view","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}},"books-display":{"semanticObject":"books","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.books.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BooksList","target":"BooksList"},{"pattern":"Books({key}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"},{"pattern":"Books({key})/texts({key2}):?query:","name":"Books_textsObjectPage","target":"Books_textsObjectPage"}],"targets":{"BooksList":{"type":"Component","id":"BooksList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Books","variantManagement":"Page","navigation":{"Books":{"detail":{"route":"BooksObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}},"hideFilterBar":false,"initialLoad":"Enabled"}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Books","navigation":{"texts":{"detail":{"route":"Books_textsObjectPage"}}}}}},"Books_textsObjectPage":{"type":"Component","id":"Books_textsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Books/texts"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"Combine"}}'
});
//# sourceMappingURL=Component-preload.js.map
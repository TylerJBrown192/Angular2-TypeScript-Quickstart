System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
// Creating main.ts file to demonstrate proper Angular application structure. Application bootstrapping is a separate concern from presenting a view (e.g. we may launch AppComponent in multiple environments with different bootstrappers.) 
//# sourceMappingURL=main.js.map
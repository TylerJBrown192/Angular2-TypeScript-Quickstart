import {Component} from 'angular2/core'; //Importing Angular's Component decorator function from main library module

@Component({ // Decorator function that accepts metadata object, which tells Angular how to create and use this component
    selector: 'my-app', //CSS selector for the HTML element that represents this component
    template: '<h1>My First Angular 2 App</h1>' //Specifies the component's companion template. A more advanced template would contain data bindings to component properties and may identify other app components which have their own templates.
})

export class AppComponent { } //Root component, consistent in every Angular app. Further in app development, this class will expand with properties and further application logic.
import {bootstrap}    from 'angular2/platform/browser'; //Specifies bootstrap function for browser applications. Different environments / platforms could take different components.
import {AppComponent} from './app.component'; //import AppComponent class from root app.component.ts file. Filename extension isn't specified because TS is transpiled to JS before running application

bootstrap(AppComponent);

// Creating main.ts file to demonstrate proper Angular application structure. Application bootstrapping is a separate concern from presenting a view (e.g. we may launch AppComponent in multiple environments with different bootstrappers.)
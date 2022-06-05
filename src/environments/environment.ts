// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//import { env } from "process";
declare var _queryapiUrlg: any;
declare var _cmdapiUrlg: any;
export const environment = {
  production: false,
  _queryapiUrl: _queryapiUrlg || 'http://localhost:8080/Api/v1',
  _cmdapiUrl: _cmdapiUrlg|| 'http://localhost:8081/commands/account'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

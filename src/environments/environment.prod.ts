//import { env } from "process";

//import { env } from "assets/env.js";
declare var _queryapiUrlg: any;
declare var _cmdapiUrlg: any;

export const environment = {
  production: true,
  //_commandapiUrl: 'http://localhost:4000',
  _queryapiUrl: _queryapiUrlg ,
  _cmdapiUrl: _cmdapiUrlg
};

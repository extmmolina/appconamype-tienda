// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //  apiUrl: 'http://localhost:8000/v1/',
   OneSignalAppID: '81d73f6b-be98-4fb7-82b6-4502614940d7',
   AndroidId: 'io.ionic.starter',
  // apiUrl: 'http://ec2-18-216-163-42.us-east-2.compute.amazonaws.com/api/web/v1/'
   apiUrl: 'http://192.168.1.106/app_mype/api/web/v1/',
  // apiUrl: 'http://192.168.18.20:8080/app-ecommerce/api/web/v1/',
  // OneSignalAppID: '0c4e5dfe-f856-4562-9c9e-337f0545c695',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

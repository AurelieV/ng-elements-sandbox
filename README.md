Project to test angular elements inside an other angular app (possibly not on the same version)

## Directories
* host-app: an Angular 5 app, build with ng v1.5.2
* login-form: an Angular 6 app, exposing a `login` webcomponent build with Angular Element

## Run
* npm install && npm run build in `login-form`
* npm install && npm start dans `host-app`

## Problems and solutions
* NG v6 webpack configuration is not ejectable. So no possibility to generate only one file
* `schemas: [CUSTOM_ELEMENTS_SCHEMA]` needs to be add to host-app for support webcomponent
* Apparently, there is some problem when webpack runtime is loaded several time and not with the same version. The easy workaround is to set webpack options `output.jsonpFunction` to a custom name. I would like to do the change on the `login-form` app, but this is not possible (because configuration is not ejectable), so this is do in the host-app application
* Zone is loaded two times. I have to exclude it from login-form polyfills. Order does not seem important (delete it from login-form or host-app has the same effect at first appearance)
* Forms validation does not seems to work when loaded by elements inside HostApp. Fine on login-form `npm start`



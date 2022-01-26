# Librería Github User Widget

Muestra la información de un usuario de Github haciendo uso de la librerí de la API. La librería está
desarrollada con Angular.

## Instrucciones

Hay que seguir las siguientes instrucciones para un correcto uso de la librería.

## Instalación

```
npm install github-user-widget
```

## Configuración
El el app.module.ts (por defecto) se tiene que importal el módulo de la librería **"GithubUserWidgetModule"**

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubUserWidgetModule } from 'github-user-widget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Uso
* Con buscador

<guw-search-user></guw-search-user>

* Sin buscador
```
<guw-user [search]="<USUARIO_A_BUSCAR>"></guw-user>
```



## Code scaffolding

Run `ng generate component component-name --project github-user-widget` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project github-user-widget`.
> Note: Don't forget to add `--project github-user-widget` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build github-user-widget` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build github-user-widget`, go to the dist folder `cd dist/github-user-widget` and run `npm publish`.

## Running unit tests

Run `ng test github-user-widget` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

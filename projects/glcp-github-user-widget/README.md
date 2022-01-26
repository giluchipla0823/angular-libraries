# Librería Github User Widget

Muestra la información de un usuario de Github haciendo uso de la librerí de la API. La librería está
desarrollada con Angular.

## Instrucciones

Hay que seguir las siguientes instrucciones para un correcto uso de la librería.

## Instalación

```
npm install glcp-github-user-widget
```

## Configuración
El el app.module.ts (por defecto) se tiene que importal el módulo de la librería **"GithubUserWidgetModule"**

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubUserWidgetModule } from 'glcp-github-user-widget';

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

## Añadir estilos
En src/styles de la app principal importamos.
```
@import 'node_modules/glcp-github-user-widget/lib/assets/styles/styles.scss';
```

## Uso
* Con buscador

```
<guw-search-user></guw-search-user>
```

* Sin buscador
  
```
<guw-user [search]="<USUARIO_A_BUSCAR>"></guw-user>
```

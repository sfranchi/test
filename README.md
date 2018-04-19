# to-node-api-template
## Node.js REstfull API template - Tech Office

El objetivo de este template es proveer de un punto de partida para cualquier API RESTful que necesitemos desarrollar. En ella intentamos plasmar las prácticas recomendadas desde la Tech Office en cuanto a componentes a utilizar, funcionalidades básicas requeridas y mecanismos típicos de manejo de errores, tracing, versioning

### Características principales de este proyecto:
* Soporte de versionado del API (semver) mediante utilización de un header (accept-version)
* Implementa el uso de Azure Application Insights para la generación de eventos y trazas
* Implementa un CRUD completo en SQLServer y MongoDB accesibles vía versioning
* Implementa la autorización mediante un token (en header Authorization)
* Implementa la restricción de origen mediante detección de IP
* Implementa validación del modelo de datos recibidos
* Implementa throttling

### Requisitos - Setup
Ejecutar los siguientes comandos para poder ejecutar el template:

Instalación de packages globales
```bash
npm install -g mocha
npm install -g eslint
```

Instalación de packages propios del proyecto
```bash
npm install
```
### package.json
El archivo de configuración contiene tres métodos de ejecución base:

```javascript
"scripts": {
  "dev": "cross-env NODE_ENV=dev node ./src/server.js",
  "debug": "cross-env NODE_ENV=debug nodemon run ./src/server.js",
  "test": "mocha"
},
```
definiendo al momento de ejecución la variable de entorno NODE_ENV, la cual puede ser utilizada a fin de individualizar el ambiente en el cual se está ejecutando el API.

```bash
npm run dev
npm run debug
npm run test
```


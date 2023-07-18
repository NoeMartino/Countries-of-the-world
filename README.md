<h1 align="center"> Countries of the world </h1>

_Proyecto individual desarrollado dentro de Henry Bootcamp. SPA (Single Page Application) que muestra la información principal de todos los países del mundo y permite realizar búsquedas, ordenamientos y filtrados. Además contiene un formulario para que el usuario pueda crear actividades turísticas relacionadas con los países.
La SPA consume datos de una API a través de un Back End desarrollado en Node.JS utilizando Express, agregando nuevas funcionalidades a la API original._

## Objetivos del proyecto:

Crear una SPA donde el usuario pueda buscar todos los países del mundo y ver detalles de los mismos. Cuenta con: <br /> <br />
✅ Barra de búsqueda <br />
✅ Filtros y ordenamientos <br />
✅ Detalle de cada país <br />
✅ Formulario para creación de actividades turísticas <br />

## Tecnologías utilizadas

<code><img width="10%" src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"></code>
<code><img width="10%" src="https://th.bing.com/th/id/R.edf018af5e9fa4dce24d38e24b9ec828?rik=1AI6o1Z0SVc6hQ&pid=ImgRaw&r=0"></code>
<code><img width="10%" src="https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png"></code>
<br /> <br />
<code><img width="10%" src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png"></code>
<code><img width="20%" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png"></code>
<br /> <br />
<code><img width="10%" src="https://th.bing.com/th/id/OIP.IEgGsRwougUKXE26RKJVagHaHo?pid=ImgDet&rs=1"></code>
<code><img width="20%" src="https://polidog.jp/images/sequelize.png"></code>
<br />

## Requisitos para ejecutarla localmente 🔧

1. Instalar PostgreSQL
2. Crear una base de datos con el nombre "countries"
3. Dentro de /api cree un archivo .env con sus credenciales como se muestra a continuación:

   DB_USER=usuariodepostgres<br />
   DB_PASSWORD=passworddepostgres<br />
   DB_HOST=localhost

Reemplazar ```usuariodepostgres``` y ```passworddepostgres``` por sus propias credenciales para conectarte a Postgres

## Instalación ⚙️

Utilice el administrador de paquetes npm para instalar. Recuerde usar este comando dentro de /client y dentro de /api

```
npm install
```

## Ejecución ⚙️

Front-End: Dentro de /client

```
npm start
```
Back-End: Dentro de /api

```
npm start
```
## Deploy

_Realicé el deploy utilizando Vercel y Railway._

https://deploy-pi-countries-three.vercel.app/

## Tecnologías y herramientas 🛠️

✔️ React.js<br />
✔️ Redux.js<br />
✔️ CSS<br />
✔️ Node.js<br />
✔️ Express.js<br />
✔️ PostgreSQL<br />
✔️ Sequelize

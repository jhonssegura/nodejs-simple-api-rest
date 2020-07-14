Crea un package.json que permite describir nuestro proyecto.

$ npm init --yes

Modulos para crear el servidor

$ npm i express morgan

Morgan es un minewhere 


El -D ejecuta a nodemon como una dependencia de desarrollo
$ npm i nodemon -D

Realizar cambio en el package.json colocando en "Scripts"

"dev": "nodemon src/index.js"

Luego de esto solo ejecutar  
$ npm run dev
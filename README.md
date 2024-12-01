# BITÁCORA
- Voy a realizarlo por etapas.
-->1- armar de forma simple, sin dar tanta estructura, asi podre ver si funciona bien.
-->2- cuando ya este funcionando voy a ver de refactorizar lo que se pueda o este a mi conocimiento.
-->3- incorporar material ui o tailwind, no los use nunca, debo investigar primero.

# paso n1
-->>Dentro del paso 1, la idea es armar un primer componente, ejemplo el Login y cargarlo para ir probando si lo trae bien.
-->>

# Proyecto de prueba usando React:
La idea armar un pequeño app con react. por ahora usare solo JS en react. 

# Comandos usados:
npm create vite@latest, luego selecciono react y
por ahora, voy con js + swc. -->ts luego con mas practica.

Tareas:
Aplicación para Gastos.

Pantallas
0 - Login: pantalla de logeo.
1 - Mi Perfil: modifacion de datos personales y foto.
2 - Home: se ve listado de gastos ordenados por dia
3 - Cargar gastos: descripcion del gasto, una categoria, el monto.
4 - Categoria: Salida, Combustible. Pantalla para cargar diferentes categorias.
5 - Descargar excel con informe, fecha desde, fecha hasta, y filtros de categoria.

OPCIONAL:
La aplicacion debe funcionar de manera OFFLINE. Si no tenes internet, que guarde los datos en una base de datos SQLLITE o Indexada, y que el boton de CARGAR GASTO cambie de color.

A tener en cuenta:
No se puede cargar gastos sin categoria.

FrontEnd
ReactJS, React Hook Forms, Material UI/Tailwind, Redux (manejo de estados globales).

Backend:
Aplicar BD SQl (estudiar ejecucion de Store procedure), si se complica usar MONGO.
Aprender responsabilidad simple, esto es que una clase y su metodo hacen UNA sola cosa.

Aplicar Controlador, Servicios, Repositorio.

CONSEJO: TYPESCRIPT

Armados de documentos.

DER, diagrama entidad relacion -> Base de datos.

Casos de uso: 3 documentos


Primer entrega
22 de noviembre 
Creación de proyecto
Diagrama de Flujo
Diagrama de Flujo: Login.
Diagrama de Flujo: Carga Gasto.
Diagrama de flujo: Carga Categoria.
- DER - 3 Casos de uso


Paquetes necesarios:
https://mui.com/material-ui/getting-started/installation/ 

npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material

Tailwind:---> por ahora no lo usare, no me siento conforme con front
https://tailwindcss.com/
npm install -D tailwindcss
npx tailwindcss init

tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

en index.html agregar
@tailwind base;
@tailwind components;
@tailwind utilities;

Nest: https://docs.nestjs.com/

Redux:
https://redux.js.org/introduction/getting-started
npm install redux react-redux

Form hook:
https://react-hook-form.com/get-started
npm install react-hook-form

Router DOM:
https://reactrouter.com/start/framework/installation
npm install react-router-dom

para controlar api usar o fetch o axios
npm i axios

# Paquete completo
npm install react-hook-form react-router-dom redux react-redux @reduxjs/toolkit

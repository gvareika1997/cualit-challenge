# cualit-challenge

## Esqueleto:
```
/tutorials -> Parte 1 - Backend Nodejs. 
/tutorials-fe -> Parte 1 - Frontend Vuejs - Pendiente. 
/reactivity-vue -> Parte 2 - Aplicacion de reactivity con Vuejs.
/reactivity-js -> Parte 2 - Aplicacion de reactivity con JS. 
```

## Detalles y decisiones V1:
1. Para correr el BE localmente, es necesario tener docker instalado para levantar el container mysql. 
La configuracion del docker-compose se encuentra dentro del proyecto. De todas maneras, se incluyo un  file Commands.txt que indica los pasos necesarios. 

2. El BE contiene una coleccion de postman con los endpoints. 

3. Se decidio no crear entidades de usuarios. Respetando la filosfia "Don't overthink it". Consecuentemente tampoco hay traza de que usuarios crearon y realizaron cambios sobre los Tutorials. Como tampoco hay un manejo de Session. 

4. La implementacion de JWT no es la final. Dado que la letra del challenge decia que la request de creacion de Tutorial debia recibir un token y el endpoint validar que no haya expirado. Esto se consulto personalmente con Justina para validar. Para la V2 se va a ajustar para que el BE sea quien crea el token y despues valida en el consumo de los distintos endpoints. 

5. Actualmente el frontend en Vuejs no cumple con todos los requerimientos explicitados en la letra del Challenge. Ademas, personalmente no estoy satisfecho con la calidad de codigo. De todas maneras se acordo entregar un avance.    

## Videos

Part 1: https://youtu.be/hDfuWSpObtc
Part 2: https://youtu.be/LQ5OFQmZ6P8

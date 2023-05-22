# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- Reconstruir los modulos de node y levantar next

```
npm install
npm run dev
```

## Llenar la base de datos con la información de prueba

```
http://localhost:3000/api/seed
```

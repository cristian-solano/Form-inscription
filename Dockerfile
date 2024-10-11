# Establece una imagen base
FROM node:21-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

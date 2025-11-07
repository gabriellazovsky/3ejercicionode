# 3ejercicionode

# Generador de Contraseñas Aleatorias en Node.js

Este proyecto implementa un servidor HTTP básico en Node.js que genera contraseñas aleatorias compuestas por un número configurable de palabras obtenidas desde un diccionario.

## 🚀 Funcionalidad

- Al acceder a la página principal, el servidor genera una contraseña aleatoria formada por **X palabras** del archivo `diccionario.txt`.
- El número de palabras se pasa como parámetro en la **query string** de la URL (`?x=NUMERO`).
- Si no se indica el parámetro, el valor por defecto es **3 palabras**.

---

## 🧠 Ejemplo de uso

1. Inicia el servidor:
   ```bash
   node index.js
2. Abre en tu navegador:

- Contraseña de 3 palabras (por defecto):

http://localhost:3000/

- Contraseña de 5 palabras:

http://localhost:3000/?x=5

- Contraseña de 10 palabras:

http://localhost:3000/?x=10

 ## Busqueda

 - Localizar a partir de su clave.

 - Usos:
    - Comprobar si existe o no en el arbol el elemento.
    - Obtener ese objeto.

## Insertar
- Es necesario introducir el elemento de forma ordenada en el arbol.
- Ademas, hay que distinguir entre si el arbol permite duplicado o no.

- ***Procedimiento:***
    - Si esta vacio, incertamos en la raiz
    - Si la raiz es igual al elemento a insertar depende del caso podemos insertar, no incertar o emitir un error.
    - La raiz es mayor entonces no vamos al lado izquierdo y insertamos en el subarbol izquierdo.
    - Si es mayor que la raiz  lo insertamos en el lado derecho
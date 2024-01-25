httpClient.ts:
Este archivo define una interfaz llamada HttpClient que actúa como una plantilla para las clases que realizarán peticiones HTTP. En este caso, solo tiene un método get.

axiosClient.ts:
En este archivo, implementamos la clase AxiosClient que cumple con la interfaz HttpClient. Utiliza la biblioteca Axios para realizar peticiones HTTP.

fetchClient.ts:
Similar al anterior, este archivo implementa la clase FetchClient que también cumple con la interfaz HttpClient. Utiliza la función fetch de Node.js para realizar peticiones HTTP.

main.ts:
En este archivo, definimos una función fetchData que toma una instancia de HttpClient y realiza una petición GET a la API de Rick and Morty. Se muestra el uso tanto de AxiosClient como de FetchClient.

app.ts:
Aquí, configuramos la inyección de dependencias para poder alternar entre AxiosClient y FetchClient fácilmente. Se elige uno u otro según el valor de la variable useAxios. Finalmente, se utiliza el cliente HTTP configurado para llamar a fetchData.

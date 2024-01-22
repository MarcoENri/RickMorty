
import { HttpClient } from './HttpClient';
import { AxiosClient } from './axiosClient';
import { FetchClient } from './fetchClient';


const useAxios = true; // Cambia a false para usar Fetch

let httpClient: HttpClient;

if (useAxios) {
  httpClient = new AxiosClient();
} else {
  httpClient = new FetchClient();
}


fetchData(httpClient);

async function fetchData(client: HttpClient): Promise<void> {
  try {
    const apiUrl = 'https://rickandmortyapi.com/api/episode/45'; 
    const data = await client.get(apiUrl);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

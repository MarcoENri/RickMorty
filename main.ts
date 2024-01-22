
import { AxiosClient } from './axiosClient';
import { FetchClient } from './fetchClient';
import { HttpClient } from './HttpClient';

const apiUrl = 'https://rickandmortyapi.com/api/episode/45'; 

async function fetchData(client: HttpClient): Promise<void> {
  try {
    const data = await client.get(apiUrl);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const axiosClient = new AxiosClient();
fetchData(axiosClient);

const fetchClient = new FetchClient();
fetchData(fetchClient);

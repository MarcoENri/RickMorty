// fetchClient.ts
import fetch from 'node-fetch';
import { HttpClient } from './HttpClient';

export class FetchClient implements HttpClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }
}

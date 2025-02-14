import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo.type';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private http = inject(HttpClient);

  async getTodos(): Promise<Todo[]> {
    try {
      return await firstValueFrom(this.http.get<Todo[]>(this.apiUrl));
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }
}

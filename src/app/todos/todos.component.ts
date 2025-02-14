import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { firstValueFrom } from 'rxjs';
import { TodoItemComponent } from '../component/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  private todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);

  completedCount = computed(
    () => this.todoItems().filter((todo) => todo.completed).length
  );

  async ngOnInit(): Promise<void> {
    await this.fetchTodos();
  }

  private async fetchTodos() {
    try {
      const todos = await this.todoService.getTodos();
      this.todoItems.set(todos);
    } catch (err) {
      console.error('Error fetching todos:', err);
      this.todoItems.set([]);
    }
  }

  todoToggled(todo: Todo) {
    this.todoItems.update((todos) =>
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  }
}

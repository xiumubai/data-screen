<template>
  <div class="todomvc">
    <section class="todoapp">
      <header>
        <h1 class="title">todos</h1>
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="state.newTodo"
          @keyup.enter="addTodo"
        />
      </header>

      <section class="main" v-show="state.todos.length">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          v-model="state.allDone"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="todo in state.filteredTodos"
            :key="todo.id"
            :class="{
              completed: todo.completed,
              editing: todo === state.editTodo,
            }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="updateTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              v-focus="todo === state.editTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.escape="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>

      <footer class="footer">
        <span class="todo-count">
          <strong>{{ state.remaining }}</strong>
          <span> {{ state.remainingText }} </span>
        </span>
        <ul class="filters">
          <li>
            <a
              href="#"
              :class="{ selected: state.visibility === 'all' }"
              @click="changeVisible('all')"
              >All</a
            >
          </li>
          <li>
            <a
              href="#"
              :class="{ selected: state.visibility === 'active' }"
              @click="changeVisible('active')"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#"
              :class="{ selected: state.visibility === 'completed' }"
              @click="changeVisible('completed')"
              >Completed</a
            >
          </li>
        </ul>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="state.todos.length > state.remaining"
        >
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, watchEffect } from "vue";
// import type { Directive } from "vue";

interface ITodoItem {
  completed: boolean;
  id: number;
  title: string;
}

const STORAGE_KEY = "todos-vuejs-3.x";
let todoListLength = 0;

const getTodoList = (): ITodoItem[] => {
  const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  todos.forEach((todo: any, index: any) => {
    todo.id = index;
  });
  todoListLength = todos.length;
  return todos;
};

const saveTodoList = (todos: ITodoItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const filters: any = {
  all(todos: ITodoItem[]): ITodoItem[] {
    return todos;
  },
  active(todos: ITodoItem[]): ITodoItem[] {
    return todos.filter((todo: ITodoItem) => !todo.completed);
  },
  completed(todos: ITodoItem[]): ITodoItem[] {
    return todos.filter((todo: ITodoItem) => todo.completed);
  },
};

const pluralize = (n: number) => {
  return n === 1 ? "item" : "items";
};

const state: any = reactive({
  visibility: "all",
  newTodo: "",
  editTodo: null,
  beforeEditCache: "",
  todos: getTodoList(),
  filteredTodos: computed((): ITodoItem[] => {
    return filters[state.visibility](state.todos);
  }),
  remaining: computed(() => {
    return filters.active(state.todos).length;
  }),
  remainingText: computed(() => {
    return ` ${pluralize(state.remaining)} left`;
  }),
  allDone: computed({
    get: function () {
      return state.remaining === 0;
    },
    set: function (value) {
      state.todos.forEach((todo: any) => {
        todo.completed = value;
      });
    },
  }),
});

watchEffect(() => {
  saveTodoList(state.todos);
});

const addTodo = () => {
  const value = state.newTodo && state.newTodo.trim();
  if (!value) {
    return;
  }
  state.todos.push({
    id: todoListLength++,
    title: value,
    completed: false,
  });
  state.newTodo = "";
};

const removeTodo = (todo: ITodoItem) => {
  state.todos.splice(state.todos.indexOf(todo), 1);
};

const updateTodo = (todo: ITodoItem) => {
  state.beforeEditCache = todo.title;
  state.editTodo = todo;
};

const doneEdit = (todo: ITodoItem) => {
  if (!state.editTodo) {
    return;
  }
  state.editTodo = null;
  todo.title = todo.title.trim();
  if (!todo.title) {
    removeTodo(todo);
  }
};

const cancelEdit = (todo: ITodoItem) => {
  state.editTodo = null;
  todo.title = state.beforeEditCache;
};

const changeVisible = (visible: string) => {
  state.visibility = visible;
};

const removeCompleted = () => {
  state.todos = filters.active(state.todos);
};
</script>
<style scoped>
@import "./index.css";
</style>

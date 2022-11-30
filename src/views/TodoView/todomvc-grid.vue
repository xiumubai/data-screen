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
        />
      </header>

      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo completed">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>todo mvc</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
          <li class="todo editing">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>todo mvc</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>

      <footer class="footer">
        <span class="todo-count">
          <strong>2</strong>
          <span> items left </span>
        </span>
        <ul class="filters">
          <li><a href="#/all" class="selected">All</a></li>
          <li><a href="#/active">Active</a></li>
          <li><a href="#/completed">Completed</a></li>
        </ul>
        <button class="clear-completed">Clear completed</button>
      </footer>
    </section>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
@import "./index.css";
</style>

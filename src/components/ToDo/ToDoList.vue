<template>
  <div>
    <h2>Your tasks</h2>
    <div v-for="item in toDoList" :key="item.id">
      <div :class="item.isCompleted ? 'todo_list_active' : 'todo_list'">
        <input class="checkbox" type="checkbox" v-model="item.isCompleted" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toDoList: {
      require: true,
    },
  },
};
</script>

<style>
.checkbox {
  content: "";
  border: 1px solid light;
  height: 26px;
  aspect-ratio: 1;
  border-radius: 3px;
  background-color: white;
  margin-right: 10px;
}

@media only screen and (max-width: 768px) {
  .todo_list {
    display: flex;
    text-align: center;
    align-self: center;
    margin-top: 20px;
    font-size: 26px;
    width: 90%;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid silver;
    border-radius: 5px;
  }
  .todo_list_active {
    display: flex;
    text-align: center;
    align-self: center;
    margin-top: 20px;
    font-size: 26px;
    width: 90%;
    background: silver;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid silver;
    border-radius: 5px;
    opacity: 0.3;
  }
}
@media only screen and (min-width: 768px) {
  .todo_list {
    display: flex;
    text-align: center;
    align-self: center;
    margin-top: 20px;
    font-size: 26px;
    width: 60%;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid silver;
    border-radius: 5px;
  }
  .todo_list_active {
    display: flex;
    text-align: center;
    align-self: center;
    margin-top: 20px;
    font-size: 26px;
    width: 60%;
    background: silver;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid silver;
    border-radius: 5px;
    opacity: 0.3;
  }
}
</style>
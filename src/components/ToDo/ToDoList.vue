<template>
  <div>
    <h2>Your tasks</h2>
    <div v-if="toDoList.length == 0" style="text-align: center;">
    <span>Unfortunately, he does not have a task yet</span>
    </div>
    <div v-for="item in toDoList" :key="item.id">
      <div :class="item.isCompleted ? 'todo_list_active' : 'todo_list'">
        <input class="checkbox" type="checkbox" v-model="item.isCompleted" />
        <span v-if="item.id !== itemEditID">{{ item.title }}</span>
        <input v-else v-model="item.title" class="edit_input" />
        <div v-if="item.id !== itemEditID" class="edit_icon">
          <span class="material-icons" @click="itemEditID = item.id">edit</span>
          <span
            class="material-icons"
            style="color: red"
            @click="$emit('delete', item.id)"
            >delete</span
          >
        </div>
        <span
          v-else
          class="material-icons edit_icon"
          style="color: green"
          @click="itemEditID = null"
          >check</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemEditID: null,
  }),
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
  accent-color: green;
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
.edit_icon {
  cursor: pointer;
  text-align: end;
  width: 90%;
  color: #0076c0;
}
.edit_input {
  width: 90%;
  align-self: center;
  font-size: 24px;
  padding: 1px;
  border: 1px solid silver;
  border-radius: 5px;
}
</style>
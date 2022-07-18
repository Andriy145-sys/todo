<template>
  <div class="main">
    <center>
      <div style="padding-top: 63px">
        <img src="@/assets/logo.svg" />
      </div>
      <div class="todo_form">
        <span class="thank_you_span">Thank you {{loggedUser ? loggedUser.name : '' }}!</span>
        <form>
          <div class="add_new_task_form">
            <div class="input_field">
              <input
                class="input"
                placeholder="Task title"
                v-model="task.title"
                :required="$v.task.title.$error"
                @blur="$v.task.title.$touch()"
              />
              <div v-if="titleError.length > 0" style="color: red">
                <span class="material-icons" style="vertical-align: middle"
                  >close</span
                >
                <span> {{ titleError[0] }}</span>
              </div>
            </div>

            <button class="add_new_btn" @click.prevent="addNewTask">
              Add new task
            </button>
          </div>
        </form>
        <to-do-list-vue :toDoList="toDoList" @delete="deleteItem"/>
      </div>
    </center>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToDoListVue from "./ToDoList.vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: {
    ToDoListVue,
  },
  data: () => ({
    toDoList: [
      { id: 1, title: "Title", isCompleted: false },
      { id: 2, title: "Title2", isCompleted: false },
    ],
    task: {},
  }),
  validations: {
    task: {
      title: {
        required,
      },
    },
  },
  methods: {
    addNewTask() {
      if (!this.$v.$invalid) {
        this.toDoList.push({
          id: Date.now(),
          title: this.task.title,
          isCompleted: false,
        });
        this.task = {};
        this.$v.$reset();
      }
    },
    deleteItem(id){
       this.toDoList = this.toDoList.filter((item) => item.id !== id);
    }
  },
  computed: {
    ...mapGetters(["loggedUser"]),
    titleError() {
      const errors = [];
      if (!this.$v.task.title.$dirty) {
        return errors;
      }
      !this.$v.task.title.required && errors.push("Title field is required");
      return errors;
    },
  },
};
</script>

<style>
.main {
  height: 797px;
  padding: 1%;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
  position: relative;
  text-align: center;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  .todo_form {
    color: black;
    background-color: white;
    width: 90%;
    height: 600px;
    top: 100px;
    padding-top: 32px;
    position: relative;
    overflow-y: scroll;
  }
  .add_new_task_form {
    display: flex;
    width: 90%;
    align-self: center;
    text-align: center;
    padding-top: 40px;
  }
}
@media only screen and (min-width: 768px) {
  .todo_form {
    color: black;
    background-color: white;
    width: 60%;
    height: 660px;
    top: 100px;
    padding-top: 32px;
    position: relative;
    overflow-y: scroll;
  }
  .add_new_task_form {
    display: flex;
    width: 60%;
    align-self: center;
    text-align: center;
    padding-top: 40px;
  }
}

.thank_you_span {
  font-weight: 700;
  font-size: 60px;
  color: #333333;
}

.input {
  box-sizing: border-box;
  height: 35px;
  margin: 0;
  background: #ffffff;
  border: 1px solid #9a9a9a;
  padding: 10px;
  font-size: 22px;
  width: 100%;
  margin-bottom: 5px;
}

.input:invalid {
  border: 1px solid red;
}

.input_field {
  display: block;
  width: 80%;
  text-align: start;
}

.add_new_btn {
  height: 35px;
  color: white;
  background: #0076c0;
  border: 0;
  cursor: pointer;
  margin-left: 10px;
  width: auto;
}

.add_new_btn:hover {
  border: 2px solid #0076c0;
  background: white;
  color: #0076c0;
}

::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
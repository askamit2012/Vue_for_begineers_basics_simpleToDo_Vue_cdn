// console.log(Vue);

// const app = Vue.createApp({
//   template: `
//   <h2>Welcome to Vue!, Mr. {{ name }}</h2>
//   <button v-on:click="clickHandler()">Click Me!</button>
//   `,
//   data() {
//     return {
//       name: "Amit Kumar",
//     };
//   },
//   methods: {
//     clickHandler: function () {
//       this.setStyle();
//     },
//     setStyle: function () {
//       let r = Math.floor(Math.random() * 255);
//       let g = Math.floor(Math.random() * 255);
//       let b = Math.floor(Math.random() * 255);
//       let r1 = 255 - r;
//       let g1 = 255 - g;
//       let b1 = 255 - b;

//       let styleElem = document.body.style;
//       styleElem.background = `rgb(${r},${g}, ${b})`;
//       styleElem.color = `rgb(${r1},${g1}, ${b1})`;
//     },
//   },
// });

// app.mount("#app");

// let app = Vue.createApp({
//   template: `
//     <h2>async await in VueJS</h2>
//     <button v-on:click="getData">Fetch Data</button>
//   `,
//   methods: {
//     getData: async function () {
//       let res = await fetch("https://randomuser.me/api");
//       let data = await res.json();
//       let { results } = data;
//       console.log(results[0]);
//     },
//   },
// });

// app.mount("#app");

// console.log("Let's toDo in VueJS");
// let app = Vue.createApp({
//   template: `
//         <h2>Let's toDo in VueJS</h2>
//         <input v-on:change="inputChangeHandler" />
//         <button v-on:click="addTaskBtnHandler">Add Task</button>
//         <li v-for="(task, index) in taskList"
//         v-on:click="() => handleTaskDelete(index)"
//         >{{task.task}}{{index}}</li>
//     `,
//   data() {
//     return {
//       taskVal: "",
//       taskList: [],
//     };
//   },
//   methods: {
//     inputChangeHandler: function (e) {
//       this.taskVal = e.target.value;
//     },
//     addTaskBtnHandler: function () {
//       let newTask = {
//         task: this.taskVal,
//       };
//       this.taskList.push(newTask);
//       this.populateUI();
//     },
//     populateUI: function () {
//       let myList = this.taskList;
//     },
//     handleTaskDelete: function (index) {
//       this.taskList.splice(index, 1);
//     },
//   },
// });

// app.mount("#app");

let app = Vue.createApp({
  template: `
  <h2>Let's toDo in Vue</h2>
  <input 
  :value=[[this.taskVal]]
  v-on:change="inputChangeHandler" :placeholder="'Enter a Task' " />
  <button v-on:click="addTaskBtnHandler">Add Task</button>
  <li v-for="(task, index) in taskList">
    
    <div class="checkedTask" v-if="task.isChecked && !task.isEditable">
        <input type="checkbox" v-on:change="() => cbHandler(index)" />
        <span>{{task.task}}</span>
        <button v-on:click="() => editBtnHandler(index)">Edit</button>
        <button v-on:click="() => deleteTaskBtnHandler(index)">Delete</button>
    </div> 
    <div v-if="!task.isChecked && !task.isEditable">
        <input type="checkbox" v-on:change="() => cbHandler(index)" />
        <span>{{task.task}}</span>
        <button v-on:click="() => editBtnHandler(index)">Edit</button>
        <button v-on:click="() => deleteTaskBtnHandler(index)">Delete</button>
    </div>
    <div class="editableTask" v-if="task.isEditable">
        <input :placeholder=" [[ task.task ]]" v-on:change="newTaskInputHandler" />
        <button v-on:click="() => modifyBtnHandler(index)">Modify</button>
        <button v-on:click="() => deleteTaskBtnHandler(index)">Delete</button>
    </div> 
  </li>
  `,
  data() {
    return {
      taskVal: "",
      newTaskVal: "",
      taskList: [],
    };
  },
  methods: {
    inputChangeHandler: function (e) {
      this.taskVal = e.target.value;
    },
    addTaskBtnHandler: function () {
      if (this.taskVal == "") {
        alert("please enter a task to proceed!");
      } else {
        let newTask = {
          task: this.taskVal,
          isChecked: false,
          isEditable: false,
        };
        this.taskVal = "";
        this.taskList.push(newTask);
      }
    },
    deleteTaskBtnHandler: function (index) {
      this.taskList.splice(index, 1);
    },
    cbHandler: function (index) {
      let myList = this.taskList;
      myList[index].isChecked = !myList[index].isChecked;
      this.taskList = myList;
    },
    editBtnHandler: function (index) {
      let myList = this.taskList;
      myList[index].isEditable = !myList[index].isEditable;
      this.tasklist = myList;
    },
    newTaskInputHandler: function (e) {
      this.newTaskVal = e.target.value;
    },
    modifyBtnHandler: function (index) {
      this.taskList.splice(index, 1, {
        task: this.newTaskVal,
        isChecked: false,
        isEditable: false,
      });
    },
  },
});

app.mount("#app");

<template>
  <div class="todos">
    <h1>Todo App</h1>
    <input @keyup.enter="addItem" type="text" v-model="title" placeholder="Enter the item">
    <button @click="addItem">Add to List</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
         <span @click="removeItem(index)" class="remove">x</span>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'todo',
  props: {
    msg: String
  },
  data () {
    return {
      title: '',
      todos: [
        'Go to shop'
      ]
    }
  },
  methods: {
    addItem () {
      if(this.title != '') {
      //this.todos.push(this.title);//to append the item
      this.todos.unshift(this.title);//to prefix the item
      this.tile = "";
      }
    },
    removeItem (id) {
      //console.log(id);
      //this.splice(id, 1);
      this.$delete(this.todos, id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

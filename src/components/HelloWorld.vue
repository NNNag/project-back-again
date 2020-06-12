<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <alert mode="primary">
      First Alert
    </alert>
    <alert mode="danger">
      Second Alert
    </alert>
    <alert mode="success">
      Last Alert
    </alert>

    <div>
      <input type="text" v-model="lastName" placeholder="your nice name?">
      <p>
        Welcome {{lastName}}
      </p>
      
      <button @click="clickedMe">Click Me</button>
      <input type="text" @keyup="doSomething" placeholder="Enter your code here">

      <h3>using for loop</h3>
      <ul>
        <li v-for="person in students" :key="person">{{ person }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      lastName: 'Naveen',
      students: ['John', 'David', 'Peter', 'Mark']
    }
  },
  methods: {
    clickedMe: function () {
      console.log("You clicked me")
    },
    doSomething () {
      console.log("coupan is updated")
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>

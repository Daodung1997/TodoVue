<template>
  <div class="container pl-5">
    <h1>{{ msg }}</h1>
    <h3>{{todo}}</h3>
    <hr>
    <br>
    <form >
      <input type="text" v-model="inputChange" />
      <button @click="changeMessage">Click Me</button>
    </form>
    <hr>     
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      inputChange:'',
      nameModal:null,
      msg:'Hello World',
      todo:'Làm việc một mình'
    }
  },
  methods:{
    changeMessage(e){
      e.preventDefault();
      this.msg=this.inputChange;
      this.inputChange='';
    },
  }
}
</script>

<style scoped>
</style>

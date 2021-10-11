Vue.component('greeting',{
 template:'<p>Hi there, I am {{name}}.<button v-on:click = "changeName">Change name</button><p>',
 data: function(){
  return {
   name: 'Yoshi'
  }
 },

 methods: {
  changeName: function(){
   this.name = 'Kayley';
  }
 }
});
 
 var one = new Vue({
 el:'#vue-app-one',
 data:{
  title: 'Vue app one',
  output: 'Output'

 },

 methods:{
  readRefs:function(){
   console.log(this.$refs.new.innerHTML);
   
  }


 },

 computed:{
  greet: function(){
   return 'Hello from app 1'
  }


 }




});

var two =new Vue({
 el:'#vue-app-two',
 data:{
  title: 'Vue app two',

 },

 methods:{
  changeTitle:function(){
   one.title ="New Title";

  }


 },

 computed:{
  greet: function(){
   return 'Hello from app 2'
  }


 }




});
two.title = "changed title";

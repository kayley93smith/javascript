new Vue({
 el:'#vue-app',
 data:{
  name: ' Kayley',
  website: 'http://www.thenetninja.co.uk',
  web: '<a target = blank href="http://www.thenetninja.co.uk">the net ninja</a>',
  age: 20,
  a:0,
  b:0,
  available:false,
  nearby:false,
  error:false,
  success:false,

  
 },
 methods:{
  greet:function(time){
   return 'Hello' + time + this.name;
 },
 
  click:function(){
   alert('you clicked me');
  },
  logName:function(){
   ;
  },
  logAge:function(){
   ;
  },
 },
  /*addToA:function(){
   console.log('addToA');
   return this.age+this.a;
  },
  addToB:function(){
   console.log('addToB');
   return this.age+this.b;
  },
}*/

computed: {
 addToA:function(){
  console.log('addToA');
  return this.age+this.a;
 },
 addToB:function(){
  console.log('addToB');
  return this.age+this.b;
 },
 compClasses:function(){
  return{
   nearby: this.nearby,
   available: this.available

  } 

  

 },
}
 


});

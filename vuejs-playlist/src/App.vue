<template>
<div>
  <form-helper></form-helper>
  <h1>Hi</h1>
  <p>{{greeting()}}</p>
</div>
</template>



<script>
import formHelper from './components/formHelper.vue'

export default{
  components:{
    'form-helper':formHelper
    
    },
  
  data(){
    return {
      
    
     
    }
  },
  methods:{
    greeting:function(){
      return 'hey hey';
   
  }
  

  },
}

</script>

<style>



</style>

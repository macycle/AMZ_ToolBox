<template>
  <div>
    <h3>{{Make()}}</h3>
  </div>
</template>

<script>
import Cardata from "../assets/Cardata.json";
export default {
  data() {
    return {
    };
  },
  methods:{
      Make(){
          for(let key in Cardata){
              console.log(key);
          }
      }
  }
 
};
</script>

<style lang="scss" scoped>
</style>
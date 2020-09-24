
<template>
  <div class="content " > 
    <b-row align-v="center">
      <b-col md="1">
        <div class="avatar " v-bind:style="{background:'url('+ avatar +')  no-repeat'}"></div>
      </b-col>
      <b-col>
        <div class="username">Hello, {{username}}</div>
        <div class="position">{{position}}</div>
      </b-col>
    </b-row>
    <b-row >
      <b-col>
        <div class="subtitle">Projects</div>
        <div class="description">These are all running projects you interact with.</div>
        <div class="description">Or do you have plan to create one ?</div>
      </b-col>
    </b-row>
  </div>
  
</template>
<script>

import {APP_URL,GET_PROJECTS } from "../const/Api"
import { getDataList } from '../request/request'
export default {
  data(){
    return{
      username:localStorage.getItem("username"),
      position:localStorage.getItem("position"),
      avatar:APP_URL+localStorage.getItem("photo"),
      projects :[]
    }
  },
  created(){
    this.loadData();
  },
  methods:{
    loadData() {
      getDataList(GET_PROJECTS)
        .then(result => {
          console.log(JSON.stringify(result));
          this.projects = result;
        })
        .catch(err => {
          console.log(err.message)
        })
      }
    }  
  
}
</script>

<style >


 
body{
  background-color: #f2f2f2 !important;
  width: "100%";
  height: "100%";
}




</style>


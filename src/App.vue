<template>
  <div id="app" class="main">
    
    <div>
      <!-- <div >
        <b-navbar >
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>

          
          </b-navbar-nav>
        </b-navbar>
      </div>
      <b-sidebar  :visible="true" id="sidebar-1" shadow>
        <div class="px-3 py-2">
          <b-row align-v="center">
            <b-col md="3">
              <b-img class="logosidebar" :src="logo"></b-img>
            </b-col>
            <b-col>
              <div class="apptitle">Atmosphere</div>
            </b-col>
          </b-row>
        </div>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </b-sidebar> -->
      
      <router-view/>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
// import router from './router'
import logo from '../src/assets/imgs/logo2.png'
export default {
  data(){
    return{
      logo:logo
    }
  },
  mounted(){
    // if(localStorage.getItem("sessionToken") != undefined &&  localStorage.getItem("sessionToken") != ""){
    //   router.push("/home")
    // } else {
    //   router.push("/login")
    // }
  }
}
</script>>

<style>
.apptitle{
  font-size: 1.5rem;
}
.b-sidebar{
  width: 260px !important;
}
.logosidebar{
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.main{
  padding: 0px 0px 20px 90px;
  background-color:#f2f2f2;
  width: 85% !important;
  /* display: flex; */
  float: right;

}
.avatar{
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-size: 50px 50px;
}
.content{
  padding: 10px 20px;
}
.username{
  font-size: 25px;
  color:#2f3c51
}
.description{
  font-size: 15px;
  color:#546c91
}
.subtitle{
  font-size: 20px;
  color:#2f3c51
}
.position{
  font-size: 13px;
  color:#9e9e9e
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

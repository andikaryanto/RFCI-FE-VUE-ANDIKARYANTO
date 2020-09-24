import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from './router'

import {
  BRow,
  BCol,
  BContainer,
  BForm,
  BInputGroup,
  BFormInput,
  BFormRow,
  BButton,
  BSidebar,
  BImg,
  VBToggle,
  BNavbar,
  BNavbarNav,
  BNavItem
} from 'bootstrap-vue'

Vue.directive("b-toggle", VBToggle);

Vue.component("b-navbar", BNavbar);
Vue.component("b-nav-item", BNavItem);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-row", BRow);
Vue.component("b-form-row", BFormRow);
Vue.component("b-col", BCol);
Vue.component("b-container", BContainer);
Vue.component("b-form", BForm);
Vue.component("b-input-group", BInputGroup);
Vue.component("b-form-input", BFormInput);
Vue.component("b-button", BButton);
Vue.component("b-sidebar", BSidebar);
Vue.component("b-img", BImg);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

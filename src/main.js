import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import { dom } from '@fortawesome/fontawesome-svg-core'
import vueSmoothScroll from 'vue2-smooth-scroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSnapchat } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faFacebook, faSnapchat, faInstagram, faYoutube)

dom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(vueSmoothScroll)


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

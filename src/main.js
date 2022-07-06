const Home = { template: '<div>Hallo hier ist die Home Seite</div>' }
const About = { template: '<div>Hallo hier ist die About Seite</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)

app.mount('#app')

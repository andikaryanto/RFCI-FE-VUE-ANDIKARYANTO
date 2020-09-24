import HomePage from '../src/views/Home'
import AboutPage from '../src/views/About'
import LoginPage from '../src/views/Login'
import BlankPage from '../src/views/Blank'
import SortPage from '../src/views/Sort'
import FormPage from '../src/views/Form'


// const Home = { template: HomePage }
const routes = [
    { path: '/', component: BlankPage },
    { path: '/sort', component: SortPage },
    { path: '/form', component: FormPage },
    { path: '/home', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/about', component: AboutPage },
]
export default routes;
  
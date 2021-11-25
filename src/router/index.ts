import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import Home from '../App.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue';
import Resume from '../views/Resume.vue';
import Contact from '../views/Contact.vue';

// import unity from '../components/Unity.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
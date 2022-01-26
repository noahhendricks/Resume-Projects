// index.js


// impoorts create the router and web history functionality throughout the vue app
import { createRouter, createWebHistory } from 'vue-router'

// vue home import called
import Home from '@/views/Home.vue'

// all custom routes for each view and componet routed through this "routes" constraint
const routes = [
{
        // "/" = Home WebPage
        path: '/',
        name: 'Home',
        component: Home
},
{
        // "Applicants" = Applicants webpage
        path: '/Applicants',
        name: 'Applicants',
        component: () => import('../views/Applicants')
},
{
        // "Applicants" = Applicants webpage for editing
        path: '/Applicants/:ApplicantId',
        name: 'edit',
        component: () => import('../components/Applicants/editApplicants')
},
{
        // "Applicants" = Applicants webpage for histories table/chart
        path: '/Applicants/History/:ApplicantId',
        name: 'history',
        component: () => import('../components/Applicants/historyApplicants')
},
{
        // "Events" = Events webpage
        path: '/Events',
        name: 'Events',
        //props: true,
        component: () => import('../views/Events')
},
{
        // "Events" = Events webpage for editing
        path: '/Events/:EventID',
        name: 'EditEvents',
        //props: true,
        component: () => import('../components/Events/editEvents')
},
{
        // "Register" = Register webpage
        path: '/Register',
        name: 'Register',
        component: () => import('../views/Register')
},
{
        // "Register" = Register webpage for editing
        path: '/Register/:History_ID',
        name: 'editH',
        //props: true,
        component: () => import('../components/Register/editRegister')
},
{
        // "ExternalResources" = ExternalResources webpage
        path: '/ExternalResources',
        name: 'External_Resources',
        component: () => import('../views/External_Resources')
},
{
        // "About" = About webpage describing the guidelines of the app
        path: '/About',
        name: 'About',
        component: () => import('../views/About')
},
{
        // "chartjs" = Professor example chart
        path: '/chartjs',
        name: 'VueChartJS',
        component: () => import('../components/PlanetChart')
        //component: VueChartJS
      }

]

// Router creation function that allows for short routes and website history
const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes // short for `routes: routes`
      })
      
      // exports router
      export default router
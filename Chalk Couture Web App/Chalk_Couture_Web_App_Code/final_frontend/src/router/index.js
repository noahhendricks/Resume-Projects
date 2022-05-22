import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/About.vue'
//import VueChartJS from '@/views/VueChartJS'

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  //path is the home page for when running web app click on CFC Management App 
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },


//******************************   Customer   ***************************************************/
{
  // Create Customer
  path: '/createCustomer',
  name: 'createCustomer',
  component: () => import('../components/Customer/CreateCustomer') 
 
},
{
  //View Customers
  path: '/viewCustomer',
  name: 'viewCustomer',
  component: () => import('../components/Customer/ViewCustomer')
},

{
  // Edit Customer
  path: '/editCustomer/:id',
  name: 'editCustomer',
  component: () => import('../components/Customer/EditCustomer')
},

//******************************   Customer   *********************************************************************************/


//*******************************   Item   ************************************************************************** */
{
  // Create Item
  path: '/createItem',
  name: 'createItem',
  component: () => import('../components/Item/CreateItem') 
 
},
{
  // View Items
  path: '/viewItem',
  name: 'viewItem',
  component: () => import('../components/Item/ViewItem'),
},

{
  // Pagination of Tables attempt  -- does not work
  path: '/Pagination',
  name: 'ViewItem',
  component: () => import('../components/Pagination'),
},

{
  // Edit Item
  path: '/editItem/:id',
  name: 'editItem',
  component: () => import('../components/Item/EditItem')
},


//*******************************   Item   ********************************************************************************************************* */



//*******************************   Event   **************************************************************************** */
{
  // Create Event
  path: '/createEvent',
  name: 'createEvent',
  component: () => import('../components/Event/CreateEvent') 
 
},
{
  // View Event
  path: '/viewEvent',
  name: 'viewEvent',
  component: () => import('../components/Event/ViewEvent')
},

{
  // Edit Event
  path: '/editEvent/:id',
  name: 'editEvent',
  component: () => import('../components/Event/EditEvent')
},

//*******************************   Event   **************************************************************************** */



//*******************************   Event   Invoice ***************************************************************** */
{
  // Create Event Invoice 
  path: '/createEvent_Invoice',
  name: 'createEvent_Invoice',
  component: () => import('../components/Event_Invoice/CreateEvent_Invoice') 
 
},
{
  // View Event Invoice
  path: '/viewEvent_Invoice',
  name: 'viewEvent_Invoice',
  component: () => import('../components/Event_Invoice/ViewEvent_Invoice')
},

{
  // Edit Event Invoice
  path: '/editEvent_Invoice/:id',
  name: 'editEvent_Invoice',
  component: () => import('../components/Event_Invoice/EditEvent_Invoice')
},
//*******************************   Event Invoice   ***************************************************************** */


//********************************   Customer Invoice   **************************************************************************************** */

// Create Customer Invoice
{
path: '/createCust_Invoice',
name: 'createCust_Invoice',
component: () => import('../components/Cust_Invoice/CreateCust_Invoice') 

},
{
// Edit Customer Invoice
path: '/editCust_Invoice/:id',
name: 'editCust_Invoice',
component: () => import('../components/Cust_Invoice/EditCust_Invoice')
},

{
// View Customer Invoice
path: '/viewCust_Invoice',
name: 'viewCust_Invoice',
component: () => import('../components/Cust_Invoice/ViewCust_Invoice')
},
  
  
  //********************************   Customer Invoice   ******************************************************************************************************************** */



//*******************   Reports   ***************************** */
{
  // View Item Customer Report
    path: '/item_order_line_report/:id',
    name: 'item_order_line_report',
    component: () => import('../components/Reports/viewItemReport')

},

{
  // View Customer Item Report
    path: '/customer_order_line_report/:id',
    name: 'customer_order_line_report',
    component: () => import('../components/Reports/viewCustomerReport')

},

{
  // View Item Event Report
    path: '/item_event_sale_report/:id',
    name: 'item_event_sale_report',
    component: () => import('../components/Reports/viewEventSalesReport')

},

{
  // View Event Item Report
    path: '/event_invoice_report/:id',
    name: 'event_invoice_report',
    component: () => import('../components/Reports/viewEventPurchasesReport')

},



  
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes // short for `routes: routes`
})

export default router

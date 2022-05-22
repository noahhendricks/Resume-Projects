import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import VueChartJS from '@/views/VueChartJS'

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
 //************Investor************* */
 {
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createInvestor',
  name: 'createInvestor',
  component: () => import('../components/Investor/CreateInvestor')
},
{
  //This route takes us to the View Clients based on the ListComponent
  path: '/viewInvestor',
  name: 'viewInvestor',
  component: () => import('../components/Investor/ViewInvestor')
},
{
  //this edit route takes us to the editComponent to be 
  //able to edit the fields once in the view clients
  path: '/editInvestor',
  name: 'editInvestor',
  component: () => import('../components/Investor/EditInvestor')
},


//*************Subcontractor*************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createSubcontractor',
  name: 'createSubcontractor',
  component: () => import('../components/Subcontractor/CreateSubcontractor') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewSubcontractor',
  name: 'viewSubcontractor',
  component: () => import('../components/Subcontractor/ViewSubcontractor')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editSubcontractor',
  name: 'editSubcontractor',
  component: () => import('../components/Subcontractor/EditSubcontractor')
},

//********************End of Subcontractor Intake Form**************************** */


//******************************Start of Employee Intake Form***************************************************/
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createEmployee',
  name: 'createEmployee',
  component: () => import('../components/Employee/CreateEmployee') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewEmployee',
  name: 'viewEmployee',
  component: () => import('../components/Employee/ViewEmployee')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editEmployee',
  name: 'editEmployee',
  component: () => import('../components/Employee/EditEmployee')
},

//******************************End of Employee Intake Form*********************************************************************************/


//*******************************Start of Project Intake Form************************************************************************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createProject',
  name: 'createProject',
  component: () => import('../components/Project/CreateProject') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewProject',
  name: 'viewProject',
  component: () => import('../components/Project/ViewProject')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editProject',
  name: 'editProject',
  component: () => import('../components/Project/EditProject')
},


//*******************************End of Project Intake Form********************************************************************************************************* */



//*******************************Start of Phase**************************************************************************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createPhase',
  name: 'createPhase',
  component: () => import('../components/Phase/CreatePhase') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewPhase',
  name: 'viewPhase',
  component: () => import('../components/Phase/ViewPhase')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editPhase',
  name: 'editPhase',
  component: () => import('../components/Phase/EditPhase')
},

//*******************************End of Phase**************************************************************************** */



//*******************************Start of Step***************************************************************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createStep',
  name: 'createStep',
  component: () => import('../components/Step/CreateStep') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewStep',
  name: 'viewStep',
  component: () => import('../components/Step/ViewStep')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editStep',
  name: 'editStep',
  component: () => import('../components/Step/EditStep')
},
//*******************************End of Step***************************************************************** */




//*******************************Start of Task****************************************************************************** */
{
  //This route takes us to the Create Client Form using the Create Component 
  path: '/createTask',
  name: 'createTask',
  component: () => import('../components/Task/CreateTask') 
 
},
{
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/viewTask',
  name: 'viewTask',
  component: () => import('../components/Task/ViewTask')
},

{
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/editTask',
  name: 'editTask',
  component: () => import('../components/Task/EditTask')
},
//*******************************End of Task****************************************************************************** */


//********************************Start of Investor Assigned**************************************************************************************** */
//This route takes us to the Create Client Form using the Create Component 
{
path: '/createInvestorAssigned',
name: 'createInvestorAssigned',
component: () => import('../components/InvestorProject/CreateInvestorProject') 

},
{
//route to allow to viewClient Activity based on componet ViewClientActivity 
path: '/editInvestorAssigned',
name: 'editInvestorAssigned',
component: () => import('../components/InvestorProject/EditInvestorProject')
},

{
//route to be used to edit client activity based on the component EditClientActivity
path: '/viewInvestorAssigned',
name: 'viewInvestorAssigned',
component: () => import('../components/InvestorProject/ViewInvestorProject')
},


//********************************End of Investor Assigned******************************************************************************************************************** */

//********************************Start of Subcontractor Assigned**************************************************************************************** */
//This route takes us to the Create Client Form using the Create Component 
{
  path: '/createSubcontractorAssigned',
  name: 'createSubcontractorAssigned',
  component: () => import('../components/SubcontractorAssigned/createSubcontractorStep') 
  
  },
  {
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/editSubcontractorAssigned',
  name: 'editSubcontractorAssigned',
  component: () => import('../components/SubcontractorAssigned/editSubcontractorStep')
  },
  
  {
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/viewSubcontractorAssigned',
  name: 'viewSubcontractorAssigned',
  component: () => import('../components/SubcontractorAssigned/viewSubcontractorStep')
  },
  
  
  //********************************End of Subcontractor Assigned******************************************************************************************************************** */


//********************************Start of Employee Assigned**************************************************************************************** */
//This route takes us to the Create Client Form using the Create Component 
{
  path: '/createEmployeeAssigned',
  name: 'createEmployeeAssigned',
  component: () => import('../components/EmployeeAssigned/createEmployeeProject') 
  
  },
  {
  //route to allow to viewClient Activity based on componet ViewClientActivity 
  path: '/editEmployeeAssigned',
  name: 'editEmployeeAssigned',
  component: () => import('../components/EmployeeAssigned/editEmployeeProject')
  },
  
  {
  //route to be used to edit client activity based on the component EditClientActivity
  path: '/viewEmployeeAssigned',
  name: 'viewEmployeeAssigned',
  component: () => import('../components/EmployeeAssigned/viewEmployeeProject')
  },
  
  
  //********************************End of Employee Assigned******************************************************************************************************************** */






//***********Client Activity************* */
{
  path: '/activity',
    name: 'activity',
    component: () => import('../components/ClientActivity/ActivitiesTable.vue')
},

//*******************Start of Reports***************************** */
{
  //view client info based on the component client info
    path: '/project_phase_report/:id',
    name: 'project_phase_report',
    component: () => import('../components/Reports/viewPhaseReport')

},


{
  //view client info based on the component client info
    path: '/project_step_report/:id',
    name: 'project_step_report',
    component: () => import('../components/Reports/viewStepReport')

},

{
  //view client info based on the component client info
    path: '/project_task_report/:id',
    name: 'project_task_report',
    component: () => import('../components/Reports/viewTaskReport')

},


{
  //view client info based on the component client info
    path: '/investor_project_report/:id',
    name: 'investor_project_report',
    component: () => import('../components/Reports/viewInvestorReport')

},

{
  //view client info based on the component client info
    path: '/employee_project_report/:id',
    name: 'employee_project_report',
    component: () => import('../components/Reports/viewEmployeeReport')

},

{
  //view client info based on the component client info
    path: '/project_employee_report/:id',
    name: 'project_employee_report',
    component: () => import('../components/Reports/viewProjectEmployeeReport')

},

{
  //view client info based on the component client info
    path: '/subcontractor_step_report/:id',
    name: 'subcontractor_step_report',
    component: () => import('../components/Reports/viewSubcontractorReport')

},

{
  //view client info based on the component client info
    path: '/step_subcontractor_report/:id',
    name: 'step_subcontractor_report',
    component: () => import('../components/Reports/viewStepAssignSubcontractorReport')

},

{
  //view client info based on the component client info
    path: '/project_investor_report/:id',
    name: 'project_investor_report',
    component: () => import('../components/Reports/viewProjectReport')

},

//*********User Manual********* */
{
  //User Manual
  path: '/manual',
  name: 'ManualView',
  component: () => import('../components/UserManual/ManualView.vue')
},

//********************End of Tab Reports*********************************************** */
//*******Vue Chart******* */
{
  //Activities Summary chart based on the component VueChartJS
  path: '/chartjs',
  name: 'VueChartJS',
  component: VueChartJS
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

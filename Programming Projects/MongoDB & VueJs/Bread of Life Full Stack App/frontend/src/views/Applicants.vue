<!-- Applicants.vue -->

<!-- view ability for applicants webpages -->
<template>
<div>
        <!-- Multiple tab functionality for applicants webpages -->
        <h1 >Applicants</h1>
        <div id="dynamic-component-demo" class="demo">
                <button
                        v-for="tab in tabs"
                        v-bind:key="tab"
                        v-bind:class="['tab-button', { active: currentTab === tab }]"
                        v-on:click="currentTab = tab"
                >
                {{ tab }}
                </button>
       <!-- current component selected --> 
      <component v-bind:is="currentComponent" class="tab"></component>
    </div>
</div>
</template>

<!-- All routes for crud functionality for Applicants webpages -->
<script>
import addApp from '@/components/Applicants/addApplicants.vue'
import viewApp from '@/components/Applicants/viewApplicants.vue'
import editApp from '@/components/Applicants/editApplicants.vue'

export default {
        name: 'App',

        // View, Add, Edit components
        components: {
                'AddApplicant': addApp,
                'ViewApplicant': viewApp,
                'EditApplicant': editApp,
        },
        // Tabs on Applicants Webpage
        data: function(){
                return {
                currentTab: "View",
                tabs: ["View", "Add"]
                }
        },
        // Allows for current selection
        computed: {
                currentComponent: function(){
                        return this.currentTab +"Applicant"
                }
        }
}
</script>

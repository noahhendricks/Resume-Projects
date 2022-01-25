<!-- Register.vue -->

<!-- view ability for Register webpages -->
<template>
<div>
        <!-- Multiple tab functionality for Register webpages -->
        <h1 >Register</h1>
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

<!-- All routes for crud functionality for Register webpages -->
<script>
import addApp from '@/components/Register/addRegister.vue'
import viewApp from '@/components/Register/viewRegister.vue'
import editApp from '@/components/Register/editRegister.vue'

export default {

        // View, Add, Edit components
        name: 'App',
        components: {
                'AddRegister': addApp,
                'ViewRegister': viewApp,
                'EditRegistert': editApp,
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
                        return this.currentTab +"Register"
                }
        }
}
</script>

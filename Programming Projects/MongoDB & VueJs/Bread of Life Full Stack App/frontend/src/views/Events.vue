<!-- Events.vue -->

<!-- view ability for Events webpages -->
<template>
<div>
        <!-- Multiple tab functionality for Events webpages -->
        <h1>Events</h1>
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

<!-- All routes for crud functionality for Events webpages -->
<script>
import addApp from '@/components/Events/addEvents.vue'
import viewApp from '@/components/Events/viewEvents.vue'

export default {
        name: 'App',
        // View, Add, Edit components
        components: {
                'AddEvent': addApp,
                'ViewEvent': viewApp,
        },
        // Tabs on Events Webpage
        data: function(){
                return {
                currentTab: "View",
                tabs: ["View", "Add"]
                }
        },
        // Allows for current selection
        computed: {
                currentComponent: function(){
                        return this.currentTab +"Event"
                }
        }
}
</script>



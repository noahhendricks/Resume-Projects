<!-- historyApplicants.vue -->

<!-- This is where the connection is made for the chart and table tabs of each applicant's history -->
<template>
<div>
        <!-- History Items -->
        <h1 >History Items</h1>
        <div id="dynamic-component-demo" class="demo">
                <button
                        v-for="tab in tabs"
                        v-bind:key="tab"
                        v-bind:class="['tab-button', { active: currentTab === tab }]"
                        v-on:click="currentTab = tab"
                >
                {{ tab }}
                </button>

       <!-- current component -->
      <component v-bind:is="currentComponent" class="tab"></component>
    </div>
</div>
</template>

<!-- imports the correct urls for the chart and table -->
<script>
import chart from '@/components/History/Chartcomponent.vue'
import table from '@/components/History/Table.vue'

// export the tabs for the chart and table views
export default {
        name: 'App',
        components: {
                'Chart': chart,
                'Table': table
        },
        data: function(){
                return {
                currentTab: "Table",
                tabs: ["Chart", "Table"]
                }
        },
        computed: {
                currentComponent: function(){
                        return this.currentTab
                }
        }
}
</script>
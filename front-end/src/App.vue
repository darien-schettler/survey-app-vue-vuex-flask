<!--  
The App.vue file serves as the top level application components and often contains the general layout of the application. 
Vue components have a specific structure containing:
    1. <template> section for component-specific HTML
    2. <script> section to define the Vue object and that component's behaviors implemented in JavaScript
    3. <styles> section for CSS / SCSS rules 

That last bit can be a bit confusing though because by default the style rules you define in a component do not just pertain 
to that component. They actually affect all the elements in the entire project unless you add a scoped attribute to the <style> element. 
-->

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$teal: #00D1B2;

.teal-background{
  background-color: $teal;
  color: white;
}
.light-teal-background{
  background-color: rgba(0, 209, 178, 0.25);
  color: black;
}
.text-teal{
  color: $teal;
}

</style>

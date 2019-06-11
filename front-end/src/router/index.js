import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

/*
The index.js script in the router directory is where the URLs for the application are defined and mapped to components. 
The first two lines import the Vue and Router objects, which are then linked by the use method on the Vue object.

The default route that is provided from the vue-cli webpack template is simply the root or index route for the application
To map a route path to a component:
		1. it first has to be imported
		2. then you need to define a route object in the routes array giving it a ...
			--> path
			--> name
			--> component to be displayed
*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

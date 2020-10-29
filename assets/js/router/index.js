import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('../views/auth/Login.vue')
	},

	{
		// ======================
		// Full Layout
		// ======================
		path: '',
		component: () => import('../components/layout/MainContainer.vue'),

		// ======================
		// Main routes / pages
		// ======================
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: () => import('../views/Home.vue')
			}
		],
	},

	// Redirect to home page, if no match found
	{
		path: '*',
		redirect: '/'
	}
]

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}  
})

export default router
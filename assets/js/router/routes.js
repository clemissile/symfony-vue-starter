import DashboardLayout from "../layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "../pages/Dashboard.vue");
const Notifications = () => import(/* webpackChunkName: "common" */ "../pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "../pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "../pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "../pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "../pages/TableList.vue");

const routes = [
	{
		path: '/',
		name: 'login',
		component: () => import('../views/auth/Login.vue')
	},
	{
		path: "",
		component: DashboardLayout,
		redirect: "/dashboard",
		children: [
			{
				path: "dashboard",
				name: "dashboard",
				component: Dashboard
			},

			/**
			 * USER ROUTES
			 */
			{
				path: "user/profile",
				name: "UserProfile",
				component: () => import('../views/user/UserProfile.vue')
			},
			{
				path: "user/settings",
				name: "UserSettings",
				component: () => import('../views/user/UserProfile.vue')
			},

			{
				path: "notifications",
				name: "notifications",
				component: Notifications
			},
			{
				path: "icons",
				name: "icons",
				component: Icons
			},
			{
				path: "maps",
				name: "maps",
				component: Maps
			},
			{
				path: "typography",
				name: "typography",
				component: Typography
			},
			{
				path: "table-list",
				name: "table-list",
				component: TableList
			}
		]
	},

	{ path: "*", component: NotFound },
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

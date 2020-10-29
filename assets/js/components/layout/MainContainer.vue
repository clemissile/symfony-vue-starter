<template>
	<div class="main-wrapper">
		<!-- Navigation -->
		<Navbar :topbarColor="topbarColor" :logo="require('../../assets/images/logo/logo-light-icon.png')" :title="logotitle" />

		<!-- Sidebar -->
		<Sidebar parent=".main-wrapper" :sidebarLinks="sidebarLinks"/>

		<!-- Page Container -->
		<div class="main-container-fluid">
			<router-view></router-view>
		</div>	
	</div>
</template>

<script>
	import Navbar from './header/Navbar.vue';
	import Sidebar from './sidebar/Sidebar.vue';
	import sidebarLinks from './sidebar/sidebarlinks.js';

	export default {
		name: "MainContainer",

		components: {
			Navbar,
			Sidebar
		},

		data() {
			return {
				topbarColor: "#2962ff",
				logotitle: "Xtreme Vuesax Free",
				sidebarLinks: sidebarLinks,
			}
		}
	}
</script>
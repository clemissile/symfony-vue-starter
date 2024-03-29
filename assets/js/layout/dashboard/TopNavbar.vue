<template>
	<nav class="navbar navbar-expand-lg navbar-absolute" :class="{ 'bg-white': showMenu, 'navbar-transparent': !showMenu }">
		<div class="container-fluid">
			<div class="navbar-wrapper">
				<div class="navbar-toggle d-inline" :class="{ toggled: $sidebar.showSidebar }">
					<button type="button"
						class="navbar-toggler"
						aria-label="Navbar toggle button"
						@click="toggleSidebar"
					>
						<span class="navbar-toggler-bar bar1"></span>
						<span class="navbar-toggler-bar bar2"></span>
						<span class="navbar-toggler-bar bar3"></span>
					</button>
				</div>
				<a class="navbar-brand" href="#pablo">
					{{ routeName }}
				</a>
			</div>
			<button class="navbar-toggler" type="button"
				@click="toggleMenu"
				data-toggle="collapse"
				data-target="#navigation"
				aria-controls="navigation-index"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-bar navbar-kebab"></span>
				<span class="navbar-toggler-bar navbar-kebab"></span>
				<span class="navbar-toggler-bar navbar-kebab"></span>
			</button>

			<collapse-transition>
				<div class="collapse navbar-collapse show" v-show="showMenu">
					<ul class="navbar-nav ml-auto">
						<div class="search-bar input-group" @click="searchModalVisible = true">
							<button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
								<i class="tim-icons icon-zoom-split"></i>
							</button>
						</div>
						<modal :show.sync="searchModalVisible"
							class="modal-search"
							id="searchModal"
							:centered="false"
							:show-close="true"
						>
							<input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
						</modal>
						<base-dropdown tag="li" title-tag="a" class="nav-item">
							<a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
								<div class="notification d-none d-lg-block d-xl-block"></div>
								<i class="tim-icons icon-sound-wave"></i>
								<p class="d-lg-none">
									New Notifications
								</p>
							</a>
							<li class="nav-link">
								<a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>
							</li>
							<li class="nav-link">
								<a href="#" class="nav-item dropdown-item">You have 5 more tasks</a>
							</li>
							<li class="nav-link">
								<a href="#" class="nav-item dropdown-item">Your friend Michael is in town</a>
							</li>
							<li class="nav-link">
								<a href="#" class="nav-item dropdown-item">Another notification</a>
							</li>
							<li class="nav-link">
								<a href="#" class="nav-item dropdown-item">Another one</a>
							</li>
						</base-dropdown>
						<base-dropdown tag="li" title-tag="a" class="nav-item" menu-classes="dropdown-navbar">
							<a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
								<div class="photo">
									<img src="../../assets/images/users/profile.png">
								</div>
								<b class="caret d-none d-lg-block d-xl-block"></b>
								<p class="d-lg-none">
									Log out
								</p>
							</a>
							<li class="nav-link">
								<router-link :to="getRoute('UserProfile')" class="nav-item dropdown-item">Profile</router-link>
							</li>
							<li class="nav-link">
								<router-link :to="getRoute('UserSettings')" class="nav-item dropdown-item">Settings</router-link>
							</li>
							<div class="dropdown-divider"></div>
							<li class="nav-link">
								<a href="" @click.prevent="logout" class="nav-item dropdown-item">Log out</a>
							</li>
						</base-dropdown>
						<li class="nav-item" @click.prevent="logout">
							<a href="#" class="nav-link">
								<i class="tim-icons icon-button-power"></i>
							</a>
						</li>
					</ul>
				</div>
			</collapse-transition>
		</div>
	</nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'
import Modal from '../../components/Modal'
import { mapActions, mapGetters } from "vuex"

export default {
	data() {
		return {
			activeNotifications: false,
			showMenu: false,
			searchModalVisible: false,
			searchQuery: ''
		}
	},

	components: {
		CollapseTransition,
		Modal
	},

	computed: {
		...mapGetters({
            getRoute: 'ui/getRoute'
        }),

		routeName() {
			const { name } = this.$route
			return this.capitalizeFirstLetter(name)
		}
	},

	methods: {
		...mapActions({
			attemptLogout: "auth/logout"
		}),

		logout() {
			this.attemptLogout(this.credentials)
				.then(() => {
					this.$notify({
						message: 'Déconnexion réussie Didier !',
						icon: "tim-icons icon-check-2",
						type: 'success'
					})

					this.$router.push({ name: "login" });
				})
		},

		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1)
		},

		toggleNotificationDropDown() {
			this.activeNotifications = !this.activeNotifications;
		},

		closeDropDown() {
			this.activeNotifications = false;
		},

		toggleSidebar() {
			this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
		},

		hideSidebar() {
			this.$sidebar.displaySidebar(false);
		},

		toggleMenu() {
			this.showMenu = !this.showMenu;
		}
	}
}
</script>

<style lang="scss" scoped>
</style>

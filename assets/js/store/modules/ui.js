export default {
    namespaced: true,

    state: {
        isSidebarActive: false,
        themeColor: "#2962ff"
    },

    getters: {
        getRoute: state => (route) => {
            return {
                name: `${route}`
            }
        }
    },

    actions: {},

    mutations: {
        // This is for Sidbar trigger in mobile
        ['IS_SIDEBAR_ACTIVE'](state, value) {
            state.isSidebarActive = value;
        }
    }    
}
<template>
    <div class="login">
        <vs-row vs-justify="center" class="vh-100">
            <vs-col class="d-flex p-0" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                <vs-card class="w-50">
                    <div slot="header">
                        <h3>Connexion</h3>
                    </div>
                    <div>
                        <vs-input
                            icon-no-border
                            icon="email"
                            class="mt-3 w-100"
                            label-placeholder="Adresse email"
                            v-model="credentials.email"
                        />
                        <vs-input
                            icon-no-border
                            icon="lock"
                            class="mt-3 w-100"
                            label-placeholder="Mot de passe"
                            v-model="credentials.password"
                        />
                        
                        <div class="w-100 text-right mt-1">
                            Mot de passe oublié ?
                        </div>
                        <div class="w-100 d-flex justify-content-center align-content-center">
                            <vs-button class="my-3" type="gradient" @click="login()">Se connecter</vs-button>
                        </div>
                    </div>
                </vs-card>
            </vs-col>
            <vs-col class="d-flex p-0 bg-auth" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: "Login",

        data() {
            return {
                credentials: {
                    email: "",
                    password: ""
                }
            }
        },

        methods: {
            ...mapActions({
                attemptLogin: "auth/login"
            }),

            login() {
                this.attemptLogin(this.credentials)
                    .then(() => {
                        this.$router.push({ name: "dashboard" });
                    })
                    .catch(err => (this.errors = err.response.data));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bg-auth {
        background-size: cover;
        background-image: url('../../assets/images/background/auth-bg.jpg');
        background-position: 50%;
    }
</style>
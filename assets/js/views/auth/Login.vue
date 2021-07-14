<template>
    <div class="login">
        <vs-row justify="center" align="center" class="vh-100">
            <vs-col class="d-flex p-0" justify="center" lg="6" sm="6" xs="12">
                <vs-card class="w-50">
                    <template #title>
                        <h3 class="text-center">Connexion</h3>
                    </template>
                    <template #text>
                        <vs-input
                            class="mt-5 w-100"
                            border
                            label-placeholder="Adresse email"
                            v-model="$v.credentials.email.$model"
                            :danger="submitStatus === 'ERROR' && $v.credentials.email.$error"
                        >
                            <template #icon>
                                <i class='bx bx-envelope'></i>
                            </template>
                            <template #message-danger v-if="submitStatus === 'ERROR'">
                                <span v-if="!$v.credentials.email.required">L'adresse email est requise.</span>
                                <span v-if="!$v.credentials.email.email">L'adresse email doit être valide.</span>
                            </template>
                        </vs-input>
                        <div class="form-password">
                            <vs-input
                                class="mt-5 w-100"
                                border
                                label-placeholder="Mot de passe"
                                v-model="$v.credentials.password.$model"
                                :danger="$v.credentials.password.$error"
                                :type="showPassword ? 'text' : 'password'"
                                @keyup.enter.native="login()"
                            >
                                <template #icon>
                                    <i class="bx bx-lock-alt"></i>
                                </template>
                                <template #message-danger v-if="submitStatus === 'ERROR'">
                                    <span v-if="!$v.credentials.password.required">Le mot de passe est requis.</span>
                                </template>
                            </vs-input>
                            <i :class="showPassword ? 'far fa-eye' : 'far fa-eye-slash'" @click="showPassword = !showPassword"></i>
                        </div>
                        
                        <div class="w-100 text-right mt-1">
                            Mot de passe oublié ?
                        </div>
                        <div class="w-100 danger mt-1" v-if="errors">
                            {{ errors.message }}
                        </div>
                        <div class="w-100 d-flex justify-content-center align-content-center">
                            <vs-button
                                :loading="submitStatus === 'PENDING'"
                                class="my-3"
                                type="gradient"
                                @click="login()"
                            >Se connecter</vs-button>
                        </div>
                    </template>
                </vs-card>
            </vs-col>
            <vs-col class="d-flex p-0 bg-auth h-100" justify="center" lg="6" sm="6" xs="12">
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    import { required, email } from 'vuelidate/lib/validators';

    export default {
        name: "Login",

        data() {
            return {
                credentials: {
                    email: "",
                    password: ""
                },
                showPassword: false,
                submitStatus: null,
                errors: null
            }
        },

        validations: {
            credentials: {
                email: {
                    required, email
                },
                password: {
                    required
                }
            }
        },

        methods: {
            ...mapActions({
                attemptLogin: "auth/login"
            }),

            login() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR';
                } else {
                    this.submitStatus = 'PENDING'
                    this.attemptLogin(this.credentials)
                        .then(() => {
                            this.submitStatus = 'OK'
                            this.$router.push({ name: "dashboard" });
                        })
                        .catch(err => {
                            this.submitStatus = 'ERROR';
                            this.errors = err.response.data
                        });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .vs-input {
        width: 100%;
    }

    .form-password {
        position: relative;

        .far {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .bg-auth {
        background-size: cover;
        background-image: url('../../assets/images/background/auth-bg.jpg');
        background-position: 50%;
    }
</style>
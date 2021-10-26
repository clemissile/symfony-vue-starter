<template>
    <div class="login">
        <div class="row justify-content-center align-items-center w-100" style="height: 100vh;">
            <div class="col-md-6">
                <card class="w-50 mx-auto">
                    <h5 slot="header" class="title">Connexion</h5>
                    <div class="row">
                        <div class="col">
                            <base-input
                                :class="$v.credentials.email.$error ? 'has-danger' : ''"
                                placeholder="Adresse e-mail"
                                v-model="credentials.email"
                                addonLeftIcon="tim-icons icon-badge"
                            ></base-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col form-password">
                            <base-input
                                :class="$v.credentials.password.$error ? 'has-danger' : ''"
                                placeholder="Mot de passe"
                                v-model="credentials.password"
                                :type="showPassword ? 'text' : 'password'"
                                @keyup.enter.native="login()"
                                addonLeftIcon="tim-icons icon-key-25"
                            ></base-input>
                            <i :class="showPassword ? 'far fa-eye' : 'far fa-eye-slash'" @click="showPassword = !showPassword" v-if="!$v.credentials.password.$error"></i>
                        </div>
                    </div>

                    <div class="w-100 text-right mt-1">
                        Mot de passe oublié ?
                    </div>
                    <div class="w-100 mt-1" v-if="errors">
                        <p class="text-danger">
                            {{ errors.message }}
                        </p>
                    </div>

                    <base-button
                        slot="footer"
                        type="primary"
                        fill
                        :loading="submitStatus === 'PENDING'"
                        @click.native.prevent="login()"
                    >Se connecter</base-button>
                </card>
            </div>
            <div class="col-md-6 bg-auth h-100">
            </div>
        </div>
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
            this.errors = null
            
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR';
                this.errors = new ReferenceError('Adresse e-mail ou mot de passe invalide.');
            } else {
                this.submitStatus = 'PENDING'
                this.attemptLogin(this.credentials)
                    .then(() => {
                        this.submitStatus = 'OK'

                        this.$notify({
                            message: 'Connexion réussie Didier !',
                            icon: "tim-icons icon-check-2",
                            type: 'success'
                        })

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
        right: 30px;
        top: 50%;
        transform: translateY(-80%);
        z-index: 10;
        cursor: pointer;
    }
}

.bg-auth {
    background-size: cover;
    background-image: url('../../assets/images/background/auth-bg.jpg');
    background-position: 50%;
}
</style>
<template>
<div class="bg">
  <section>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="../assets/logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button type="is-link" tag="router-link" :to="{ path: '/signup' }" rounded>Cadastrar</b-button>
            <b-button type="is-link-link-light" tag="router-link" :to="{ path: '/login' }" rounded>Entrar</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="screen">
      <div class="card container">
        <div class="card-content">
          <div class="content">
            <section>
              <b-field label="Email">
                <b-input v-model="email" maxlength="30" rounded></b-input>
              </b-field>
              <b-field label="Senha">
                <b-input
                  v-model="password"
                  type="password"
                  password-reveal
                  rounded
                >
                </b-input>
              </b-field>
              <b-button @click="login" type="is-link" expanded rounded>Entrar</b-button>
              <footer class="group-link">
                <router-link to="/signup" class="link"
                  >Não possui cadastro?</router-link
                >
              </footer>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
   </div>
</template>
<script>
import api from '../services/axios'
export default {
  nome: "Login",
  data() {
    return {
      password: "",
      email: "",
    };
  },
  methods: {
    passwordIsEqual() {
      if (this.password !== this.passwordRepeated) {
        this.warningPasswordIsNotEqualDisplay = true;
      } else {
        this.warningPasswordIsNotEqualDisplay = false;
      }
    },
    clearDate() {
      this.birthday = null;
    },
    async login() {
      console.log(this.email, this.password);
      const response = await api.post(`/users/login`, {
        email: this.email,
        password: this.password,
      }).then(response =>{
        console.log(response)
        localStorage.setItem('token', response.data.id)
        this.$router.push({name : 'Dashboard'})
      }).catch(err=>{
        console.log(err)
      })
    },
  },
};
</script>
<style scoped>
.card {
  width: 40%;
  margin-top: 3%;
  margin-bottom: 2%;
}
.bg {
  height: 100vh;
  background-color: #CBE1FD;
}
</style>
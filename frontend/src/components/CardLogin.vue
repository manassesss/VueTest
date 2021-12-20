<template>
  <div class=" screen container">
    <div class="card container">
      <div class="card-content">
        <div class="content">
            <h1>Login</h1>
            <p>Seja Bem-Vindo!</p>
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
            <b-field>
                <router-link to="/signup" class="link"
                ><b-button rounded expanded type="is-ghost"
                  >Não possui cadastro?</b-button
                ></router-link
              >
            <b-button @click="login" type="is-info"  rounded expanded
              >Entrar</b-button
            >
            </b-field>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../services/axios";
import Navegation from "../components/Navegation.vue";

export default {
  nome: "Login",
  components: {
    Navegation,
  },
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
      const response = await api
        .post(`/users/login`, {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.id);
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.screen {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width:50%;
}
.bg-color{
    background-color: #004FC6;
}
.cont {
    height: 100%;
}
.card {
  margin-top: 3%;
  margin-bottom: 2%;
}
.bg {
  height: 100vh;
  background-color: #cbe1fd;
}
</style>
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
              <b-button
                type="is-link"
                tag="router-link"
                :to="{ path: '/signup' }"
                rounded
                >Cadastrar</b-button
              >
              <b-button
                type="is-link-link-light"
                tag="router-link"
                :to="{ path: '/login' }"
                rounded
                >Entrar</b-button
              >
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
      <div class="container div-limit collumns">
        <div class="card container">
          <div class="card-content">
            <div class="content">
              <section>
                <b-field label="Nome">
                  <b-input v-model="name" rounded></b-input>
                </b-field>
                <b-field label="Email">
                  <b-input v-model="email" type="email" maxlength="30" rounded>
                  </b-input>
                </b-field>
                <b-field label="CEP">
                  <b-input v-model="cep" maxlength="30" rounded></b-input>
                </b-field>
                <b-field label="Data de Nascimento">
                  <b-datepicker
                    v-model="birthday"
                    :show-week-number="showWeekNumber"
                    locale="pt-BR"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    :icon-right="birthday ? 'close-circle' : ''"
                    icon-right-clickable
                    @icon-right-click="clearDate"
                    trap-focus
                    rounded
                  >
                  </b-datepicker>
                </b-field>
                <b-field label="Senha">
                  <b-input
                    v-model="password"
                    type="password"
                    password-reveal
                    maxlength="30"
                    rounded
                  ></b-input>
                </b-field>
                <b-field label="Repita a senha">
                  <b-input
                    v-model="passwordRepeated"
                    type="password"
                    @blur="passwordIsEqual"
                    :message="textPassword"
                    password-reveal
                    maxlength="30"
                    rounded
                  ></b-input>
                  <div class="warning" v-if="warningPasswordIsNotEqualDisplay">
                    As senhas informadas devem ser iguais
                  </div>
                </b-field>
                <b-button @click="register" type="is-link" expanded rounded
                  >Cadastrar</b-button
                >
                <footer class="group-link">
                  <router-link to="/login" class="link"
                    >Já possui cadastro?</router-link
                  >
                </footer>
              </section>
            </div>
          </div>
        </div>
      </div>

    </section>
    <b-modal v-model="isCardModalActive" :width="700" scroll="keep">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title"> Cadastrado com sucesso! Faça seu login</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <footer class="card-footer">
          <b-button
            class="card-footer-item"
            type="is-danger"
            tag="router-link"
                :to="{ path: '/login' }"
            >Ok!</b-button
          >
        </footer>
      </div>
    </b-modal>

  </div>
</template>
<script>
import api from "../services/axios";
export default {
  name: "SignUp",
  data() {
    return {
      password: "",
      passwordRepeated: "",
      warningPasswordIsNotEqualDisplay: false,
      textPassword: "A senha não é igual",
      name: "",
      email: "",
      showWeekNumber: false,
      isCardModalActive: false,
      birthday: new Date(),
      cep: "",
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
    async register() {
      const response = await api.post(`/users`, {
        name: this.name,
        email: this.email,
        birth: this.birthday,
        cep: this.cep,
        password: this.password,
      })
    },
  },
};
</script>
<style>
.card {
  width: 60%;
  margin-top: 3%;
  margin-bottom: 2%;
}
.warning {
  font-size: 12px;
  color: red;
}
.div-limit {
  padding: 5%;
}
.bg {
  background-color: #cbe1fd;
}
</style>
<template>
  <div class="bg">
    <section>
      <b-navbar>
        <template #brand>
          <b-navbar-item>
            <img
              src="../assets/logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item href="/dashboard"> Consultas </b-navbar-item>
        </template>
        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a href="/login" class="button is-primary">
                <strong>Logout</strong>
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
      <div class="container collumns">
        <div class="card container">
          <b-image
            class="img"
            :src="require('@/assets/login.png')"
            alt="The Buefy Logo"
            ratio="601by235"
            :rounded="rounded"
          ></b-image>
          <div class="card-content">
            <div class="content">
              <section class="section">
                <h1 class="title">Marcar Consulta</h1>
                <h2>Informações do paciente</h2>
                <b-field label="Name">
                  <b-input v-model="patient" rounded></b-input>
                </b-field>
                <b-field label="Email">
                  <b-input type="email" maxlength="30" rounded> </b-input>
                </b-field>
                <b-field label="Telefone">
                  <b-input maxlength="30" rounded></b-input>
                </b-field>
                <h2>Informações da Consulta</h2>
                <b-field label="Especialidade">
                  <b-select
                    v-model="field"
                    placeholder="Select a character"
                    rounded
                  >
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Oftalmologia">Oftalmologia</option>
                  </b-select>
                </b-field>
                <b-field label="Médico">
                  <b-select
                    v-model="doctor"
                    placeholder="Select a character"
                    rounded
                  >
                    <option value="Marcelo Maia">Marcelo Maia</option>
                    <option value="João Feitosa">João Feitosa</option>
                    <option value="Vanessa Matinha">Vanessa Matinha</option>
                  </b-select>
                </b-field>
                <b-field label="Horário da Consulta">
                  <b-datetimepicker
                    icon="calendar-today"
                    locale="pt-BR"
                    editable
                    rounded
                  >
                  </b-datetimepicker>
                </b-field>
                <b-field>
                  <b-button tag="router-link" :to="{ path: '/dashboard' }" expanded rounded type="is-danger">Cancelar</b-button>
                <b-button expanded rounded type="is-succ  ess"
                  >Confirmar</b-button
                >
                </b-field>
              </section>
            </div>
          </div>
        </div>
      </div>
   </section>
   
<b-modal v-model="showModal" :width="700" scroll="keep">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Consulta marcada com sucesso!</p>
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
                :to="{ path: '/dashboard' }"
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
  name: "MakeAppointement",
  data() {
    return {
      listDoctors: [],
      patient: "",
      doctor: "",
      showWeekNumber: false,
      showModal: false,
      schedule: new Date(),
      field: "",
    };
  },
  async created() {
    api.get(`/doctors`).then((res) => {
      console.log(res)
      this.listDoctors = res.data;
    });
  },
  method: {
    async register() {
      console.log("oi")
      const response = await api.post(`/users`, {
        name: this.name,
        email: this.email,
        birth: this.birthday,
        cep: this.cep,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
.card {
  height: 80%;
  width: 80%;
  margin-top: 1%;
  margin-bottom: 10%;
}
.img {
  padding: 2%;
}
.bg {
  background-color: #dadada;
}
</style>
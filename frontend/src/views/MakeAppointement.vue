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
              <b-button
                type="is-link"
                tag="router-link"
                :to="{ path: '/login' }"
                rounded
                >Sair</b-button
              >
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
              <h1 class="title">Remarcar Consulta</h1>
              <h2>Informações do paciente</h2>
              <b-field label="Nome do Paciente">
                <b-input v-model="new_patient"></b-input>
              </b-field>
              <b-field label="Email">
                <b-input></b-input>
              </b-field>
              <b-field label="Telefone">
                <b-input></b-input>
              </b-field>
              <h2>Informações da Contulta</h2>
              <b-field label="Especialidade">
                <b-select v-model="new_field" placeholder="Selecione" rounded>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Pediatria">Pediatria</option>
                  <option value="Oftalmologia">Oftalmologia</option>
                </b-select>
              </b-field>
              <b-field label="Médico">
                <b-select v-model="new_doctor" placeholder="Selecione" rounded>
                  <option value="Marcelo Maia">Marcelo Maia</option>
                  <option value="João Feitosa">João Feitosa</option>
                  <option value="Vanessa Matinha">Vanessa Matinha</option>
                </b-select>
              </b-field>
              <b-field label="Select datetime">
                <b-datetimepicker
                  v-model="new_schedule"
                  rounded
                  placeholder="Click to select..."
                  icon="calendar-today"
                  horizontal-time-picker
                >
                </b-datetimepicker>
              </b-field>
              <b-field>
                <b-button
                  tag="router-link"
                  :to="{ path: '/dashboard' }"
                  expanded
                  rounded
                  type="is-danger"
                  >Cancelar</b-button
                >
                <b-button @click="register" expanded rounded type="is-success"
                  >Confirmar</b-button
                >
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal v-model="isCardModalActive" :width="700" scroll="keep">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Consulta marcada com sucesso!</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div class="card-content">
          <div class="content">
            A consulta de {{ new_patient }} foi marcada!
          </div>
        </div>
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
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      labelPosition: "on-border",
      new_patient: "",
      new_doctor: "",
      new_field: "",
      new_schedule: new Date(),
      isCardModalActive: false,
    };
  },
  methods: {
    async register() {
      const response = await api.post(`/appointments/`, {
        patient: this.new_patient,
        doctor: this.new_doctor,
        schedule: this.new_schedule,
        field: this.new_field,
      });
      this.isCardModalActive = true;
    },
  },
};
</script>
<style scoped>
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
  background-color: #dadada;
}
</style>
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
      <div class="div-cont">
        <h1 class="title">Consultas Marcadas</h1>
      </div>
      <div class="div-table content">
        <div class="content">
          <b-button
            type="is-link"
            tag="router-link"
            :to="{ path: '/makeappointement' }"
            expanded
            rounded
            >Marcar uma Consulta</b-button
          >
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Especialidade</th>
              <th>Doutor</th>
              <th>Horario</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="appointment in appointments" :key="appointment.id">
              <td>{{ appointment.patient }}</td>
              <td>{{ appointment.field }}</td>
              <td>{{ appointment.doctor }}</td>
              <td>{{ appointment.schedule }}</td>
              <td>
                <b-button class="button is-warning" tag="router-link"
                :to="{ path: '/edit' }">Remarcar</b-button> |
                <b-button
                  @click="takeIdToDelete(appointment.id)"
                  class="button is-danger"
                >
                  Cancelar
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <b-modal v-model="isCardModalActive" :width="700" scroll="keep">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Deletar Consulta</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div class="card-content">
          <div class="content">Tem certeza que deseja deletar a Consulta?</div>
        </div>
        <footer class="card-footer">
          <b-button
            class="card-footer-item"
            type="is-danger"
            @click="isCardModalActive = false"
            >Cancelar</b-button
          >
          <b-button
            class="card-footer-item"
            @click="deleteAppointment"
            type="is-success"
            >Confirmar</b-button
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
      appointments: [],
      isCardModalActive: false,
      deleteIdAppointment: -1,
    };
  },
  created() {
    api
      .get(`/appointments`)
      .then((res) => {
        console.log(res);
        this.appointments = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    takeIdToDelete(id) {
      (this.deleteIdAppointment = id), (this.isCardModalActive = true);
    },
    deleteAppointment() {
      api.delete(`/appointments/` + this.deleteIdAppointment);
      this.isCardModalActive = false;
      window.location.reload();
    },
  },
};
</script>
<style scoped>
.div-table {
  padding: 5%;
}
.div-cont {
  padding: 2%;
}
.bg {
  height: 100vh;
  background-color: #dadada;
}
</style>
<template>
  <section>
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
                <router-link :to="{name: 'EditAppointment', params:{id:appointment.id}}"><button class="button is-warning">Remarcar</button></router-link>  
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
  </section>
</template>
<script>
import api from "../services/axios";
export default {
  data() {
    return {
      appointments: [],
      isCardModalActive: false,
      deleteIdAppointment: -1,
      cols : ["Paciente", "Especialidade", "Doutor", "Horario", "Ações"]
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
    takeId(id) {
      localStorage.setItem("id_Edit", id);
    },
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
</style>
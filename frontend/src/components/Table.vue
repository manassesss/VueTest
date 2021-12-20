<template>
<div>
  <section>
      <table class="table container">
          <thead>
            <tr class="bg">
              <th class="color">Paciente</th>
              <th class="color">Especialidade</th>
              <th class="color">Doutor</th>
              <th class="color">Horario</th>
              <th class="color">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataList" :key="data.id">
              <td>{{ data.patient }}</td>
              <td>{{ data.field }}</td>
              <td>{{ data.doctor }}</td>
              <td>{{ new Date(data.schedule).toLocaleDateString() }}</td>
              <td>
                <router-link :to="{name: 'EditAppointment', params:{id:data.id}}"><b-button class="button is-warning" rounded >Remarcar</b-button></router-link>  
                <b-button
                  @click="takeIdToDelete(data.id)"
                  class="button is-danger div-button"
                  rounded
                >
                  Cancelar
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
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
  props: {
    dataList : Array
  },
  data() {
    return {
      isCardModalActive: false,
      deleteIdAppointment: -1,
      cols : ["Paciente", "Especialidade", "Doutor", "Horario", "Ações"]
    };
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
.div-button {
  margin-left: 2%;
}
.bg {
  background-color: #CBE1FD;
}
.color {
    color: #568BD7;
}
</style>
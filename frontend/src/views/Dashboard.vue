<template>
  <div class="bg">
    <section>
      <NavegationLogged/>
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
        <Table :dataList="appointments"/>
      </div>
    </section>
    
  </div>
</template>
<script>
import api from "../services/axios";
import NavegationLogged from '../components/NavegationLogged.vue'
import Table from '../components/Table.vue'
export default {
  components: {
    Table,
    NavegationLogged
  },
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
<template>
  <div class="bg">
    <section>
      <NavegationLogged />
      <div class="div-cont container">
        <h1 class="title is-2 text color container">Consultas Marcadas</h1>
      </div>
      <div class="div-table">
        <div class="content">
          <b-button
            class="text i-large"
            type="is-info"
            tag="router-link"
            :to="{ path: '/makeappointement' }"
            expanded
            rounded
            >Marcar uma Consulta</b-button
          >
        </div>

        <TableN :dataList="appointments" />
      </div>
    </section>
  </div>
</template>
<script>
import api from "../services/axios";
import NavegationLogged from "../components/NavegationLogged.vue";
import TableN from "../components/TableN.vue";
export default {
  components: {
    TableN,
    NavegationLogged,
  },
  data() {
    return {
      appointments: [],
      deleteIdAppointment: -1,
      cols: ["Paciente", "Especialidade", "Doutor", "Horario", "Ações"],
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
};
</script>
<style scoped>
.text {
  font-weight: 700;
}
.div-table {
  margin: 5%;
}
.div-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}
.text {
  font-weight: 700;
}
.color {
  color: #568bd7;
}
.bg {
  background-color: #fcfcfc;
}
</style>
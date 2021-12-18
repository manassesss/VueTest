<template>
  <div class="about">
    <Table/>
  </div>
</template>
<script>
import Table from '../components/Table.vue'
import api from "../services/axios";

export default({
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
  components: {
    Table
  }
})
</script>


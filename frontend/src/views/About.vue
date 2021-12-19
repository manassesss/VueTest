<template>
  <div class="about">
    <NavegationLogged/>
    <Table :dataList="appointments"/>
  </div>
</template>
<script>
import Table from '../components/Table.vue'
import NavegationLogged from '../components/NavegationLogged.vue'
import api from "../services/axios";

export default({
  data() {
    return {
      appointments: [],
      isCardModalActive: false,
      deleteIdAppointment: -1,
      cols : [{name: "Consultas", link:"/dashboard"}, {name: "Médicos", link:'/'}],
      buttons: [{name: "Cadastrar", link:'/signup', css:'is-link'}, {name: "Entrar", link:'/login', css:'is-link-light'},]
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
    Table,
    NavegationLogged
  }
})
</script>


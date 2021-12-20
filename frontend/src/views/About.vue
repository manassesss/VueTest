<template>
  <div class="about">
    <NavegationLogged/>
    <TableN :dataList="appointments"/>
    <div v-for="doctor in doctors" :key="doctor.id">
      <CardProfile :name="doctor.name" :field="doctor.field" :photo="doctor.photo"/>
      </div>
  </div>
</template>
<script>
import Table from '../components/Table.vue'
import TableN from '../components/TableN.vue'
import NavegationLogged from '../components/NavegationLogged.vue'
import api from "../services/axios";
import CardProfile from "../components/CardProfile.vue"

export default({
  data() {
    return {
      appointments: [],
      doctors: [],
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

      api
      .get(`/doctors`)
      .then((res) => {
        console.log(res);
        this.doctors = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    TableN,
    Table,
    NavegationLogged,
    CardProfile
  }
})
</script>


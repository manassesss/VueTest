<template>
  <div class="bg">
    <section>
      <NavegationLogged/>
      <div class="container collumns">
        <div class="card container">
          <b-image
            class="img"
            :src="require('@/assets/remake.png')"
            alt="The Buefy Logo"
            ratio="601by235"
            :rounded="rounded"
          ></b-image>
          <div class="card-content">
            <div class="content">
              <h1 class="title">Marcar Consulta</h1>
              <h2>Informações do paciente</h2>
              <b-field label="Nome do Paciente">
                <b-input v-model="new_patient" rounded></b-input>
              </b-field>
              <b-field label="Email">
                <b-input rounded></b-input>
              </b-field>
              <b-field label="Telefone">
                <b-input rounded></b-input>
              </b-field>
              <h2>Informações da Consulta</h2>
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
              <b-field label="Especialidade">
                <b-select v-model="new_field" placeholder="Selecione" rounded>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Pediatria">Pediatria</option>
                  <option value="Oftalmologia">Oftalmologia</option>
                </b-select>
              </b-field>
              <b-field label="Médico">
                <b-select v-model="new_doctor" placeholder="Selecione" rounded>
                  <option v-for="d in doctors"
                    :value="d.name"
                    :key="d.id"> {{ d.name }} ( {{ d.field }})</option>
                </b-select>
              </b-field>
           
              <b-field >
                <b-button 
                  tag="router-link"
                  :to="{ path: '/dashboard' }"
                  expanded
                  rounded
                  >Cancelar</b-button
                >
                <b-button class="div-button" @click="update" expanded rounded type="is-success"
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
          <p class="card-header-title">Consulta remarcada com sucesso!</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div class="card-content">
          <div class="content">
            A consulta de {{ new_patient }} foi remarcada!
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
import NavegationLogged from "../components/NavegationLogged.vue"
export default {
  components: {
    NavegationLogged
  },
  async created() {
    
    await api
      .get(`/appointments/${this.$route.params.id}`)
      .then((res) => {
        console.log(res.data);
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
  data() {
    return {
      selected: new Date(),
      doctors: [],
      showWeekNumber: false,
      labelPosition: "on-border",
      new_patient: "",
      new_doctor: "",
      new_field: "",
      new_schedule: new Date(),
      isCardModalActive: false,
      id: this.$route.params.id,
    };
  },
  methods: {
    async update() {
      const response = await api.put(`/appointments/${this.id}`, {
        patient: this.new_patient,
        doctor: this.new_doctor,
        schedule: this.new_schedule,
        field: this.new_field,
        id: this.id,
      })
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
.div-button {
  margin-left: 2%;
}
.div-limit {
  padding: 5%;
}
.bg {
  background-color: #CBE1FD;
}

</style>
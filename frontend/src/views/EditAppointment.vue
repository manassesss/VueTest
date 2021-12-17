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
          <div class="card-content">
            <div class="content">
                <h1 class="title">Remarcar Consulta</h1>
                <h2>Informações do paciente</h2>
              <b-field label="Nome do Paciente">
                <b-input></b-input>
              </b-field>
              <b-field label="Email">
                <b-input></b-input>
              </b-field>
              <b-field label="Telefone">
                <b-input></b-input>
              </b-field>
              <h2>Informações da Contulta</h2>
              <b-field label="Especialidade">
                <b-select placeholder="Selecione" rounded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
              <b-field label="Médico">
                <b-select placeholder="Selecione" rounded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
              <b-field label="Select datetime">
                <b-datetimepicker
                  rounded
                  placeholder="Click to select..."
                  icon="calendar-today"
                  @icon-right-click="clearDateTime"
                  :locale="locale"
                  :datepicker="{ showWeekNumber }"
                  :timepicker="{ enableSeconds, hourFormat }"
                  horizontal-time-picker
                >
                </b-datetimepicker>
              </b-field>
              <b-field>
                <b-button tag="router-link" :to="{ path: '/dashboard' }" expanded rounded type="is-danger">Cancelar</b-button>
                <b-button expanded rounded type="is-succ  ess"
                  >Confirmar</b-button
                >
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      selected: new Date(),
      showWeekNumber: false,
      labelPosition: "on-border",
    };
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
<template>
  <div>
    <section>
      <b-table paginated  per-page=10 :data="isEmpty ? [] : dataList" :mobile-cards="hasMobileCards ">
        <b-table-column
        class="color"
          field="paciente"
          label="Paciente"
          numeric
          v-slot="props"
        >
          {{ props.row.patient }}
        </b-table-column>

        <b-table-column
        class="color"
          field="especialidade"
          label="Especialidade"
          numeric
          v-slot="props"
        >
          {{ props.row.field }}
        </b-table-column>
        <b-table-column
        class="color"
          field="medico"
          label="Médico"
          numeric
          v-slot="props"
        >
          {{ props.row.doctor }}
        </b-table-column>
        <b-table-column field="date" label="Date" v-slot="props">
          <span class="tag is-success color">
            {{ new Date(props.row.schedule).toLocaleDateString() }}
          </span>
        </b-table-column>
        <b-table-column field="acoes" label="Ações"  v-slot="props">
          <router-link
            :to="{ name: 'EditAppointment', params: { id: props.row.id } }"
            ><b-button class="button is-warning" rounded
              >Remarcar</b-button
            ></router-link
          >
          <b-button
            @click="takeIdToDelete(props.row.id)"
            class="button is-danger div-button"
            rounded
          >
            Cancelar
          </b-button>
        </b-table-column>
        <template #empty>
          <div class="has-text-centered">No records</div>
        </template>
      </b-table>
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
    dataList: Array,
  },
  data() {
    return {
      isCardModalActive: false,
      deleteIdAppointment: -1,
      cols: ["Paciente", "Especialidade", "Doutor", "Horario", "Ações"],
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
  background-color: #cbe1fd;
}
.color {
  color: #568bd7;
}
</style>
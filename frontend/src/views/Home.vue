<template>
  <div>
    <section>
      <Navegation />
      <Carrousel />
    </section>
    <section class="section container widescreen is-fullhd is-max-desktop">
        <h1 class="title is-3 text color">Como Funciona nosso sistema?!</h1>
        <p class="title is-6 text color">Aqui você pode AGENDAR, VERIFICAR, REMARCAR E CANCELAR as consultas dos seus clientes</p>
        <div class="space" v-for="card in cards" :key="card">
            <Card :title="card.name" :content="card.content"/>
        </div>
    </section>  
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import Navegation from "../components/Navegation.vue";
import Card from "../components/Card.vue"

export default {
  components: {
    Carrousel,
    Navegation,
    Card,
  },
  data() {
      return {
          cards: [
              {
                  name: "AGENDAR CONSULTAS",
                  content: "Marque consultas em qualquer momento através do nosso sistema de agendamento de consultas"
              },
              {
                  name: "REAGENDAR CONSULTAS",
                  content: "Reagende consultas em qualquer momento através do nosso sistema de agendamento de consultas"
              },
              {
                  name: "CANCELAR CONSULTAS",
                  content: "Cancele consultas em qualquer momento através do nosso sistema de agendamento de consultas"
              }
          ]
      }
  }
};
</script>

<style scoped>
.text {
  font-weight: 700;
}
.color {
    color: #568BD7;
}
.space {
    padding: 2%;
}
.direction {
    display: flex;
    flex-direction: row;
}
</style>
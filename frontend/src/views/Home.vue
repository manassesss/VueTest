<template>
  <section>
    <Navegation />
    <Carrousel />
  </section>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import Navegation from "../components/Navegation.vue";
export default {
  components: {
    Carrousel,
    Navegation,
  },
};
</script>
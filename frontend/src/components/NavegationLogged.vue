<template>
  <b-navbar centered shadow>
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
</template>

<script>
export default {
};
</script>

<style scoped>
</style>

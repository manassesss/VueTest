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
      <b-navbar-item class="text color" href="/dashboard">
        Consultas
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            class="text"
            type="is-info"
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
export default {};
</script>

<style scoped>
.text {
  font-weight: 700;
}
.color {
  color: #568bd7;
}
</style>

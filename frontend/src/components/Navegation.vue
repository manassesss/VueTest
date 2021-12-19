<template>
   <b-navbar centered shadow>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="../assets/logo.png"
            alt="MedClub Test"
          />
        </b-navbar-item>
      </template>
       <template #start>
          <b-navbar-item class="text-button" href="/"> Home </b-navbar-item>
          <b-navbar-item class="text-button" href="/about"> Sobre nós </b-navbar-item>
        </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button class="text-button" type="is-info" tag="router-link" :to="{ path: '/signup' }" rounded>Cadastrar</b-button>
            <b-button class="text-button" type="is-info" tag="router-link" :to="{ path: '/login' }" rounded outlined>Entrar</b-button>
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
.text-button {
  font-weight: 700;
}
</style>

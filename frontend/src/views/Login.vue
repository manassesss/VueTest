<template>
<div class="bg">
    <Navegation/>
    <div class="container">
      <Login/>
    </div>
    
   </div>
</template>
<script>

import Navegation from '../components/Navegation.vue'
import Login from '../components/CardLogin.vue'
export default {
  nome: "Login",
  components: {
    Navegation,
    Login
  },
};
</script>
<style scoped>
.card {
  width: 40%;
  margin-top: 3%;
  margin-bottom: 2%;
}
.screen {
  justify-content: center;
  align-items: center;
}
.bg {
  height: 100vh;
  background-color: #CBE1FD;
}
</style>
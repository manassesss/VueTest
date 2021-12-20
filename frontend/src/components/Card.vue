<template>
    <div class="card container bg">
  <div class="card-content">
    <p class="title is-4 color">
      {{ title }}
    </p>
    <p class="subtitle color">
      {{ content }}
    </p>
  </div>
</div>
</template>

<script>

export default ({
    props: {
        title: String,
        content: String,
    }
})
</script>

<style scoped>
.bg {
    padding: 2%;
    background-color: #568BD7;
}
.color {
    color: white;
}
</style>

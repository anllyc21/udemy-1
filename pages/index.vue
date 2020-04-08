<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        udemy-1
      </h1>
      <h2 class="subtitle">
        My super-excellent Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  // para tema del Seo,  lo podemos agregar a cualquier pagina
  head: {
    title: 'Esta es mi pagina de inicio',
    meta: [
      {hid: 'description', name: 'description', content: 'Esta es la descripcion de la pagina de inicio '}
    ]
  }
}
</script>

<style>

</style>

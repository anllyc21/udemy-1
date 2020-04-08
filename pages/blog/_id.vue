<template>
  <div class="container">
    <h1>{{articulo.title}}</h1>
    <p class="small">{{articulo.nombreAutor}}</p>
    <p>{{articulo.body}}</p>
    <nuxt-link to="/blog" class="btn btn-primary">Atras</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data(){
    return{
      articulo: ''
    }
  },

  // async created(){

  //   try{
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
  //     this.articulo = res.data;
  //     // console.log(res.data)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}){
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      const articulo = res.data;
      // console.log(articulo)
      const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)

      articulo.nombreAutor = resAutor.data.name
      
      return {articulo}

    } catch (error) {
      
      return {error: error}
    }

  }

}
</script>

<style>

</style>
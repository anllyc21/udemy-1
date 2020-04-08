<template>
  <div class="container mt-5">
      <!-- <div class="row">
        <div class="col-md-3" v-for="(item, index) in articulos" :key="index">
          <h2><nuxt-link :to="`/blog/${item.id}`" >{{item.nombre}}</nuxt-link></h2>
        </div>
      </div> -->
      <div class="card my-2" v-for="(item, index) in articulos" :key="index">
        <div class="card-body">
          <nuxt-link :to="`/blog/${item.id}`" >{{item.title}}</nuxt-link>
          <p>{{item.body}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      // De manera estatica
      // articulos: [
      //   {id: 1, nombre: 'Articulo #1'},
      //   {id: 2, nombre: 'Articulo #2'},
      //   {id: 3, nombre: 'Articulo #3'},
      //   {id: 4, nombre: 'Articulo #4'},
      // ]
      articulos: []
    }
  },
  
  // Este metodo se va cargar ni bien carga nuestro sitio web, async(asincrono)
  async created(){

    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      // console.log(res.data);
      this.articulos = res.data;
    }catch(error){
      console.log(error)
    }
 
  }
}
</script>

<style>

</style>
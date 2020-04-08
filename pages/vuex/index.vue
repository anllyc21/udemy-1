<template>
    <div class="container">
        <h1>Vuex</h1>
        <form @submit.prevent="agregarTarea(tarea)">
            <input type="text" class="form-control mb-2" v-model="tarea">
            <b-button type="submit">Agregar</b-button>
        </form>
        <ul>
            <li v-for="(item, index) in tareas" :key="index">
                {{item.id}} - {{item.nombre }}
                <b-button class="btn-sm btn-warning" :to="`/vuex/${item.id}`" >Editar</b-button>
                <b-button class="btn-sm btn-danger" @click="eliminarTarea(item)">Eliminar</b-button>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
import { db } from '@/plugins/firebase.js'
// para maperar las rutas y poder mostrarlo en la web
import { mapState, mapActions} from 'vuex'

export default {
    // created(){
    //     db.collection('tareas').get()
    //         .then( query =>{
    //             query.forEach(element => {
    //                 console.log(element.data());
    //             });
    //         })
    // }

    // =================================0000

    // fetch({state}){
    //    return db.collection('tareas').get()
    //         .then(query => {
    //             const tareas = []
    //             query.forEach(element => {
    //                 // console.log(element.data())
    //                 tareas.push(element.data())
    //             });

    //             return store.commit("setTareas", tareas)
    //         })
    //         .catch(function(error){
    //             console.log("Error getting documents: ", error);
    //         })

            
    // }

    computed: {
        ...mapState(['tareas'])
    },

    methods:{
        ...mapActions(['agregarTarea', 'eliminarTarea'])
    },
    data(){
        return{
            tarea: ''
        }
    }

}
</script>
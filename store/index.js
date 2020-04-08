import { db } from "@/plugins/firebase.js"

export const state  = () => ({
    // tareas disponibles en toda la app
    tareas: '',
    tarea: ''
})

export const mutations = {
    //  con las mutaciones, llenamos la tienda
    setTareas(state, payload){
        state.tareas = payload
    },

    setTarea(state, payload){
        // agregando una tarea
        state.tareas.push(payload)
    },

    deleteTarea(state,payload){
        // eliminando la tarea dentro del array
        const index = state.tareas.findIndex(item => item.id === payload.id );
        state.tareas.splice(index,1);
    },

    updateTarea(state,payload){
        const index = state.tareas.findIndex(item => item.id === payload.id );
        state.tareas[index].nombre = payload.nombre
    },

    setTareaIndividual(state,payload){
        state.tarea= payload
    }

}

export const actions = {
    // hacemos el llamado a la base de datos
    nuxtServerInit({commit}, {req}){
        return db.collection('tareas').get()
            .then(query=>{
                const tareas = []
                query.forEach(element =>{
                    let tarea = element.data();
                    tarea.id = element.id
                    tareas.push(tarea)
                });
               return commit('setTareas', tareas);
            })
            .catch(function(error){
                console.log("Error getting documents: ", error);
             })
            
    },

    // Agregando tarea a Firebase
   async agregarTarea({commit}, payload){
        try {
            const doc = await db.collection('tareas').add({
                nombre: payload,
                fecha: new Date()
            })
            commit('setTarea', {nombre: payload, id: doc.id})

        } catch (error) {
            console.log(error)
        }
    },

    // Eliminando una tarea de Firebase
    eliminarTarea({commit}, payload){
        db.collection("tareas").doc(payload.id).delete().then(function(){
            console.log("Document succesflly deleted!")
            commit('deleteTarea', payload)
        }).catch(function(error){
            console.log("Error removing document: ", error)
        })
    },

    // Editar una tarea
    editarTarea({commit},payload){
        db.collection('tareas').doc(payload.id).update({
            nombre: payload.nombre
        })
        .then(() => {
            console.log('Tarea Editada');
            commit('updateTarea', payload)
            this.app.router.push('/vuex');
        })
        .catch( e => {
            console.log(e);
        })
    }
} 
<template>
  <div>
    <div class="row">
      <div class="col">
        <form>
          <h2>Cadastre</h2>
          <input type="text" placeholder="nome" class="w-75 mb-1" v-model="newName">
          <input type="email" placeholder="email" class="w-75 mb-1" v-model="newEmail">
          <input type="number" placeholder="cpf" class="w-75 mb-1" v-model="newCpf">
          <input type="number" placeholder="numero" class="w-75 mb-1" v-model="newNumber">
          <button type="button" class="btn btn-success w-50" @click="addcliente()">Adicionar</button>
        </form>
      </div>
      <div class="col">
      <form>
        <h2>Altere</h2>
        <input type="text" placeholder="nome" class="w-75 mb-1" v-model="oldName">
        <input type="email" placeholder="email" class="w-75 mb-1" v-model="oldEmail">
        <input type="number" placeholder="cpf" class="w-75 mb-1" v-model="oldCpf">
        <input type="number" placeholder="numero" class="w-75 mb-1" v-model="oldNumber">
      </form>
      </div>
    </div>
    <div v-if="clientes" v-for="cliente in clientes" class="mt-2 pl-5 pr-5">
      <div class="row">
        <div class="col"> 
          <p>Nome:{{cliente.name}}</p>
        </div>
        <div class="col">
          <p>Email:{{cliente.email}}</p>
        </div>
        <div class="col">
          <p>Cpf:{{cliente.cpf}}</p>
        </div>
        <div class="col">
          <p>Numero:{{cliente.numero}}</p>
        </div>
        <div class="col-12">
          <button class="btn btn-danger" @click="removeClient(cliente)">Deletar</button>
          <button class="btn btn-info" @click="updateClient(cliente)" id="top">Atualizar</button>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDFApfmoF4f7svSQUwtuh-k27R4Lywjmms",
  authDomain: "qualicorp-e6faa.firebaseapp.com",
  databaseURL: "https://qualicorp-e6faa.firebaseio.com",
  projectId: "qualicorp-e6faa",
  storageBucket: "qualicorp-e6faa.appspot.com",
  messagingSenderId: "311477308734",
  appId: "1:311477308734:web:2d81a4037fe9f24867b06f",
  measurementId: "G-LH3XYRJQDH"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import firebase from 'firebase'
const db = firebase.firestore()

export default {
  data: function(){
    return {
      clientes: [],
      newName: null,
      newEmail: null,
      newCpf: null,
      newNumber: null,
      oldName: null,
      oldEmail: null,
      oldCpf: null,
      oldNumber: null
    }
  },
  firestore: {
    clientes: db.collection('clientes')
  },
  methods: {
    addcliente() {
      db.collection('clientes').add({
      name: this.newName,
      email: this.newEmail,
      cpf: this.newCpf,
      numero: this.newNumber
      })
      this.newName = null
      this.newEmail = null
      this.newCpf = null
      this.newNumber = null
    },
    removeClient(cliente) {
      db.collection('clientes').doc(cliente.id).delete()
    },
    updateClient(cliente) {
      db.collection("clientes").doc(cliente.id).update({
      name: this.oldName,
      email: this.oldEmail,
      cpf: this.oldCpf,
      numero: this.oldNumber
      })
      this.oldName = null
      this.oldEmail = null
      this.oldCpf = null
      this.oldNumber = null
    }
  },
  created() {
    // this unbinds any previously bound reference
    this.$bind('clientes', db.collection('clientes')).then(clientes => {
      this.clientes === clientes
      // clientes are ready to be used
      // if it contained any reference to other document or collection, the
      // promise will wait for those references to be fetched as well

      // you can unbind a property anytime you want
      // this will be done automatically when the component is destroyed
      //this.$unbind('clientes')
    })
  },
}
</script>
<style scoped>
footer {
  text-align: center;
  margin-top: .2em;
  padding: .3em;
  background-color: rgb(23, 25, 158);
  color: white;
  position:absolute;
  bottom:0;
  width:100%;
}
a {
  color: white;
}
</style>
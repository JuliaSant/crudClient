webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),l=a("kxiW"),i=a.n(l);i.a.initializeApp({apiKey:"AIzaSyDFApfmoF4f7svSQUwtuh-k27R4Lywjmms",authDomain:"qualicorp-e6faa.firebaseapp.com",databaseURL:"https://qualicorp-e6faa.firebaseio.com",projectId:"qualicorp-e6faa",storageBucket:"qualicorp-e6faa.appspot.com",messagingSenderId:"311477308734",appId:"1:311477308734:web:2d81a4037fe9f24867b06f",measurementId:"G-LH3XYRJQDH"});var o=i.a.firestore(),s={data:function(){return{clientes:[],newName:null,newEmail:null,newCpf:null,newNumber:null,oldName:null,oldEmail:null,oldCpf:null,oldNumber:null}},firestore:{clientes:o.collection("clientes")},methods:{addcliente:function(){o.collection("clientes").add({name:this.newName,email:this.newEmail,cpf:this.newCpf,numero:this.newNumber}),this.newName=null,this.newEmail=null,this.newCpf=null,this.newNumber=null},removeClient:function(e){o.collection("clientes").doc(e.id).delete()},updateClient:function(e){o.collection("clientes").doc(e.id).update({name:this.oldName,email:this.oldEmail,cpf:this.oldCpf,numero:this.oldNumber}),this.oldName=null,this.oldEmail=null,this.oldCpf=null,this.oldNumber=null}},created:function(){var e=this;this.$bind("clientes",o.collection("clientes")).then(function(t){e.clientes})}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",[a("h2",[e._v("Cadastre")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],staticClass:"w-75 mb-1",attrs:{type:"text",placeholder:"nome"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newEmail,expression:"newEmail"}],staticClass:"w-75 mb-1",attrs:{type:"email",placeholder:"email"},domProps:{value:e.newEmail},on:{input:function(t){t.target.composing||(e.newEmail=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCpf,expression:"newCpf"}],staticClass:"w-75 mb-1",attrs:{type:"number",placeholder:"cpf"},domProps:{value:e.newCpf},on:{input:function(t){t.target.composing||(e.newCpf=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newNumber,expression:"newNumber"}],staticClass:"w-75 mb-1",attrs:{type:"number",placeholder:"numero"},domProps:{value:e.newNumber},on:{input:function(t){t.target.composing||(e.newNumber=t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn btn-success w-50",attrs:{type:"button"},on:{click:function(t){return e.addcliente()}}},[e._v("Adicionar")])])]),e._v(" "),a("div",{staticClass:"col"},[a("form",[a("h2",[e._v("Altere")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldName,expression:"oldName"}],staticClass:"w-75 mb-1",attrs:{type:"text",placeholder:"nome"},domProps:{value:e.oldName},on:{input:function(t){t.target.composing||(e.oldName=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldEmail,expression:"oldEmail"}],staticClass:"w-75 mb-1",attrs:{type:"email",placeholder:"email"},domProps:{value:e.oldEmail},on:{input:function(t){t.target.composing||(e.oldEmail=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldCpf,expression:"oldCpf"}],staticClass:"w-75 mb-1",attrs:{type:"number",placeholder:"cpf"},domProps:{value:e.oldCpf},on:{input:function(t){t.target.composing||(e.oldCpf=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.oldNumber,expression:"oldNumber"}],staticClass:"w-75 mb-1",attrs:{type:"number",placeholder:"numero"},domProps:{value:e.oldNumber},on:{input:function(t){t.target.composing||(e.oldNumber=t.target.value)}}})])])]),e._v(" "),e._l(e.clientes,function(t){return e.clientes?a("div",{staticClass:"mt-2 pl-5 pr-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",[e._v("Nome:"+e._s(t.name))])]),e._v(" "),a("div",{staticClass:"col"},[a("p",[e._v("Email:"+e._s(t.email))])]),e._v(" "),a("div",{staticClass:"col"},[a("p",[e._v("Cpf:"+e._s(t.cpf))])]),e._v(" "),a("div",{staticClass:"col"},[a("p",[e._v("Numero:"+e._s(t.numero))])]),e._v(" "),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return e.removeClient(t)}}},[e._v("Deletar")]),e._v(" "),a("button",{staticClass:"btn btn-info",attrs:{id:"top"},on:{click:function(a){return e.updateClient(t)}}},[e._v("Atualizar")])])]),e._v(" "),a("hr")]):e._e()})],2)},staticRenderFns:[]};var u={name:"App",components:{HelloWorld:a("VU/8")(s,r,!1,function(e){a("eoz3")},"data-v-8adb5234",null).exports}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("Crud Basico de clientes")]),this._v(" "),t("HelloWorld")],1)},staticRenderFns:[]};var c=a("VU/8")(u,m,!1,function(e){a("yizG")},null,null).exports,d=a("Tqaz"),p=a("hnaQ");n.default.config.productionTip=!1,n.default.use(i.a),n.default.use(p.a),n.default.use(d.a),new n.default({el:"#app",components:{App:c},template:"<App/>"})},eoz3:function(e,t){},yizG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.820e6eee2a1d1d8e1f85.js.map
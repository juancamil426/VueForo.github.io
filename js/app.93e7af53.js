(function(t){function a(a){for(var s,o,n=a[0],c=a[1],l=a[2],d=0,m=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/VueForo/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"3a30":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navegacion"),e("router-view")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isOpen},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(a){return a.preventDefault(),t.toggleMenu(a)}}},[e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"navbar-menu",class:{"is-active":t.isOpen},attrs:{id:"navbarBasicExample"}},["online"==t.user.estado?[1==t.user.rol?[e("div",{staticClass:"navbar-start"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/foro"}},[t._v("Foro")]),e("router-link",{staticClass:"navbar-item",attrs:{to:"/publicar"}},[t._v("Publicar")])],1),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[e("a",{staticClass:"navbar-item"},[t._v(t._s(t.user.nombre))]),e("a",{staticClass:"button is-primary",on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("strong",[t._v("Cerrar sesion")])])])])])]:[e("div",{staticClass:"navbar-start"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/foro"}},[t._v("Foro")]),e("router-link",{staticClass:"navbar-item",attrs:{to:"/publicar"}},[t._v("Publicar")]),e("router-link",{staticClass:"navbar-item",attrs:{to:"/usuarios"}},[t._v("Usuarios")])],1),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[e("a",{staticClass:"navbar-item"},[t._v(t._s(t.user.nombre))]),e("a",{staticClass:"button is-primary",on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("strong",[t._v("Cerrar sesion")])])])])])]]:[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-primary",attrs:{to:"/register"}},[e("strong",[t._v("Registrarme")])]),e("router-link",{staticClass:"button is-light",attrs:{to:"/"}},[t._v("Iniciar sesion")])],1)])])]],2)])},n=[],c={data:function(){return{isOpen:!1}},computed:{user:function(){return this.$store.state.user}},methods:{toggleMenu:function(){var t=!this.isOpen;this.isOpen=t},logout:function(){this.$store.commit("exitUser"),this.$router.push({name:"login"})}}},l=c,u=e("2877"),d=Object(u["a"])(l,o,n,!1,null,null,null),m=d.exports,p={name:"App",components:{Navegacion:m}},v=p,b=(e("5c0b"),Object(u["a"])(v,i,r,!1,null,null,null)),h=b.exports,f=e("ce5b"),g=e.n(f);e("bf40");s["default"].use(g.a);var C=new g.a({icons:{iconfont:"mdi"}}),U=e("8c4f"),w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mt-50"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6 is-offset-3"},[e("h3",{staticClass:"title is-3"},[t._v("Iniciar sesion")]),e("hr"),e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Correo")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.datosLoguear.email,expression:"datosLoguear.email"}],staticClass:"input",attrs:{type:"email",placeholder:"juan@correo.com"},domProps:{value:t.datosLoguear.email},on:{input:function(a){a.target.composing||t.$set(t.datosLoguear,"email",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Contraseña")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.datosLoguear.password,expression:"datosLoguear.password"}],staticClass:"input",attrs:{type:"password",placeholder:"*****"},domProps:{value:t.datosLoguear.password},on:{input:function(a){a.target.composing||t.$set(t.datosLoguear,"password",a.target.value)}}})])]),e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Iniciar sesion")])]),t.error?e("div",{staticClass:"notification is-danger mt-10"},[t._v(" "+t._s(t.error)+" ")]):t._e()])])])},_=[],I=(e("4160"),e("159b"),e("59ca")),P=e.n(I),E=(e("e71f"),{apiKey:"AIzaSyD8-FANYRKmXHDQgum6TXDzB4F23ehtc94",authDomain:"proyectoforo-dcebc.firebaseapp.com",databaseURL:"https://proyectoforo-dcebc.firebaseio.com",projectId:"proyectoforo-dcebc",storageBucket:"proyectoforo-dcebc.appspot.com",messagingSenderId:"866752610522",appId:"1:866752610522:web:522403b636bb92ee4965e3",measurementId:"G-22PTR61FCE"});P.a.initializeApp(E);var j=P.a.firestore(),x={data:function(){return{datosLoguear:{email:"",password:""},userLogueado:{nombre:"",correo:"",rol:"",id:"",rutaImagen:""},error:""}},name:"Login",methods:{login:function(){var t=this;this.error="";var a=e("6821");this.datosLoguear.email&&this.datosLoguear.password?j.collection("usuarios").get().then((function(e){e.forEach((function(e){t.datosLoguear.email=="".concat(e.data().Correo)&&a(t.datosLoguear.password)=="".concat(e.data().Contraseña)?(t.userLogueado.nombre="".concat(e.data().Nombre),t.userLogueado.correo="".concat(e.data().Correo),t.userLogueado.rol="".concat(e.data().Rol),t.userLogueado.rutaImagen="".concat(e.data().Ruta),t.userLogueado.id="".concat(e.id),t.$store.commit("addUser",t.userLogueado),t.$router.push({name:"foro"})):t.error="Usuario o contraseña incorrectos"}))})):this.error="Todos los campos son requeridos"}}},y=x,N=(e("fab3"),Object(u["a"])(y,w,_,!1,null,null,null)),$=N.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mt-50"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6 is-offset-3"},[e("h3",{staticClass:"title is-3"},[t._v("Crear una cuenta")]),e("hr"),e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.register(a)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Nombre")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Juan Cubillos"},domProps:{value:t.newUser.name},on:{input:function(a){a.target.composing||t.$set(t.newUser,"name",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Correo")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"input",attrs:{type:"email",placeholder:"juan@correo.com"},domProps:{value:t.newUser.email},on:{input:function(a){a.target.composing||t.$set(t.newUser,"email",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Contraseña")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"input",attrs:{type:"password",placeholder:"*****"},domProps:{value:t.newUser.password},on:{input:function(a){a.target.composing||t.$set(t.newUser,"password",a.target.value)}}})])]),e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Registrarme")])]),t.error?e("div",{staticClass:"notification is-danger mt-10"},[t._v(" "+t._s(t.error)+" ")]):t._e()])])])},k=[],L=(e("b0c0"),{data:function(){return{newUser:{name:"",email:"",password:"",rol:1,rutaImagen:""},error:""}},name:"Register",methods:{register:function(){this.error="";var t=e("6821");this.newUser.name&&this.newUser.email&&this.newUser.password?(this.definirImagen(),j.collection("usuarios").add({Nombre:this.newUser.name,Correo:this.newUser.email,"Contraseña":t(this.newUser.password),Rol:this.newUser.rol,Ruta:this.newUser.rutaImagen}),this.newUser.name="",this.newUser.email="",this.newUser.password="",this.newUser.rutaImagen="",this.$router.push({name:"login"})):this.error="Todos los campos son requeridos"},definirImagen:function(){var t=Math.floor(8*Math.random()+0);if(t<8){var a=this.$store.state.urls;this.newUser.rutaImagen=a[t].ruta}else this.newUser.rutaImagen=a[0].ruta}}}),M=L,R=(e("bed7"),Object(u["a"])(M,O,k,!1,null,null,null)),T=R.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return"online"==t.user.estado?e("div",{staticClass:"container mt-50"},t._l(t.publicaciones,(function(a){return e("div",{key:a.PublicacionId},[e("publicacion",{attrs:{publi:a}}),t._v(" "),e("br")],1)})),0):e("div")},D=[],A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto container",attrs:{"max-width":"100%"}},[e("div",[e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("v-img",{attrs:{src:t.publi.UrlImagen,height:"80",width:"80"}})],1),e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("strong",[t._v(" "+t._s(t.publi.UsuarioNombre)+" ")]),e("br"),e("strong",[t._v(" "+t._s(t.publi.UsuarioCorreo)+" ")]),e("br"),t._v(" "+t._s(t.publi.Mensaje)+" ")]),t.errorEliminacion?e("div",{staticClass:"notification is-danger mt-10"},[t._v(t._s(t.errorEliminacion))]):t._e(),t._l(t.publi.ComentarioUnitarios,(function(a){return e("div",{key:a.ComentarioId},[e("comentarios",{attrs:{comenta:a,userLogeado:t.datosPublicacion}}),t._v(" "),e("br")],1)}))],2),e("div",{staticClass:"media-right"},[e("button",{staticClass:"delete is-large",on:{click:function(a){return t.deletepublicacion(t.publi)}}},[t._v("Borrar Publicacion")])])]),e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("v-img",{attrs:{src:t.datosPublicacion.urlImagen,height:"44",width:"44"}})],1),e("div",{staticClass:"media-content"},[e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.datosPublicacion.mensaje,expression:"datosPublicacion.mensaje"}],staticClass:"textarea",attrs:{placeholder:"Añadir comentario"},domProps:{value:t.datosPublicacion.mensaje},on:{input:function(a){a.target.composing||t.$set(t.datosPublicacion,"mensaje",a.target.value)}}})])]),t.error?e("div",{staticClass:"notification is-danger mt-10"},[t._v(" "+t._s(t.error)+" ")]):t._e(),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",on:{click:function(a){return t.comentar()}}},[t._v("Comentar")])])])])])])])},S=[],q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("v-img",{attrs:{src:t.comenta.UrlImagen,height:"80",width:"80"}})],1),e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("strong",[t._v(" "+t._s(t.comenta.UsuarioNombre)+" ")]),e("br"),e("strong",[t._v(" "+t._s(t.comenta.UsuarioCorreo)+" ")]),e("br"),t._v(" "+t._s(t.comenta.Mensaje)+" ")])]),e("div",{staticClass:"media-right"},[e("button",{staticClass:"delete is-large",on:{click:function(a){return t.deleteComentario(t.comenta)}}},[t._v("Borrar Comentario")])])]),t.errorEliminacion?e("div",{staticClass:"notification is-danger mt-10"},[t._v(t._s(t.errorEliminacion))]):t._e()])},B=[],F={props:{comenta:{type:Object},userLogeado:{type:Object}},data:function(){return{errorEliminacion:""}},methods:{deleteComentario:function(t){this.errorEliminacion="",t.UsuarioId==this.userLogeado.usuarioId?j.collection("comentarios").doc(t.ComentarioId).delete():this.errorEliminacion="No se puede eliminar un comentario que no sea de su propiedad"}}},J=F,G=Object(u["a"])(J,q,B,!1,null,null,null),K=G.exports,X={props:{publi:{type:Object}},components:{comentarios:K},data:function(){return{datosPublicacion:{mensaje:"",usuarioCorreo:"",usuarioId:"",usuarioNombre:"",urlImagen:"",estado:"",publicacionId:""},error:"",errorEliminacion:""}},methods:{comentar:function(){this.error="",this.datosPublicacion.mensaje?(j.collection("comentarios").add({Mensaje:this.datosPublicacion.mensaje,UsuarioCorreo:this.datosPublicacion.usuarioCorreo,UsuarioId:this.datosPublicacion.usuarioId,UsuarioNombre:this.datosPublicacion.usuarioNombre,UrlImagen:this.datosPublicacion.urlImagen,PublicacionId:this.datosPublicacion.publicacionId}),this.datosPublicacion.mensaje=""):this.error="Es necesario que redacte algo."},deletepublicacion:function(t){this.errorEliminacion="",t.UsuarioId==this.datosPublicacion.usuarioId?0==this.publi.ComentarioUnitarios?j.collection("publicaciones").doc(t.PublicacionId).delete():this.errorEliminacion="No se puede eliminar una publicacion con comentarios":this.errorEliminacion="No se puede eliminar una publicacion que no sea de su propiedad"}},mounted:function(){var t=this.$store.state.user;""!=t.correo&&(this.datosPublicacion.usuarioCorreo=t.correo,this.datosPublicacion.usuarioId=t.id,this.datosPublicacion.usuarioNombre=t.nombre,this.datosPublicacion.urlImagen=t.rutaImagen,this.datosPublicacion.estado=t.estado,this.datosPublicacion.publicacionId=this.publi.PublicacionId)}},H=X,Q=Object(u["a"])(H,A,S,!1,null,null,null),V=Q.exports,Y={name:"foro",data:function(){return{publicaciones:[],comentariosTotales:[]}},components:{publicacion:V},methods:{llamarPublicaciones:function(){var t=this;this.publicaciones=[],j.collection("publicaciones").get().then((function(a){a.forEach((function(a){var e={Mensaje:"".concat(a.data().Mensaje),UrlImagen:"".concat(a.data().UrlImagen),UsuarioCorreo:"".concat(a.data().UsuarioCorreo),UsuarioId:"".concat(a.data().UsuarioId),UsuarioNombre:"".concat(a.data().UsuarioNombre),PublicacionId:"".concat(a.id),ComentarioUnitarios:t.calcularComentarios("".concat(a.id))};t.publicaciones.push(e)}))}))},llamarComentarios:function(){var t=this;this.comentariosTotales=[],j.collection("comentarios").get().then((function(a){a.forEach((function(a){var e={Mensaje:"".concat(a.data().Mensaje),PublicacionId:"".concat(a.data().PublicacionId),UrlImagen:"".concat(a.data().UrlImagen),UsuarioCorreo:"".concat(a.data().UsuarioCorreo),UsuarioId:"".concat(a.data().UsuarioId),UsuarioNombre:"".concat(a.data().UsuarioNombre),ComentarioId:"".concat(a.id)};t.comentariosTotales.push(e)}))}))},calcularComentarios:function(t){for(var a=[],e=0;e<this.comentariosTotales.length;e++)this.comentariosTotales[e].PublicacionId==t&&a.push(this.comentariosTotales[e]);return a}},computed:{user:function(){return this.$store.state.user}},mounted:function(){this.llamarComentarios(),this.llamarPublicaciones()}},W=Y,Z=Object(u["a"])(W,z,D,!1,null,null,null),tt=Z.exports,at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return"online"==t.user.estado?e("div",{staticClass:"container mt-50"},[e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("v-img",{attrs:{src:t.datosPublicacion.urlImagen,height:"80",width:"80"}})],1),e("div",{staticClass:"media-content"},[e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.datosPublicacion.mensaje,expression:"datosPublicacion.mensaje"}],staticClass:"textarea",attrs:{placeholder:"Escribir publicacion..."},domProps:{value:t.datosPublicacion.mensaje},on:{input:function(a){a.target.composing||t.$set(t.datosPublicacion,"mensaje",a.target.value)}}})])]),e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("button",{staticClass:"button is-primary",on:{click:function(a){return t.publicar()}}},[t._v("Publicar")])])])]),t.error?e("div",{staticClass:"notification is-danger mt-10"},[t._v(" "+t._s(t.error)+" ")]):t._e()])])]):e("div")},et=[],st={name:"publicar",data:function(){return{datosPublicacion:{mensaje:"",usuarioCorreo:"",usuarioId:"",usuarioNombre:"",urlImagen:"",estado:""},error:""}},methods:{publicar:function(){this.error="",this.datosPublicacion.mensaje?(j.collection("publicaciones").add({Mensaje:this.datosPublicacion.mensaje,UsuarioCorreo:this.datosPublicacion.usuarioCorreo,UsuarioId:this.datosPublicacion.usuarioId,UsuarioNombre:this.datosPublicacion.usuarioNombre,UrlImagen:this.datosPublicacion.urlImagen}),this.datosPublicacion.mensaje="",this.$router.push({name:"foro"})):this.error="Es necesario que redacte algo."}},computed:{user:function(){return this.$store.state.user}},mounted:function(){var t=this.$store.state.user;""!=t.correo&&(this.datosPublicacion.usuarioCorreo=t.correo,this.datosPublicacion.usuarioId=t.id,this.datosPublicacion.usuarioNombre=t.nombre,this.datosPublicacion.urlImagen=t.rutaImagen,this.datosPublicacion.estado=t.estado)}},it=st,rt=Object(u["a"])(it,at,et,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return"online"==t.user.estado&&"2"==t.user.rol?e("div",{staticClass:"container mt-50"},[e("div",[1==t.dialog?e("v-card",{staticClass:"mx-auto container mt-50",attrs:{color:"#26c6da",dark:"","max-width":"400"}},[e("v-card-title",[e("span",{staticClass:"title font-weight-light"},[t._v("Editar usuario")]),e("hr")]),e("v-card-text",{staticClass:"headline font-weight-bold"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Nombre")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userEdit.name,expression:"userEdit.name"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.userEdit.name},on:{input:function(a){a.target.composing||t.$set(t.userEdit,"name",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Correo")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userEdit.email,expression:"userEdit.email"}],staticClass:"input",attrs:{type:"email"},domProps:{value:t.userEdit.email},on:{input:function(a){a.target.composing||t.$set(t.userEdit,"email",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Rol")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userEdit.rol,expression:"userEdit.rol"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.userEdit.rol},on:{input:function(a){a.target.composing||t.$set(t.userEdit,"rol",a.target.value)}}})])]),t.errorEditar?e("div",{staticClass:"notification is-danger mt-10"},[t._v(t._s(t.errorEditar))]):t._e(),e("v-card-actions",[e("v-spacer"),e("div",{attrs:{id:"butt"}},[e("v-btn",{on:{click:t.actualizacionUsuario}},[t._v("Editar")]),e("v-btn",{attrs:{text:""},on:{click:t.cancelar}},[t._v("Cancelar")])],1)],1)],1)],1):t._e()],1),e("div",[0==t.dialog?e("v-card",[e("v-card-title",[t._v(" Lista de usuarios "),e("v-spacer"),e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("v-data-table",{attrs:{height:"300px",headers:t.headers,items:t.users,search:t.search},scopedSlots:t._u([{key:"item.actionOne",fn:function(a){var s=a.item;return[e("v-btn",{staticClass:"btn btn-danger",on:{click:function(a){return t.editarUsuario(s)}}},[t._v("Editar")])]}},{key:"item.actionTwo",fn:function(a){var s=a.item;return[e("button",{staticClass:"delete is-large",on:{click:function(a){return t.deleteUsuario(s)}}},[t._v("Borrar")])]}}],null,!1,1196011958)})],1)])],1):t._e()],1),t.errorEliminacion?e("div",{staticClass:"notification is-danger mt-10"},[t._v(t._s(t.errorEliminacion))]):t._e(),0==t.dialog?e("div",{staticClass:"container mt-50"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6 is-offset-3"},[e("h3",{staticClass:"title is-3"},[t._v("Agregar nueva cuenta")]),e("hr"),e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.crearUsuario(a)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Nombre")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Juan Cubillos"},domProps:{value:t.newUser.name},on:{input:function(a){a.target.composing||t.$set(t.newUser,"name",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Correo")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"input",attrs:{type:"email",placeholder:"juan@correo.com"},domProps:{value:t.newUser.email},on:{input:function(a){a.target.composing||t.$set(t.newUser,"email",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Rol")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.rol,expression:"newUser.rol"}],staticClass:"input",attrs:{type:"text",placeholder:"Admin: 2  -  User: 1"},domProps:{value:t.newUser.rol},on:{input:function(a){a.target.composing||t.$set(t.newUser,"rol",a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Contraseña")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"input",attrs:{type:"password",placeholder:"*****"},domProps:{value:t.newUser.password},on:{input:function(a){a.target.composing||t.$set(t.newUser,"password",a.target.value)}}})])]),t._m(0)]),t.error?e("div",{staticClass:"notification is-danger mt-10"},[t._v(t._s(t.error))]):t._e()])])]):t._e()]):e("div")},ct=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Guardar")])])}],lt={name:"Usuarios",data:function(){return{dialog:!1,search:"",headers:[{text:"Nombre",align:"left",sortable:!1,value:"Nombre"},{text:"Correo",value:"Correo"},{text:"Rol",value:"Rol"},{text:"Publicaciones",value:"Publicaciones"},{text:"Editar",value:"actionOne"},{text:"Eliminar",value:"actionTwo"}],users:[],publicacionesTotales:[],newUser:{name:"",email:"",password:"",rol:"",rutaImagen:""},userEdit:{name:"",email:"",rol:"",id:""},error:"",errorEliminacion:"",errorEditar:""}},methods:{crearUsuario:function(){this.error="",this.errorEliminacion="";var t=e("6821");this.newUser.name&&this.newUser.email&&this.newUser.password&&this.newUser.rol?0==isNaN(this.newUser.rol)&&this.newUser.rol>0&&this.newUser.rol<3?(this.definirImagen(),j.collection("usuarios").add({Nombre:this.newUser.name,Correo:this.newUser.email,"Contraseña":t(this.newUser.password),Rol:this.newUser.rol,Ruta:this.newUser.rutaImagen}),this.newUser.name="",this.newUser.email="",this.newUser.password="",this.newUser.rol="",this.newUser.rutaImagen="",this.llamarUsuarios()):this.error="El rol debe ser 1:Admin o 2:User":this.error="Todos los campos son requeridos"},definirImagen:function(){var t=Math.floor(8*Math.random()+0);if(t<8){var a=this.$store.state.urls;this.newUser.rutaImagen=a[t].ruta}else this.newUser.rutaImagen=a[0].ruta},cancelar:function(){this.userEdit.name="",this.userEdit.email="",this.userEdit.rol="",this.userEdit.id="",this.dialog=!1},editarUsuario:function(t){var a=this;this.errorEliminacion="",j.collection("usuarios").get().then((function(e){e.forEach((function(e){t.UsuarioId=="".concat(e.id)&&(a.userEdit.name=e.data().Nombre,a.userEdit.email=e.data().Correo,a.userEdit.rol=e.data().Rol,a.userEdit.id=e.id,a.dialog=!0)}))}))},actualizacionUsuario:function(){var t=j.collection("usuarios").doc(this.userEdit.id);0==isNaN(this.userEdit.rol)&&this.userEdit.rol>0&&this.userEdit.rol<3?(t.update({Nombre:this.userEdit.name,Correo:this.userEdit.email,Rol:this.userEdit.rol}),this.llamarUsuarios(),this.actualizarPublicaciones(this.userEdit.id,this.userEdit.name,this.userEdit.email),this.actualizarComentarios(this.userEdit.id,this.userEdit.name,this.userEdit.email),this.dialog=!1):this.errorEditar="El rol debe ser 1:Admin o 2:User"},actualizarPublicaciones:function(t,a,e){j.collection("publicaciones").get().then((function(s){s.forEach((function(s){if(t==s.data().UsuarioId){var i=j.collection("publicaciones").doc("".concat(s.id));i.update({Mensaje:s.data().Mensaje,UrlImagen:s.data().UrlImagen,UsuarioCorreo:e,UsuarioId:s.data().UsuarioId,UsuarioNombre:a})}}))}))},actualizarComentarios:function(t,a,e){j.collection("comentarios").get().then((function(s){s.forEach((function(s){if(t==s.data().UsuarioId){var i=j.collection("comentarios").doc("".concat(s.id));i.update({Mensaje:s.data().Mensaje,UrlImagen:s.data().UrlImagen,PublicacionId:s.data().PublicacionId,UsuarioId:s.data().UsuarioId,UsuarioCorreo:e,UsuarioNombre:a})}}))}))},deleteUsuario:function(t){this.errorEliminacion="",0==t.Publicaciones?(j.collection("usuarios").doc(t.UsuarioId).delete(),this.llamarUsuarios()):this.errorEliminacion="No se puede eliminar un usuario que haya realizado una publicacion"},llamarUsuarios:function(){var t=this;this.users=[],this.llamarPublicaciones(),j.collection("usuarios").get().then((function(a){a.forEach((function(a){var e={Nombre:"".concat(a.data().Nombre),Correo:"".concat(a.data().Correo),Rol:"".concat(a.data().Rol),Ruta:"".concat(a.data().Ruta),UsuarioId:"".concat(a.id),Publicaciones:t.calcularPubicaciones("".concat(a.id))};t.users.push(e)}))}))},llamarPublicaciones:function(){var t=this;this.publicacionesTotales=[],j.collection("publicaciones").get().then((function(a){a.forEach((function(a){t.publicacionesTotales.push(a.data())}))}))},calcularPubicaciones:function(t){for(var a=0,e=0;e<this.publicacionesTotales.length;e++)this.publicacionesTotales[e].UsuarioId==t&&a++;return a}},computed:{user:function(){return this.$store.state.user}},mounted:function(){this.llamarUsuarios()}},ut=lt,dt=Object(u["a"])(ut,nt,ct,!1,null,null,null),mt=dt.exports;s["default"].use(U["a"]);var pt=new U["a"]({routes:[{path:"/",name:"login",component:$},{path:"/register",name:"register",component:T},{path:"/foro",name:"foro",component:tt},{path:"/publicar",name:"publicar",component:ot},{path:"/usuarios",name:"usuarios",component:mt}]}),vt=pt,bt=e("2f62");s["default"].use(bt["a"]);var ht=new bt["a"].Store({state:{urls:[{ruta:"https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"},{ruta:"https://images.dog.ceo/breeds/shiba/shiba-13.jpg"},{ruta:"https://images.dog.ceo/breeds/boxer/n02108089_14112.jpg"},{ruta:"https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg"},{ruta:"https://images.dog.ceo/breeds/doberman/n02107142_4653.jpg"},{ruta:"https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg"},{ruta:"https://images.dog.ceo/breeds/pug/n02110958_15626.jpg"},{ruta:"https://images.dog.ceo/breeds/samoyed/n02111889_4470.jpg"}],user:{nombre:"",correo:"",rol:"",id:"",rutaImagen:"",estado:"offline"}},mutations:{addUser:function(t,a){t.user.nombre=a.nombre,t.user.correo=a.correo,t.user.rol=a.rol,t.user.id=a.id,t.user.rutaImagen=a.rutaImagen,t.user.estado="online"},exitUser:function(t){t.user.nombre="",t.user.correo="",t.user.rol="",t.user.id="",t.user.rutaImagen="",t.user.estado="offline"}},actions:{addUser:function(t,a){var e=t.commit;e("addUser",a)},exitUser:function(t){var a=t.commit;a("exitUser")}}});s["default"].config.productionTip=!1,new s["default"]({vuetify:C,router:vt,store:ht,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},9732:function(t,a,e){},"9c0c":function(t,a,e){},bed7:function(t,a,e){"use strict";var s=e("3a30"),i=e.n(s);i.a},fab3:function(t,a,e){"use strict";var s=e("9732"),i=e.n(s);i.a}});
//# sourceMappingURL=app.93e7af53.js.map
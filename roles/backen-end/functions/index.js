// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp();
const auth = admin.auth();

exports.agregarAdministrador =  functions.https.onCall(( data, context) => {
  //validar admin
  if(context.auth.token.admin !== true) {
    return { error: 'no tienes los permisos' }
  }
  return auth.getUserByEmail(data.email)
    .then(user => {
      return auth.setCustomUserClaims(user.uid, { admin: true })
    })
    .then(() => {
      return { message: 'Se creo el administrador'}
    })
    .catch( error => {
      return { error: error}
    })
})

exports.eliminarAdministrador = functions.https.onCall( (data, context) => {
  //validar admin
  if(context.auth.token.admin !== true) {
    return { error: 'no tienes los permisos' }
  }
  return auth.getUserByEmail(data.email)
    .then( user => {
      return auth.setCustomUserClaims( user.uid, {admin: false})
    })
    .then( () => {
      return {message: 'Usuario ya no es administrador'}
    })
    .catch( (error) => {
      return  {error: error}
    })
})

exports.crearAutor = functions.https.onCall( (data, context) => {
  //validar admin
  if(context.auth.token.admin !== true) {
    return { error: 'no tienes los permisos' }
  }
  return auth.getUserByEmail(data.email)
    .then( user => {
      return auth.setCustomUserClaims( user.uid, {autor: true})
    })
    .then( () => {
      return {message: 'Usuario es autor'}
    })
    .catch( (error) => {
      return  {error: error}
    })
})

exports.eliminarAutor = functions.https.onCall( (data, context) => {
  //validar admin
  if(context.auth.token.admin !== true) {
    return { error: 'no tienes los permisos' }
  }
  return auth.getUserByEmail(data.email)
    .then( user => {
      return auth.setCustomUserClaims( user.uid, {autor: false})
    })
    .then( () => {
      return {message: 'Usuario ya no es autor'}
    })
    .catch( (error) => {
      return  {error: error}
    })
})
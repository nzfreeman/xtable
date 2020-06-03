import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

// get Firestore database instance
import firebase from 'firebase/app'
import 'firebase/firestore'
// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'xtableproject' })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

//
//
// const db = firebase.initializeApp({ projectId: 'MY PROJECT ID' }).firestore()
//
// new Vue({
//   // setup the reactive todos property
//   data: () => ({ todos: [] }),
//
//   created() {
//     // unsubscribe can be called to stop listening for changes
//     const unsubscribe = db.collection('todos').onSnapshot(ref => {
//       ref.docChanges().forEach(change => {
//         const { newIndex, oldIndex, doc, type } = change
//         if (type === 'added') {
//           this.todos.splice(newIndex, 0, doc.data())
//           // if we want to handle references we would do it here
//         } else if (type === 'modified') {
//           // remove the old one first
//           this.todos.splice(oldIndex, 1)
//           // if we want to handle references we would have to unsubscribe
//           // from old references' listeners and subscribe to the new ones
//           this.todos.splice(newIndex, 0, doc.data())
//         } else if (type === 'removed') {
//           this.todos.splice(oldIndex, 1)
//           // if we want to handle references we need to unsubscribe
//           // from old references
//         }
//       })
//     }, onErrorHandler)
//   },
// })

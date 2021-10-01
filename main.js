// Your web app's Firebase configuration
// Add your firebase config details here
var firebaseConfig = {
  apiKey: "AIzaSyCSCFfZkIGKDs6StehcpNEaHd7LvruGJDU",
  authDomain: "mikaelprofile-184a4.firebaseapp.com",
  databaseURL: "https://mikaelprofile-184a4.firebaseio.com",
  projectId: "mikaelprofile-184a4",
  storageBucket: "mikaelprofile-184a4.appspot.com",
  messagingSenderId: "133866741525",
  appId: "1:133866741525:web:38bfcc909d5327e45c131c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value

  database.ref('bio-data').set({
    email : email
  })

  alert('Saved')
}

////Function to retrieve the data stored in the realtime database
// function get() {
//   var username = document.getElementById('email').value

//   var user_ref = database.ref('users/' + username)
//   user_ref.on('value', function(snapshot) {
//     var data = snapshot.val()

//     alert(data.email)

//   })

// }

////Function to update the data stored in the realtime database
// function update() {
//   var email = document.getElementById('email').value

//   var updates = {
//     email : email,
//     password : password
//   }

//   database.ref('users/' + username).update(updates)

//   alert('updated')
// }

////Function to delete the data from the realtime database
// function remove() {
//   var username = document.getElementById('email').value

//   database.ref('users/' + username).remove()

//   alert('deleted')
// }

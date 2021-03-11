(function() {

    //initalize firebase
    const config = {
        apiKey: "AIzaSyBvtdyMPRK4NOx89AdgYzh3awHG7cDfO7s",
        authDomain: "lidarspeedometer.firebaseapp.com",
        databaseURL: "https://lidarspeedometer.firebaseio.com",
        projectId: "lidarspeedometer",
        storageBucket: "lidarspeedometer.appspot.com",
      };
      firebase.initalizeApp(config);
      const database = firebase.database()
      var ref = firebase.database().ref();                           
      ref.on("value", function(snapshot){
        output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
      });
    //   //get elements
    //   const preObject = document.getElementById('object');

    // // create references
    // const dbRefObject = firebase.database().ref().child('object');

    // //sync objects
    // dbRefObject.on('value', snap => console.log(snap.val()));

}());
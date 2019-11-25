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

      //get elements
      const preObject = document.getElementById('object');

    // create references
    const dbRefObject = firebase.database().ref().child('object');

    //sync objects
    dbRefObject.on('value', snap => console.log(snap.val()));

}());
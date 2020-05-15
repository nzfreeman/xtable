<input type = "text" id = "booking_list" >
  <script>
    var docRef = db.collection(year).doc(month).collection(day).doc(table_number);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

    docRef.document.getElementById("booking_list").value=temp;
  }
  </script>

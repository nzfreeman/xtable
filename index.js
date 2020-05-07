// window.alert("OKA")



function storeData() {
  var nameText = document.getElementById("name_field").value;
  var phoneText = document.getElementById("phone_field").value;
  var how_manyText = document.getElementById("how_many_field").value;
  var anythingText = document.getElementById("anything_field").value;
  var timeText = document.getElementById("time_field").value;
  var book_date = document.getElementById("datepicker").value;

// 이메일 필드(email_field)는 index.html속의 필드명과 일치해야 함  
  //  여기서 변경하면 바뀌나?
  // JqueryUI datepicker의 value값을 받아 오기
  db.collection("ASD2").doc("1").set({
      name: nameText,
      phone: phoneText,
      how_many: how_manyText,
      anything: anythingText,
      time: timeText,
      date: book_date,
      day: "ddd",
        })
    .then(function() {
      console.log("Document successfully written");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}

// 
// 
// const list_div = document.querySelector("#list_div");
// 
// db.collection("Users").onSnapshot(function(querySnapshot) {
//     querySnapshot.docChanges.forEach(function(changes) {
// 
//       if (change.type === "added") {
//         list_div.innerHTML += "<div class='list-item'><h5>" + change.doc.data().name + "</h5><p>Email : " + change.doc.data().email + " </P></div>"
//       }
//       // querySnapshot.forEach(function(doc) {
// 
// 
//     })
//   }
// 
// )
//     // list_div.innerHTML += "<div class='list-item'><p>Name : "+doc.data().name + " </P></div>" // 참고하시오... 
// });

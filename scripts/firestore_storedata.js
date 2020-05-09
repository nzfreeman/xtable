function storeData() {
  var nameText = document.getElementById("name_field").value;
  var phoneText = document.getElementById("phone_field").value;
  var how_manyText = document.getElementById("how_many_field").value;
  var anythingText = document.getElementById("anything_field").value;
  var timeText = document.getElementById("time_field").value;
  var book_date = document.getElementById("date").innerHTML;
  var table_number = document.getElementById("table_number").innerHTML;
  var year = document.getElementById("year").innerHTML;//datepicker에서 받은 값을 넣을때는 innerHTML을 사용해야 합니다. 
  var month = document.getElementById("month").innerHTML;
  var day = document.getElementById("day").innerHTML;

// 이메일 필드(email_field)는 index.html속의 필드명과 일치해야 함  
  //  여기서 변경하면 바뀌나?
  // JqueryUI datepicker의 value값을 받아 오기
  db.collection(year).doc(month).collection(day).doc(table_number).set({
      name: nameText,
      phone: phoneText,
      how_many: how_manyText,
      anything: anythingText,
      time: timeText,
      date: date
        })
    .then(function() {
      console.log("Document successfully written");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}
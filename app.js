  function storeData() {
    var year_en = document.getElementById("year").innerHTML;
    var month_en = document.getElementById("month").innerHTML;
    var day_en = document.getElementById("day").innerHTML; //datepicker에서 받은 값을 넣을때는 innerHTML을 사용해야 합니다.
    var c_table = document.getElementById("c_table").value;
    var time_field = document.getElementById("time_field").value;//inputText로 받은 값을 넣을때는 value를 사용해야 합니다.
    var name_field = document.getElementById("name_field").value;
    var phone_field = document.getElementById("phone_field").value;
    var how_many_field = document.getElementById("how_many_field").value;
    var anything_field = document.getElementById("anything_field").value;
    var weekday = document.getElementById("mydate").innerHTML
    alert(month_en+ day_en)
    db.collection(year_en).doc(month_en).collection(day_en).doc(c_table).set({
        Time: time_field,
        Name: name_field,
        Phone: phone_field,
        Seats: how_many_field,
        Any_request:anything_field,
        Weekk: weekday
      })
      .then(function() {
        console.log("Doc successful");
      })
      .catch(function(error) {
        console.error("Error writing doc", error);
      });
  }

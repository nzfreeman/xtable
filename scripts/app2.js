



const form = document.querySelector('#add-booking-form');
const tbl_booking_list = document.querySelector('#tbl_booking_list');


//     // deleting data
//     cross.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let id = e.target.parentElement.getAttribute('data-id');
//         db.collection('2020').doc(id).delete();
//     });
// }

// getting data
// db.collection('2020').doc().get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderBooking(doc);
//     });
// });



// saving data
form.addEventListener('submit', (e) => {
  // alert(form.month.value)
    e.preventDefault();
    db.collection(form.year.value).doc(form.month.value).collection(form.day.value).doc().set({
        date: form.date.value,
        name: form.name.value,
        phone: form.phone.value,
        partysize: form.partysize.value,
        request: form.request.value,
        tablenumber: form.tablenumber.value,
        year: form.year.value,
        month: form.month.value,
        day: form.day.value,
        mydate: form.mydate.value,
        time: form.time.value,

    });
    var showdate = form.year.value
    console.log("showdate" + showdate)
    form.date.value = '';
    form.name.value = '';
    form.phone.value = '';
    form.partysize.value = '';
    form.request.value = '';
    form.tablenumber.value = '';
    form.year.value  = '';
    form.month.value = '';
    form.mydate.value = '';
    form.time.value = '';
    form.day.value = '';


});



//SUBCOLLECTION 가져오기
db.collection("form.year.value").doc("form.month.value").collection("form.day.value").get()
.then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });
});
// real-time listener
// db.collection('2020').orderBy('date').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         // console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderBooking(change.doc);
//         } else if (change.type == 'removed'){
//             let li = bookingList.querySelector('[data-id=' + change.doc.id + ']');
//             bookingList.removeChild(li);
//         }
//     });
// });

db.collection('form.year.value').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderAccount(change.doc);
        } else if (change.type == 'removed'){
            let tr = tbl_booking_list.querySelector('[data-id=' + change.doc.id + ']');
            tbl_booking_list.removeChild(tr);
            renderAccount(change.doc);

        }
    });
});


function renderAccount(doc){
    let tr = document.createElement('tr');
    let td_date = document.createElement('td');
    let td_name = document.createElement('td');
    let td_phone = document.createElement('td');
    let td_partysize = document.createElement('td');
    let td_request = document.createElement('td');
    let td_tablenumber = document.createElement('td');
    let td_mydate = document.createElement('td');
    let td_time = document.createElement('td');
    // let td_mydate = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    td_date.textContent = doc.data().date;
    td_name.textContent = doc.data().name;
    td_phone.textContent = doc.data().phone;
    td_partysize.textContent = doc.data().partysize;
    td_request.textContent = doc.data().request;
    td_tablenumber.textContent = doc.data().tablenumber;
    td_mydate.textContent = doc.data().mydate;
    td_time.textContent = doc.data().time;
    tr.appendChild(td_date);
    tr.appendChild(td_name);
    tr.appendChild(td_phone);
    tr.appendChild(td_partysize);
    tr.appendChild(td_request);
    tr.appendChild(td_tablenumber);
    tr.appendChild(td_time);
    tr.appendChild(td_mydate);

    tbl_booking_list.appendChild(tr);

}


// <script>현재시간 표시
  var today = new Date();
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  var enMonth = month[today.getMonth()];
  var date = today.getDate() + '-' + enMonth + '-' + today.getFullYear();
  // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date+' '+time;
  var dateTime = date;
  // <!--javascript output 출력-->
  document.getElementById("current date and time").innerHTML = dateTime;
// </script>



//Date selecter
// <script type="text/javascript">
  $(function() {
    $("#date").datepicker({
      dateFormat: "D-dd-M-yy",
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      onSelect: function(d) {
        var arr = d.split("-");
        var year = arr[3];
        var month = arr[2];
        var day = arr[1];
        var weekday = arr[0];
        var date = new Date($("#date").datepicker({
          dateFormat: "dd-M-yy"
        }).val());  //일요일 0~   // alert("date:" + date.getDay()); //
        week = new Array("Su", "Mo", "Tu", "We", "Th", "Fr", "Sa");
        // $("#mydate").text(week[date.getDay()]);
        $("#mydate").val(weekday);
        $("#year").val(year);
        $("#month").val(month);
        $("#day").val(day);
        // alert("date:" + date.getDay());
        // alert(weekday);
      }
    });
  });
// </script>

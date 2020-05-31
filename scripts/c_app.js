
const form = document.querySelector('#add-booking-form');
const tbl_booking_list = document.querySelector('#tbl_booking_list');
// // VueFire setup starts from here ==========================================
//
// import Vue from 'vue'
// import { firestorePlugin } from 'vuefire'
//
// Vue.use(firestorePlugin)
// import firebase from 'firebase/app'
// import 'firebase/firestore'
//
// // Get a Firestore instance
// export const db = firebase
//   .initializeApp({ projectId: 'xtableproject' })
//   .firestore()
//
// // Export types that exists in Firestore
// // This is not always necessary, but it's used in other examples
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
//
// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })
// // VueFire Setup Finish =================================================
function renderTableHead(){
  let thead = document.createElement('thead');
  let th_date = document.createElement('th');
  let th_time = document.createElement('th');
  let th_name = document.createElement('th');
  let th_phone = document.createElement('th');
  let th_partysize = document.createElement('th');
  let th_request = document.createElement('th');
  // let th_tablenumber = document.createElement('th');
  // let th_weekday = document.createElement('th');
  th_date.textContent = "Date";
  th_time.textContent = "Time";
  th_name.textContent = "Name";
  th_phone.textContent = "Phone";
  th_partysize.textContent = "PartySize";
  th_request.textContent = "Request";
  // th_tablenumber.textContent = "TableNumber";
  // th_weekday.textContent = "Weekday";
  thead.appendChild(th_date);
  thead.appendChild(th_time);
  thead.appendChild(th_name);
  thead.appendChild(th_phone);
  thead.appendChild(th_partysize);
  thead.appendChild(th_request);
  // thead.appendChild(th_tablenumber);
  // thead.appendChild(th_weekday);
  tbl_booking_list.appendChild(thead);
}

function renderBooking(doc) {
  let tr = document.createElement('tr');
  let td_date = document.createElement('td');
  let td_time = document.createElement('td');
  let td_name = document.createElement('td');
  let td_phone = document.createElement('td');
  let td_partysize = document.createElement('td');
  let td_request = document.createElement('td');
  // let td_tablenumber = document.createElement('td');
  // let td_weekday = document.createElement('td');
  // let td_weekday = document.createElement('td');
  tr.setAttribute('data-id', doc.id);
  td_date.textContent = doc.data().date;
  td_time.textContent = doc.data().time;
  td_name.textContent = doc.data().name;
  td_phone.textContent = doc.data().phone;
  td_partysize.textContent = doc.data().partysize;
  td_request.textContent = doc.data().request;
  // td_tablenumber.textContent = doc.data().tablenumber;
  // td_weekday.textContent = doc.data().weekday;
  tr.appendChild(td_date);
  tr.appendChild(td_time);
  tr.appendChild(td_name);
  tr.appendChild(td_phone);
  tr.appendChild(td_partysize);
  tr.appendChild(td_request);
  // tr.appendChild(td_tablenumber);
  // tr.appendChild(td_weekday);
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
console.log("현재시간 날짜: " + date);
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
        $('#tb').empty()
      var arr = d.split("-");
      var year = arr[3];
      var month = arr[2];
      var day = arr[1];
      var weekday = arr[0];
      // var date2 = new Date($("#date").datepicker({
      //   dateFormat: "dd-M-yy"
      // }).val()); //일요일 0~   // alert("date:" + date.getDay()); //
      // week = new Array("Su", "Mo", "Tu", "We", "Th", "Fr", "Sa");
      // // $("#weekday").text(week[date.getDay()]);
      $("#weekday").val(weekday);
      $("#year").val(year);
      $("#month").val(month);
      $("#day").val(day);
      // alert("date:" + date.getDay());
      var selecteddate = $(this).val();
      console.log("selected date:" + selecteddate)
      // var selecteddate = print(k)

        console.log("날짜선택시")
        //테이블 내용을 지움
                    // document.getElementById("tbl_booking_list").innerHTML = "";
                    // //테이블 헤드를 다시 씀
                    // renderTableHead();

    }
  });
});
// </script>


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
//
// //==========================================첫 화면에서 오늘 날짜의 부킹만 보여줌
// // function firstPage() {
//   db.collection("booking").where("date_no_weekday", "==", date).get().then(snapshot => {
//     console.log("첫화면에서 보여지는 날짜: " + date);
//     renderTableHead();
//     snapshot.docs.forEach(doc => {
//       renderBooking(doc);
//     });
//   });
// // }
// //==========================================첫 화면에서 오늘 날짜의 부킹만 보여줌
//


// saving data
form.addEventListener('submit', (e) => {
  // alert(form.month.value)
  e.preventDefault();
  db.collection("booking").doc().set({
    date: form.date.value,
    date_no_weekday: form.day.value + "-" + form.month.value + "-" + form.year.value,
    name: form.name.value,
    phone: form.phone.value,
    partysize: form.partysize.value,
    request: form.request.value,
    tablenumber: form.tablenumber.value,
    year: form.year.value,
    month: form.month.value,
    day: form.day.value,
    weekday: form.weekday.value,
    time: form.time.value,
    Bookedtime: firebase.firestore.Timestamp.now(), //부킹된 시각을 기록
    Bookedtime2: firebase.firestore.Timestamp.fromDate(new Date(form.date.value))
    //부킹된 s날짜를 타임스탬프로 기록
  });
  alert("date: " + form.date.value + " Name: " + form.name.value + " Weekday: " + form.weekday.value);
  form.date.value = '';
  form.name.value = '';
  form.phone.value = '';
  form.partysize.value = '';
  form.request.value = '';
  form.tablenumber.value = '';
  form.year.value = '';
  form.month.value = '';
  form.weekday.value = '';
  form.time.value = '';
  form.day.value = '';
  console.log("파이어스토어에 데이터 저장됨")
var selecteddate = date;
  db.collection("booking").where("date", "==", selecteddate).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
              document.getElementById("tbl_booking_list").innerHTML = "";
              renderTableHead();
              renderBooking(change.doc);
              console.log("부킹했을때인가?")
            // }
            // else if (change.type == 'removed') {
            //   let tr = tbl_booking_list.querySelector('[data-id=' + change.doc.id + ']');
            //   tbl_booking_list.removeChild(tr);
            //   document.getElementById("tbl_booking_list").innerHTML = "";
            //   renderTableHead();
            //   renderBooking(change.doc);
            //   // location.reload(true);
            //
            // }
          });
        });


//
// //
// //모든 부킹을 다 보여주는데, 정렬은 부킹된 날짜순, 앞으로의 부킹이 위로 오도록
// db.collection("booking").orderBy("Bookedtime2", "desc").onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     console.log("날짜선택시")
//     //테이블 내용을 지움
//                 document.getElementById("tbl_booking_list").innerHTML = "";
//                 //테이블 헤드를 다시 씀
//                 renderTableHead();
//     changes.forEach(change => {
//         console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderBooking(change.doc);
//             console.log("전체 부킹 추가되면 보여짐")
//
//         } else if (change.type == 'removed'){
//             let tr = tbl_booking_list.querySelector('[data-id=' + change.doc.id + ']');
//             tbl_booking_list.removeChild(tr);
//             //테이블 내용을 지움
//                         document.getElementById("tbl_booking_list").innerHTML = "";
//                         //테이블 헤드를 다시 씀
//                         renderTableHead();
//             renderBooking(change.doc);
//           console.log("지웠을때 보여짐")
//         }
//     });
// });


document.querySelector(data-id)

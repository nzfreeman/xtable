/
//
// // create element & render cafe
// function renderBooking(doc){
//     let li = document.createElement('li');
//     let name = document.createElement('p');
//     let date = document.createElement('p');
//     let phone = document.createElement('p');
//     let partysize = document.createElement('p');
//     let request = document.createElement('p');
//     let tablenumber = document.createElement('p');
//     let mydate = document.createElement('p');
//     let year = document.createElement('p');
//     let month = document.createElement('p');
//     let day = document.createElement('p');
//
//     let cross = document.createElement('div');
//
//     li.setAttribute('data-id', doc.id);
//     date.textContent = doc.data().date;
//     name.textContent = doc.data().name;
//     phone.textContent = doc.data().phone;
//     partysize.textContent = doc.data().partysize;
//     request.textContent = doc.data().request;
//     tablenumber.textContent = doc.data().tablenumber;
//     mydate.textContent = doc.data().mydate;
//     year.textContent = doc.data().year;
//     month.textContent = doc.data().month;
//     day.textContent = doc.data().day;
//     cross.textContent = 'del';
//
//     li.appendChild(name);
//     li.appendChild(date);
//     li.appendChild(name);
//     li.appendChild(phone);
//     li.appendChild(partysize);
//     li.appendChild(request);
//     li.appendChild(tablenumber);
//     li.appendChild(mydate);
//     li.appendChild(year);
//     li.appendChild(month);
//     li.appendChild(day);
//     li.appendChild(cross);
//
//     bookingList.appendChild(li);
//// updating records (console demo)
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });



//
// db.collection('2020').get().then((snapshot) => {
//                 snapshot.docs.forEach(doc => {
//                     renderAccount(doc);
//                 })
//             })
//
// //create element and render list
// function renderBooklist(doc){
//     let li = document.createElement('li');
//     let year = document.createElement('span');
//     let month = document.createElement('span');
//     let day = document.createElement('span');
//     let table = document.createElement('span');
//     let name = document.createElement('span');
//     let time = document.createElement('span');
//     let phone = document.createElement('span');
//     let size = document.createElement('span');
//     let request = document.createElement('span');
//     let weekday = document.createElement('span');
//     let cross = document.createElement('div');
//
//
//     li.setAttribute('data-id', doc.id);
//     year.textContent = doc.data().year;
//     month.textContent = doc.data().month;
//     day.textContent = doc.data().day;
//     table.textContent = doc.data().table;
//     name.textContent = doc.data().name;
//     time.textContent = doc.data().time;
//     phone.textContent = doc.data().phone;
//     size.textContent = doc.data().size;
//     request.textContent = doc.data().request;
//     weekday.textContent = doc.data().weekday;
//     cross.textContent = 'del';
//
//     li.appendChild(year);
//     li.appendChild(month);
//     li.appendChild(day);
//     li.appendChild(table);
//     li.appendChild(name);
//     li.appendChild(time);
//     li.appendChild(phone);
//     li.appendChild(size);
//     li.appendChild(weekday);
//     li.appendChild(request);
//     li.appendChild(cross);
//
//     booklist.appendChild(li);
//   }
//
//
// // function getdatafromFirestore() {
//   db.collection('booking').get().then((snapshot) => {
// snapshot.docs.forEach(doc => {
//   renderBooklist(doc);
// });
// });
// // }

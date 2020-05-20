const bookingList = document.querySelector('#booking-list');
const tbl_booking_list = document.querySelector('#tbl_booking_list');

const form = document.querySelector('#add-booking-form');

// create element & render cafe
function renderBooking(doc){
    let li = document.createElement('li');
    let name = document.createElement('p');
    let date = document.createElement('p');
    let phone = document.createElement('p');
    let partysize = document.createElement('p');
    let request = document.createElement('p');
    let tablenumber = document.createElement('p');
    let mydate = document.createElement('p');
    let year = document.createElement('p');
    let month = document.createElement('p');
    let day = document.createElement('p');

    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    date.textContent = doc.data().date;
    name.textContent = doc.data().name;
    phone.textContent = doc.data().phone;
    partysize.textContent = doc.data().partysize;
    request.textContent = doc.data().request;
    tablenumber.textContent = doc.data().tablenumber;
    mydate.textContent = doc.data().mydate;
    year.textContent = doc.data().year;
    month.textContent = doc.data().month;
    day.textContent = doc.data().day;
    cross.textContent = 'del';

    li.appendChild(name);
    li.appendChild(date);
    li.appendChild(name);
    li.appendChild(phone);
    li.appendChild(partysize);
    li.appendChild(request);
    li.appendChild(tablenumber);
    li.appendChild(mydate);
    li.appendChild(year);
    li.appendChild(month);
    li.appendChild(day);
    li.appendChild(cross);

    bookingList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('2020').doc(id).delete();
    });
}

// getting data
db.collection('2020').doc().get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderBooking(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('2020').add({
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
    });
    form.date.value = '';
    form.name.value = '';
    form.phone.value = '';
    form.partysize.value = '';
    form.request.value = '';
    form.tablenumber.value = '';
    form.year.value  = '';
    form.month.value = '';
    form.mydate.value = '';
});

// real-time listener
db.collection('2020').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        // console.log(change.doc.data());
        if(change.type == 'added'){
            renderBooking(change.doc);
        } else if (change.type == 'removed'){
            let li = bookingList.querySelector('[data-id=' + change.doc.id + ']');
            bookingList.removeChild(li);
        }
    });
});
db.collection('2020').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        // console.log(change.doc.data());
        if(change.type == 'added'){
            renderAccount(change.doc);
        } else if (change.type == 'removed'){
            let tr = tbl_booking_list.querySelector('[data-id=' + change.doc.id + ']');
            tbl_booking_list.removeChild(tr);
        }
    });
});
// updating records (console demo)
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




db.collection('2020').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    renderAccount(doc);
                })
            })

            const accountList = document.querySelector('#tbl_booking_list') ;
            function renderAccount(doc){
                let tr = document.createElement('tr');
                let td_date = document.createElement('td');
                let td_name = document.createElement('td');
                let td_phone = document.createElement('td');
                let td_partysize = document.createElement('td');
                let td_request = document.createElement('td');
                let td_tablenumber = document.createElement('td');
                let td_mydate = document.createElement('td');

                tr.setAttribute('data-id', doc.id);
                td_date.textContent = doc.data().date;
                td_name.textContent = doc.data().name;
                td_phone.textContent = doc.data().phone;
                td_partysize.textContent = doc.data().partysize;
                td_request.textContent = doc.data().request;
                td_tablenumber.textContent = doc.data().tablenumber;
                td_mydate.textContent = doc.data().mydate;

                tr.appendChild(td_date);
                tr.appendChild(td_name);
                tr.appendChild(td_phone);
                tr.appendChild(td_partysize);
                tr.appendChild(td_request);
                tr.appendChild(td_tablenumber);
                tr.appendChild(td_mydate);

                accountList.appendChild(tr);

            }

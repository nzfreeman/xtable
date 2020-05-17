const bookingList = document.querySelector('#booking-list');
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
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    date.textContent = doc.data().date;
    name.textContent = doc.data().name;
    phone.textContent = doc.data().phone;
    partysize.textContent = doc.data().partysize;
    request.textContent = doc.data().request;
    tablenumber.textContent = doc.data().tablenumber;
    cross.textContent = 'del';

    li.appendChild(name);
    li.appendChild(date);
    li.appendChild(name);
    li.appendChild(phone);
    li.appendChild(partysize);
    li.appendChild(request);
    li.appendChild(tablenumber);
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
// db.collection('2020').doc().get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderBooking(doc);
//     });
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('2020').add({
        date: form.date.value,
        name: form.name.value,
        phone: form.phone.value,
        year: form.year.value,
        month: form.month.value,
        day: form.day.value,
        mydate: form.mydate.value,
        partysize: form.partysize.value,
        request: form.request.value,
        tablenumber: form.tablenumber.value
    });
    form.date.value = '';
    form.name.value = '';
    form.phone.value = '';
    form.partysize.value = '';
    form.request.value = '';
    form.tablenumber.value = '';

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

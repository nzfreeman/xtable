const booklist = document.querySelector('#output_list');
const form = document.querySelector('#add-booking');

//create element and render list
function renderBooklist(doc){
    let li = document.createElement('li');
    let year = document.createElement('span');
    let month = document.createElement('span');
    let day = document.createElement('span');
    let table = document.createElement('span');
    let name = document.createElement('span');
    let time = document.createElement('span');
    let phone = document.createElement('span');
    let size = document.createElement('span');
    let request = document.createElement('span');
    let weekday = document.createElement('span');
    let cross = document.createElement('div');


    li.setAttribute('data-id', doc.id);
    year.textContent = doc.data().year;
    month.textContent = doc.data().month;
    day.textContent = doc.data().day;
    table.textContent = doc.data().table;
    name.textContent = doc.data().name;
    time.textContent = doc.data().time;
    phone.textContent = doc.data().phone;
    size.textContent = doc.data().size;
    request.textContent = doc.data().request;
    weekday.textContent = doc.data().weekday;
    cross.textContent = 'del';

    li.appendChild(year);
    li.appendChild(month);
    li.appendChild(day);
    li.appendChild(table);
    li.appendChild(name);
    li.appendChild(time);
    li.appendChild(phone);
    li.appendChild(size);
    li.appendChild(weekday);
    li.appendChild(request);
    li.appendChild(cross);

    booklist.appendChild(li);
  }


// function getdatafromFirestore() {
  db.collection('booking').get().then((snapshot) => {
snapshot.docs.forEach(doc => {
  renderBooklist(doc);
});
});
// }
//saving data
form.addEventListener('submit',(e)=> {
  e.preventDefault();
  db.collection('booking').add({
    name2: form.name2.value,
    city: form.city.value
  })
    from.name2.value='';
    from.city.value='';

})

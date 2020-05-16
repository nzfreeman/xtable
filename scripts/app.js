
const booking_list = document.querySelector("output");
function renderBooking(doc){
  let li = document.createElement("li");
  let name = document.createElement("span");
  let country = document.createElement("span");

  li.setAttribute('data-id',doc.id);
  name.textContent = doc.data().name;
  country.textContent = doc.data().country;

  li.appendChild(name);
  li.appendChile(country);
  cafeList.appendChild(li);
}
db.collection("06").get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderBooking(doc);
  });
});

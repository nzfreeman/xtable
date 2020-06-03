function tableTest (){
  var edit1 = document.createElement('div');
edit1.textContent = "edit";

}

function renderTableHead(){
  let thead = document.createElement('thead');
  let th_date = document.createElement('th');
  let th_name = document.createElement('th');
  let th_phone = document.createElement('th');
  let th_partysize = document.createElement('th');
  let th_request = document.createElement('th');
  let th_tablenumber = document.createElement('th');
  let th_time = document.createElement('th');
  let th_edit = document.createElement('th');
  th_date.textContent = "Date";
  th_name.textContent = "Name";
  th_phone.textContent = "Phone";
  th_partysize.textContent = "Party Size";
  th_request.textContent = "Request";
  th_time.textContent = "Time";
  th_tablenumber.textContent = "Table Number";
  th_edit.textContent = "Edit";
  thead.appendChild(th_date);
  thead.appendChild(th_time);
  thead.appendChild(th_name);
  thead.appendChild(th_phone);
  thead.appendChild(th_partysize);
  thead.appendChild(th_request);
  thead.appendChild(th_tablenumber);
  thead.appendChild(th_edit);
  tbl_booking_list.appendChild(thead);
}

function renderBooking(doc) {
  // var elmtTable = document.getElementById('Ttbl_booking_list');
  // var tableRows = elmtTable.getElementsById("tr");
  // var rowCount = tableRows.length;
  // for (var x = rowCount - 1; x > 0; x--) {
  //     elmtTable.removeChild(tableRows[x]);
  //   }
  let tr = document.createElement('tr');
  let td_date = document.createElement('td');
  let td_name = document.createElement('td');
  let td_phone = document.createElement('td');
  let td_partysize = document.createElement('td');
  let td_request = document.createElement('td');
  let td_tablenumber = document.createElement('td');
  let td_time = document.createElement('td');
  let td_edit = document.createElement('td'); //edit창 테이블 생성변수
  let td_div = document.createElement('div');//테이블안에 div생성변수
  let td_button = document.createElement('button'); //button 생성 변수

  tr.setAttribute('data-id', doc.id);
  td_date.textContent = doc.data().date;
  td_time.textContent = doc.data().time;
  td_name.textContent = doc.data().name;
  td_phone.textContent = doc.data().phone;
  td_partysize.textContent = doc.data().partysize;
  td_request.textContent = doc.data().request;
  td_tablenumber.textContent = doc.data().tablenumber;

  // //Edit 테이블에 들어갈 내용
  // td_edit.td_div="test";
  // td_edit.textContent = "edit";
  // td_button.innerHTML="Editbutton";
  // td_edit.setAttribute("type", "button");

  tr.appendChild(td_date);
  tr.appendChild(td_time);
  tr.appendChild(td_name);
  tr.appendChild(td_phone);
  tr.appendChild(td_partysize);
  tr.appendChild(td_request);
  tr.appendChild(td_tablenumber);
  tr.appendChild(td_edit);
  // tr.appendChild(td_div);
  tbl_booking_list.appendChild(tr);

}

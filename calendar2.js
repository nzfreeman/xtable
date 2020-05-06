//이 코드를 사용, 무단 배포 하는 것은 내부의 주석은 삭제하지 않았을 때만 가능합니다.



function kCalendar(id, date) {

var kCalendar = document.getElementById(id);



if( typeof( date ) !== 'undefined' ) {

date = date.split('-');

date[1] = date[1] - 1;

date = new Date(date[0], date[1], date[2]);

} else {

var date = new Date();

}

var currentYear = date.getFullYear();

//년도를 구함



var currentMonth = date.getMonth() + 1;

//연을 구함. 월은 0부터 시작하므로 +1, 12월은 11을 출력



var currentDate = date.getDate();

//오늘 일자.



date.setDate(1);

var currentDay = date.getDay();

//이번달 1일의 요일은 출력. 0은 일요일 6은 토요일



var dateString = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');

var lastDate = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

if( (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0 )

lastDate[1] = 29;

//각 달의 마지막 일을 계산, 윤년의 경우 년도가 4의 배수이고 100의 배수가 아닐 때 혹은 400의 배수일 때 2월달이 29일 임.



var currentLastDate = lastDate[currentMonth-1];

var week = Math.ceil( ( currentDay + currentLastDate ) / 7 );

//총 몇 주인지 구함.



if(currentMonth != 1)

var prevDate = currentYear + '-' + ( currentMonth - 1 ) + '-' + currentDate;

else

var prevDate = ( currentYear - 1 ) + '-' + 12 + '-' + currentDate;

//만약 이번달이 1월이라면 1년 전 12월로 출력.



if(currentMonth != 12) 

var nextDate = currentYear + '-' + ( currentMonth + 1 ) + '-' + currentDate;

else

var nextDate = ( currentYear + 1 ) + '-' + 1 + '-' + currentDate;

//만약 이번달이 12월이라면 1년 후 1월로 출력.





if( currentMonth < 10 )

var currentMonth = '0' + currentMonth;

//10월 이하라면 앞에 0을 붙여준다.



var calendar = '';



calendar += '<div id="header">';

calendar += '			<span><a href="#" class="button left" onclick="kCalendar(\'' +  id + '\', \'' + prevDate + '\')"><</a></span>';

calendar += '			<span id="date">' + currentYear + '년 ' + currentMonth + '월</span>';

calendar += '			<span><a href="#" class="button right" onclick="kCalendar(\'' + id + '\', \'' + nextDate + '\')">></a></span>';

calendar += '		</div>';

calendar += '		<table border="0" cellspacing="0" cellpadding="0">';

calendar += '			<caption>' + currentYear + '년 ' + currentMonth + '월 달력</caption>';

calendar += '			<thead>';

calendar += '				<tr>;

calendar += '					<th class="sun" scope="row">일</th>';

calendar += '					<th class="mon" scope="row">월</th>';

calendar += '					<th class="tue" scope="row">화</th>';

calendar += '					<th class="wed" scope="row">수</th>';

calendar += '					<th class="thu" scope="row">목</th>';

calendar += '					<th class="fri" scope="row">금</th>';

calendar += '					<th class="sat" scope="row">토</th>';

calendar += '				</tr>;

calendar += '			</thead>';

calendar += '			<tbody>';



var dateNum = 1 - currentDay;



for(var i = 0; i < week; i++) {

calendar += '			<tr>';

for(var j = 0; j < 7; j++, dateNum++) {

if( dateNum < 1 || dateNum > currentLastDate ) {

calendar += '				<td class="' + dateString[j] + '"> </td>';

continue;

}

calendar += '				<td class="' + dateString[j] + '">' + dateNum + '</td>';

}

calendar += '			</tr>';

}



calendar += '			</tbody>';

calendar += '		</table>';



kCalendar.innerHTML = calendar;

}

// 
// 
// 단순한 달력주제에 코드는 상당히 깁니다.
// 
// 주석도 달아놨으니 차근차근 설명해드리겠습니다.
// 
// 
// 
// 먼저 function kCalendar라는 사용자 정의 함수를 만들었습니다.
// 
// 매개변수로는 id(달력이 들어갈 태그의 id)와 date(선택할 날짜 2015-3-27 등)이 있습니다.
// 
// 
// 
// kCalendar라는 변수에 매개변수로 얻은 id 값을 getElementById 메서드를 이용해서 지정해줍니다.
// 
// 
// 
// 
// 
// 1)
// 
// 그 다음 만약 date의 타입이 undefined가 아니라면(매개변수 date에 값이 있다면) date의 값을 -로 분리해줍니다.
// 
// 
// 
// date.split('-') 메서드는 date가 2015-3-27 였다면 date[0] = 2015, date[1] = 3, date[2] = 27과 같이 배열로 나눠줍니다.
// 
// 이렇게 나눠진 배열에서 date[1] = date[1] - 1;을 해줍니다.
// 
// 
// 
// 이런 연산을 하는 이유는 자바스크립트에서는 월(Month)를 0부터 시작해서 11로 끝나기 때문이죠.
// 
// 즉 0 = 1월 11 = 12월과 같이 됩니다.
// 
// 
// 
// date를 매개변수로 입력 받을 때는 3 = 3월로 입력 받았으니 자바스크립트에서 연산을 위해 -1 을 해줍니다.
// 
// 
// 
// 그 다음 new Date()로 새로운 date 값을 만듭니다.
// 
// 
// 
// 
// 
// 2)
// 
// 만약 1에서 date의 타입이 undefined 였다면 매개변수로 date가 없었던 것 이므로 new Date()를 통해서 오늘 날짜를 date 변수에 넣습니다.
// 
// 
// 
// 
// 
// 그 다음은 date 변수에서 currentYear, currentMonth, currentDate에 각각 년, 월, 일의 값을 가져오는데,
// 
// 아까 말했던 것처럼 Month는 기존 달 - 1의 값을 가지고 있었으므로 다시 +1을 해줍니다.
// 
// 
// 
// 이제 달력에서 보여줄 년월일은 구했으니, 이번 달의 첫 번째 요일이 어떤 요일인지를 알아내야합니다.
// 
// 요일을 알아내는 방법은 date.setDate(1)을 통해서 date 변수의 일자를 1일로 변경합니다.
// 
// 만약 date 변수의 연월일 값이 2015-3-27 이였다면 2015-3-1 로 바뀌게 됩니다.
// 
// 
// 
// 그 다음 getDay() 메서드를 통해서 현재 일자의 요일을 currentDay 변수에 넣습니다.
// 
// 여기서 date.getDay()의 반환 값은 0 = 일요일, 6 = 토요일입니다.
// 
// 2015-3-1의 currentDay 값은 0이 되는거죠.
// 
// 
// 
// 그 다음은 달력을 나타낼때 사용할 배열을 선언했습니다.
// 
// 먼저 dateString 배열은 각 요일에 대한 클래스를 지정하기 위해서 만든 배열로
// 
// getDay()의 반환 값이 0, 1, 2, 3, 4, 5, 6 이였던 것처럼 배열도 일요일부터 시작했습니다.
// 
// 
// 
// lastDate 배열은 각 월의 마지막 일자입니다.
// 
// 달력의 마지막 일자는 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 순이죠.
// 
// 하지만 여기서 변수가 하나 있습니다.
// 
// 
// 
// 윤년이 있는데요.
// 
// 윤년은 주로 4년마다 한번 있다고 알고 있지만 정확히는 4년에 한번이면서 100년이 아닐 때 (1904년은 윤년이지만, 1900년은 윤년이 아님.)
// 
// 혹은 400년에 한번 윤년입니다. (1900년은 윤년이 아니지만 2000년은 윤년임.)
// 
// 
// 
// 그러므로 만약 currentYear을 4로 나눴을 때의 나머지가 0이고, 100으로 나눴을 때의 나머지가 0이 아니거나
// 
// 400으로 나눴을 때 0이라면 lastDate[1] (2월 달)의 값을 29로 변경해줍니다.
// 
// 
// 
// 
// 
// 그리고 currentLastDate를 구해주는데 오늘 날짜가 2015-3-27 이라면 currentMonth가 3이므로
// 
// lastDate[currentMonth-1]을 해서 이번 달 마지막 일자를 구합니다.
// 
// 
// 
// 그 다음은 이번 달이 총 몇주인지를 구해야합니다.
// 
// 이후에 나올 반복문에서 사용해야하므로 먼저 구해놓는겁니다.
// 
// 
// 
// 계산 식은 currentDay(요일 값) + currentLastDate(마지막 일자)를 7로 나눈 값을 올림 해주면 나오게 됩니다.
// 
// 2015년 3월을 가지고 예를 들자면 (0 (요일 값) + 31 (마지막 일자)) / 7 = 4.42...가 나오네요.
// 
// 이걸 올림 해줬으니 5라는 값이 나오구요.
// 
// 이걸로 2015년 3월은 5주라는 것을 알아 냈습니다.
// 
// 
// 
// 
// 
// 이번에는 이전 달, 다음 달의 날짜를 구하기 위한 연산을 합니다.
// 
// 이 부분은 더 간단하게 가능할 것 같은데 일단 이렇게 만들어 뒀으니 이대로 설명하겠습니다.
// 
// 
// 
// 이전 버튼을 눌렀을 때 이전 달의 월이 1이 아니라면 2에서 12까지의 값이라는 말이므로 currentMonth에서 1을 뺍니다.
// 
// 하지만 이번 달이 1이라면 0월은 없으니 currentYear에서 1을 빼주고 월은 currentMonth 대신 12로 바꿔줬습니다.
// 
// 
// 
// 다음 버튼도 마찬가지로 만약 다음 달의 월이 12가 아니라면 1에서 12까지의 값이니 currentMonth에 1을 더하고, 12라면 13월이 없으니 currentYear에 1을 더해주고 월을 1로 바꿔줍니다.
// 
// 
// 
// if( currentMonth < 10 )
// 
// var currentMonth = '0' + currentMonth;
// 
// 
// 
// 이 부분은 자바스크립트에서 getMonth() 메서드를 통해 얻은 값은 앞에 0이 없어서(3월은 03으로 표현이 안됨) 넣어준 부분입니다.
// 
// 
// 
// 
// 
// 이제 진짜로 달력을 만드는 태그를 적어줍니다.
// 
// 먼저 div header에는 이전 달 버튼, 다음 달 버튼과 0000년 00월이라는 타이틀을 적어줬구요.
// 
// 이전 달 버튼과 다음 달 버튼에는 위에서 만든 prevDate와 nextDate를 썼습니다.
// 
// 여기 보면 처음에 봤던 id 매개변수도 존재하네요.
// 
// 
// 
// 여러 특수 기호 때문에 정신이 없겠지만, 실제로 태그에 적히는 부분은 kCalendar('id', 'date') 입니다.
// 
// 
// 
// div header가 끝나면 table이 나오게됩니다.
// 
// 본격적으로 달력을 입력하는데요.
// 
// th에는 각 요일을 적어주고, dateNum 변수에는 1 - currentDay (요일 값)을 적어줍니다.
// 
// 왜 이렇게 되는지는 더 아래서 알 수 있을껍니다.
// 
// 
// 
// 이제 반복문이 시작되는데요.
// 
// 여기서 위에서 구했던 week 변수 (이번 달의 주)가 사용됩니다.
// 
// week 값만큼 <tr> 태그를 만들려는거죠.
// 
// 
// 
// 아까 week는 5 였고 i = 0, i< week 이므로 여기서는 0부터 4까지 총 5번을 돌겠네요.
// 
// 첫 번째 for문 내부에서 <tr>을 적어주고, 한번 더 for문을 만나게 됩니다.
// 
// 
// 
// 여기서는 0부터 6까지 7번을 반복하게 되는데요.
// 
// 특이한 점은 j++, dateNum++가 함께 있다는 점입니다.
// 
// 
// 
// for문이 돌고나서 바로 if문이 실행되는데, if문의 조건을 살펴봅시다.
// 
// dateNum이 1보다 작거나, currentLastDate(마지막 일자) 보다 클 경우에 <td></td>의 내부엔 공백만 들어가고, continue를 실행합니다.
// 
// 
// 
// 이런 조건을 준 이유는 dateNum을 선언할 때 currentDay(요일 값) 만큼 빼줬기 때문입니다.
// 
// 이 연산을 통해서 첫 번째 일자가 제자리(2015-3-27 기준 일요일)로 갈 수 있습니다.
// 
// 
// 
// 만약 if문의 조건에 해당되지 않는다면 정상적인 반복문을 실행합니다.
// 
// 여기서는 <td></td> 내에 dateNum 값을 갖는데, dateNum 값은 1일~마지막 일까지의 값이 들어가게 됩니다.
// 
// 
// 
// 그리고 여기서 class 부분에 쓰인 dateString[j]은 위에서 마지막 일자를 갖는 배열을 선언하기 전에 만든 요일별 문자열 배열입니다.
// 
// 
// 
// 이제 여기까지 calendar 변수에 모두 집어넣었으니 innerHTML을 통해서 calendar 값을 출력합니다.
// 
// 그럼 지금까지 공부한 달력이 나오게됩니다.
// 
// 
// 
// 여기까지 무지 길게 느껴진 설명을 적어봤는데요.
// 
// 한번만 봐서는 이해가 잘 안될 거라 생각됩니다.
// 
// 
// 
// 하지만 몇 번 반복 해서 생각해보면 어떤 방식으로 작동되는지 조금은 감이 올테니 여러번 읽어보세요!
// 
// 어려운 점이나 수정이 필요한 점, 지적 사항 등은 댓글에 남겨주시면 감사하겠습니다^^
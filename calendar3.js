<script type="text/javascript">
<!--
//입력 날짜 체크
function checkRqDate(){

 var now = new Date();
 year = now.getYear();          // 현재 년도 가져오기
 month = now.getMonth()+1;        // 현재 월 가져오기 (+1)
 if((month+"").length < 2){         //월이 '7'로 찍히지 않고 '07'로 찍히도록 길이를 받아온다
      month = "0" +month;         //길이가 1이라면 앞에 0을 붙여서 '07'형태로 나오게 한다
 }
date = now.getDate();       // 현재 날짜 가져오기
 if((date+"").length < 2){         //일이 '7'로 찍히지 않고 '07'로 찍히도록 길이를 받아온다
  date = "0" +date;           //길이가 1이라면 앞에 0을 붙여서 '07'형태로 나오게 한다
 }
 today = year +""+ month +""+ date ;           //오늘 날짜 ex) 20080801

 

 var InputDate = document.frmWork.txtHpDate.value;    //입력된 날짜 받아오기
 var dateSplit = InputDate.split("-");         //입력값을 '-'을 기준으로 나누어 배열에 저장해 주는 함수 split

 

 year = dateSplit[0];      //첫번째 배열은 년
 month = dateSplit[1];  //월
 day = dateSplit[2];   //일

 InputDate = year +""+ month +""+ day;       //입력된 값을 더해준다.

 

 if (parseInt(InputDate) < parseInt(today) ){          //int형으로 변환하여 비교한다
      alert("오늘 날짜보다 이전 날짜입니다.");
      document.frmWork.txtHpDate.value = "";         //이전 날짜라면 입력폼 리셋처리
 }

}

 //-->
</script>



출처: https://javafactory.tistory.com/376 [FreeLife의 저장소]
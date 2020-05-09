
        /*   Jquery 예제
        Basic syntax is: $(selector).action()
        A $ sign to define/access jQuery
        A (selector) to "query (or find)" HTML elements
        A jQuery action() to be performed on the element(s)
    Examples:
    $(this).hide() - hides the current element.
    $("p").hide() - hides all <p> elements.
    $(".test").hide() - hides all elements with class="test".
    $("#test").hide() - hides the element with id="test".
    
    */

    // $(document).ready(function(){
    //         // jQuery methods go here...
    //    }); 

           // #datepicker 는 id명임. jquery의 셀렉터 문법은 $(" 선택할내용     " ).click(functon)
           
          
          
$( function() {
$("#datepicker").datepicker({ dateFormat: 'dd-mm-yy' }).val();
var currentDate = $( ".selector" ).datepicker( "getDate" );

    })

    
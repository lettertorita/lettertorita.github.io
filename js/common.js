$(document).ready(function(){
      var answerValue = 0;
      
     
      
    $("#copyButton").click(function(){
      $("apdl_code").select;
      document.execCommand('copy');
    });
    //-------
    $(".modalbox").fancybox();
    //--------------модальные окна задания длинны---------------
    $("#f_answer").submit(function(){return false;});
    $('input#f_answer_input').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
         var id = $(this).attr('id');
         var val = $(this).val();
         switch(id)
       {
             case 'f_answer_input':
                //var regExpLength = /^[a-z/A-Z.]+$/; 
                if(val == 'marg_a_rita_' && val != '')
                {
                    answerValue=val;
                    
                   $(this).removeClass('error').addClass('not_error');
                   $(this).next('.error-box').text('Теперь я убедился, что это именно ты! Скорее нажимай "Показать письмо"')
                                             .css('color','green')
                                             .animate({'paddingLeft':'10px'},400)
                                             .animate({'paddingLeft':'5px'},400);
                }

                else
                {
                   $(this).removeClass('not_error').addClass('error');
                   $(this).next('.error-box').html('Проверь еще раз!')
                                              .css('color','red')
                                              .animate({'paddingLeft':'10px'},400)
                                              .animate({'paddingLeft':'5px'},400);
                }
              break;
              
              

       } // end switch(...)

     }); // end blur()
    
   
    });
let validLetter = 0;
validationLetter = () => {
  if (document.getElementById('answer').getElementsByClassName('not_error').length>=1) {
validLetter = validLetter + 1;
visiblePost();

} else {
  visiblePost();
}

};
visiblePost = () => {
       if (document.getElementById('answer').getElementsByClassName('not_error').length<1){
        alert('Маргарита, будь внимательнее!');
       } else if (validLetter == 1) {
        let post = document.getElementById('post');
        post.innerHTML+=`<br><br>Итак, это я… Снова я.  Не ожидала? Если ты читаешь это, то моя безумная идея увенчалась успехом и я безмерно этому рад. 

<br><br>Сложно что-то написать, потому что мы совершенно не знаем друг друга, у нас нет общих знакомых, между нами были тысячи километров, да и не знали мы о существовании друг друга до недавнего сентябрьского вечера, но даже всё это не останавливает меня перед целью, которая многим показалась бы невозможной и недостижимой. Но как известно, ничего нереального не бывает, а этот мир чертовски мал.

<br><br>У меня всего один шанс произвести на тебя первое впечатление и этот единственный шанс я решил использовать для того, чтобы добиться простой цели - заставить тебя улыбнуться.  
<br><br>P.S. Мне очень приятно, что эти цветы попали тебе в руки. Надеюсь, они подняли тебе настроение в этот вечер и ты улыбаешься. Улыбка тебе очень идёт.<br><br>`;
          
        post.innerHTML+=`<div class="title">
    <center>
      Спасибо. Алексей   

    </center>
  </div>`;
       } else {
        alert('Послание уже появилось. Читай)');
       }
       
    }

        
           
   



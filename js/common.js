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
                var regExpLength = /^[a-z/A-Z.]+$/; 
                if(val == 'whitebirdspace' && val != '' && regExpLength.test(val))
                {
                    answerValue=val;
                    
                   $(this).removeClass('error').addClass('not_error');
                   $(this).next('.error-box').text('Ты права, Рита. Теперь ты знаешь кто я. Нажимай "Показать письмо"')
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
        post.innerHTML+=`<br>Да, да. Это я, твой недавний знакомый, Алексей)

<br><br>Я рад, Рита, что ты читаешь это небольшое письмо. Сложно что-то написать, потому что мы совершенно не знаем друг друга, у нас нет общих знакомых, между нами были тысячи километров, да и не знали мы друг друга до недавнего сентябрьского вечера, но даже всё это не останавливает меня перед моей идеей, которая кажется мне совсем нереальной, но как известно, ничего нереального не бывает.
 <br>У меня есть всего один шанс произвести на тебя первое впечатление и этот единственный шанс я решил использовать для того, чтобы добиться простой цели - заставить тебя улыбнуться.

<br><br>Прости, если вдруг я тебя заставил переживать, я лишь хотел удивить тебя и подарить приятных эмоций. 

<br><br><br>P.S. Мне очень приятно, что эти цветы попали тебе в руки. Надеюсь, они подняли тебе настроение в этот вечер и ты улыбаешься. Улыбка тебе очень идёт.`;
          
        post.innerHTML+=`<div class="title">
    <center>
      Спасибо. Алексей   

    </center>
  </div>`;
       } else {
        alert('Послание уже появилось. Читай)');
       }
       
    }

        
           
   



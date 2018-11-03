console.log('it wworks');

$(document).ready(function (){
      $('.btn').click(function(event){
             event.preventDefault() 
             console.log('Clicked btn');

             var email = $(".contact-email form-contro").val()
             var subject = $(".contact-subject form-control").val()
             var message = $(".contact-subject form-control").val()
             var statusElm = $('.status')
             statusElm.empty()

             if(email.length > 5 && email.includes('@') && email.includes('.')){
                   statusElm.append('<div>Email is valid</div>')
             } else{
                  statusElm.append('<div>Email is not valid</div>')
             }

             if(subject.length > 2) {
                  statusElm.append('<div>Subject is valid</div>')
             } else{
                  statusElm.append('<div>Subject is not valid</div>')
             }

             if(message.length > 20) {
                  statusElm.append('<div>Message is valid</div>')
             } else{
                  statusElm.append('<div>Message is not valid</div>')
             }
      });
});
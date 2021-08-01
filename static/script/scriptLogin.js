$(document).ready(function(){
    $('#logar').click(() => {

        let data = $("#formlogar").serialize();
        // data = {email = "teste@gmail.com", senha = "xxxx", ...}
        
        $.ajax({

            type: "POST",
            dataType: 'json',
            url: './database/scriptDatabase.py',
            async: true, 
            data: data,

        });

    });
})
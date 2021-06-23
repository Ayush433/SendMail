function sendMail(params){
    var tempParams ={   // object pass grni 
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };

    emailjs.send('gmail','template_w1ftjbe',tempParams)
    .then(function(res){
        console.log("success",res.status);
    })
}
$(function(){
    $("#btn , #btn1 , #btn2").on("click", function(event){
        event.preventDefault();
        $("#rulet").toggleClass("go");  

//         $("#btn , #btn1 , #btn2").attr('disabled', true);

//         setTimeout(function() {
//             $("#btn , #btn1 , #btn2").attr('disabled', false);
//         }, 17000);
        
       
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min + "deg";
        }
        
        var chislo = (getRandomInt(5000, 9000));
        console.log(chislo);
        document.documentElement.style.setProperty('--change', chislo);

    });

    $("#nav_burger").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});

function checkParams() {
    var numb = $('#enter').val();
     
    if(numb.length != 0 ) {
        $('#btn , #btn1 , #btn2').removeAttr('disabled');
    } else {
        $('#btn , #btn1 , #btn2').attr('disabled', 'disabled');
    }
}

function getRandomInt(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min + "deg";
}

$(function(){
    $("#btn , #btn1 , #btn2").on("click", function(event){
        event.preventDefault();
        var btnId = event.target.id;
        console.log(btnId);
       
        $(".elipse").removeClass("red green black");
        $('.elipse').text("");
        $(".progress").removeClass("close");
        $(".elipse").addClass("none");
        setTimeout (function(){   // Включаем elipse через 10 сек
            $('.elipse').text("Розыгрыш");
             $(".elipse").removeClass("none"); 
        }, 5000);
        setTimeout (function(){ //Присваиваем стили
            $("#rulet").css("transition" , "transform 7500ms cubic-bezier(0.42, 0, 1, 1)")
            $("#rulet").css("transform", "rotate(4800deg)");
            setTimeout (function(){
                $("#rulet").css("transition", "transform 7500ms cubic-bezier(0.32, 0.95, 0.45, 1)");
                $("#rulet").css("transform", "rotate(var(--change))" );
            }, 7500);
        }, 4000);
        
        setTimeout (function(){    
            $("#rulet").css("transition", "none 0s ease 0s");
            $("#rulet").css("transform", "rotate(var(--ura))" );
        }, 19000);
        //Таймер для Progress
        var seconds = $('#timer').text(),
        int;
        int = setInterval(function() { // запускаем интервал
        if (seconds > 1) {
          seconds--; // вычитаем 1
          $('#timer').text(seconds); // выводим получившееся значение в блок
        } else {
            clearInterval(int);
            $(".progress").addClass("close");
            seconds = $('#timer').text(5);          
        }
        }, 1000);
        //Временая блокировка кнопок
        $("#btn , #btn1 , #btn2").attr('disabled', true);
        $(".input").attr('disabled', true);
        setTimeout(function() {
            $(".input").attr('disabled', false);
            var numb = $('#enter').val();
            var numb2 = Number(numb);
            var balans = Number($('.inner_text').text());
            console.log(numb2);
            console.log(balans);
            if (numb2 <= balans){
                console.log("on");
                $("#btn , #btn1 , #btn2").attr('disabled', false);
            }else{
                console.log("off");
                $('#btn , #btn1 , #btn2').attr('disabled', 'disabled');
            }
        }, 19600);
        //Рандом
        var  chislo  = (getRandomInt(6000, 9000));
        console.log(chislo);
        document.documentElement.style.setProperty('--change', chislo + "deg");
        setTimeout(function() {
            var summa = Math.floor(chislo / 360),   
            ura = (summa * 360) - chislo,
            ura = - ura;
            console.log(summa);
            
            var arr = [ b=[],v=[],f=[],c=[],
            [346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,0,1,2,3,4,5,6,7,8],
            d=[],e=[],n=[],x=[],r=[],
            q=[],a=[], z=[], w=[],s=[],];
            
            //red  
            for (var j=153; j<=176; j++){b.push(j);}  
            for (var j=129; j<=152; j++){v.push(j);}        
            for (var j=81; j<=104; j++){f.push(j);}
            for (var j=33; j<=56; j++){c.push(j);}
            for (var j=298; j<=321; j++){d.push(j);}
            for (var j=250; j<=273; j++){e.push(j);} //6
            for (var j=201; j<=224; j++){n.push(j);}           
            //black
            for (var j=105; j<=128; j++){ x.push(j);}
            for (var j=57; j<=80; j++){r.push(j);}
            for (var j=9; j<=32; j++){ q.push(j);}
            for (var j=322; j<=345; j++){a.push(j);}
            for (var j=274; j<=297; j++){z.push(j);}
            for (var j=225; j<=249; j++){w.push(j);}
            for (var j=177; j<=200; j++){s.push(j);}
            console.log(arr);
            
            indext = (foobar(arr, ura))
            console.log(ura);
            console.log(indext);
            var vik = btnId;
           
            setTimeout(function() {
                setTimeout(function() {
                     $('.elipse').text(indext);
                },500);
                // Условие по выдачи background 
                if(indext >= 8){
                    $(".elipse").removeClass("none");
                    $(".elipse").css("transform", "translateX(-50%) rotateY(90deg)");
                    setTimeout(function(){             
                        (winMoney(vik ,"btn2" ,2));         
                        $(".elipse").addClass("black");
                        $(".elipse").css("transform", " translateX(-50%) rotateY(0deg)");
                        $(".alert").css("animation", "load .4s linear forwards");
                    },500);
                }
                else if(indext === 0){
                    $(".elipse").removeClass("none");
                    $(".elipse").css("transform", " translateX(-50%) rotateY(90deg)");
                    setTimeout(function() {
                        (winMoney(vik ,"btn1" , 14)); 
                        $(".elipse").addClass("green");
                        $(".elipse").css("transform", " translateX(-50%) rotateY(0deg)");
                        $(".alert").css("animation", "load .4s linear forwards");
                     },500);
                }
                else if ( indext <= 7 ){
                    $(".elipse").removeClass("none");
                    $(".elipse").css("transform", "translateX(-50%) rotateY(90deg)");
                    setTimeout(function() {
                        (winMoney(vik ,"btn" , 2)); 
                        $(".elipse").addClass("red");
                        $(".elipse").css("transform", " translateX(-50%) rotateY(0deg)");
                        $(".alert").css("animation", "load .4s linear forwards");
                    },500);
                }
            },15000);
            document.documentElement.style.setProperty('--ura',ura + "deg");
        },4000);  
    });
});

 //Кнопка бургер
$("#nav_burger").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    $("#active").toggleClass("active");
});
// Рандом
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min ;
}
// Расчет ставки Win / lose 
function winMoney(vik , btn , cbtn){
    var input = $('#enter').val(); 
    var balans =  Number($('.inner_text').text());
    if (vik === btn){
        $(".win").removeClass("none");
        balans = (balans - input) + (input * cbtn);
        $('.inner_text').text(balans);
        setTimeout(function(){
            $(".alert").css("animation", "load1 .4s linear forwards");
            setTimeout(function(){
                $(".win").addClass("none");
            },400);
        },2500);
    }else{
        balans = balans - input;
        $('.inner_text').text(balans);
        $(".lose").removeClass("none");
        setTimeout(function(){
            $(".alert").css("animation", "load1 .4s linear forwards");
            setTimeout(function(){
                $(".lose").addClass("none");
            },400);
        },2500);
    }  
}
// Условие для разблокировки кнопок 
function checkParams() {
    var numb = $('#enter').val();
    var numb2 = Number(numb);
    var balans = Number($('.inner_text').text());
    if((numb.length != 0 ) && (numb2 >=5)  && (numb2 <= balans)) {  
        // event.preventDefault();
        $('#btn , #btn1 , #btn2').removeAttr('disabled');
    } else {
        $('#btn , #btn1 , #btn2').attr('disabled', 'disabled');   
    }
}
// функция, не совсем понял как работает ,но принимает значения
function foobar(inputArray, searchValue) {
for (var i = 0, L = inputArray.length; i < L; i++) {
    var j = inputArray[i].indexOf(searchValue);
    if (j >= 0) {
        return i;
    };
};
return null;
};

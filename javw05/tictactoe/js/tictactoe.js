$(document).ready(function(){
    let turn = 0;
    const o ='o'
    const x ='x'

    const p1 = $('#p1');
    const p2 = $('#p2');
    const p3 = $('#p3');
    const p4 = $('#p4');
    const p5 = $('#p5');
    const p6 = $('#p6');
    const p7 = $('#p7');
    const p8 = $('#p8');
    const p9 = $('#p9');
    $.fn.reset = function(){
        $('#board li').text("+");
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        $('#board li').removeClass('disabled');
        trun = 0;
    }
    
    init()

    $.fn.checkWin = function (player) {
        if(p1.hasClass(player) && p2.hasClass(player) && p3.hasClass(player)||
        p4.hasClass(player) && p5.hasClass(player) && p6.hasClass(player)||
        p7.hasClass(player) && p8.hasClass(player) && p9.hasClass(player)||
        p1.hasClass(player) && p4.hasClass(player) && p7.hasClass(player)||
        p2.hasClass(player) && p5.hasClass(player) && p8.hasClass(player)||
        p3.hasClass(player) && p6.hasClass(player) && p9.hasClass(player)||
        p1.hasClass(player) && p5.hasClass(player) && p9.hasClass(player)||
        p3.hasClass(player) && p5.hasClass(player) && p7.hasClass(player)
         ){ 
             return true;
         }else{
             return false;
         }
         
    }
    
    function init(){
        $.fn.reset();
    }

    $('#board li').on('click', function() {
        if(turn%2==0 && !$(this).hasClass('disabled')){
        $(this).text(o);
        $(this).addClass('disabled o');
            if(turn>4){
            result()
            }
            turn++;
        }else if(turn%2 == 1 && !$(this).hasClass('disabled')){
            $(this).text(x);
            $(this).addClass('disabled x');
            if(turn>4){
                result()
                }
            turn++;
        }else{
            alert('已點過')
        }
    });


    $("#reset").on("click", function(){
        $.fn.reset();
        turn =0;
    })


    function result(){
        if($.fn.checkWin('o')){
            alert('Winner: o');
            $.fn.reset();
        }else if($.fn.checkWin('x')){
            alert('Winner: x');
            $.fn.reset(); 
        }else if(turn > 7){
            alert('平手')
        }
    }
});
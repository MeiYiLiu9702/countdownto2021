// set count down end time
var endTime = new Date("2021/01/01 00:00:00");
// Calculate left time.
var rest = new Number();
// countDown
function countDown(){
    var today = new Date();
    rest = Math.round(((endTime - today)/1000));
    // console.log(rest);
};

// content
function title(){
    $(".Title2020").append(
        $('<h1>').html(String("迎接2021" +'</br>'+ "自己的煙火自己放"))
    )
}
// Update the time and the action when time arrived.
function updateTime(){
    countDown()
    setInterval(countDown,1000);
    var today = new Date();
    var datetime = today.getFullYear()+  "/" +(today.getMonth()+1)  + "/"+  today.getDate() + "  "  + today.getHours() + ":"  + today.getMinutes() + ":" + today.getSeconds();
    $(".animation").html(
        $('<div>')
        .addClass('countDownSpace')
        .append(
            $('<h1>').html(String("現在時間"))            
        ).append(
            $('<h1>').addClass('time_sy').html(datetime)            
        ).append('</br>'
        ).append(
            $('<h1>').html(String("距離迎接2021年還剩下 (秒)"))
        ).append(
            $('<h1>').addClass('time').html(String(rest))
        )

        );
}
function checkTime(){
    var now = new Date();
    countDown();
    if(rest >= 0){
        updateTime();
        setInterval(updateTime,1000);
        countDown();
        setInterval(countDown,1000);
        var doo = setInterval(checkTime,1000);
        if(rest < 0){
            clearInterval(doo) 
        }
    }else{
        $('.container').html(
            '<audio src="HappyNewYearSong.mp3" autoplay loop></audio>'
            ).append(
                $('<div>').addClass('Title2020').append(
                    $('<h1>').html(String("Happy New Year!!!"))
                ).append(
                    $('<div>'
                    ).html('<video autoplay width="100%"><source src="fireworks_video.mp4" type="video/mp4"></video>')
                )
        )
        console.log('here!')
    }
}
    
$(function(){
    // time check
    var now = new Date()
    title();
    checkTime();

});





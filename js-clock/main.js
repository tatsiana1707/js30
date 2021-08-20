function date_time() {   
    var datetime = new Date();
    var days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", 
            "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var day = datetime.getDate();
    var hours = datetime.getHours();
    var minutes = datetime.getMinutes();
    var seconds = datetime.getSeconds();
    var year = datetime.getFullYear();
    if(seconds < 10) {
    seconds = '0' + seconds;
  } if( hours  < 10) {
    hours  = '0' +  hours ;
  } if(minutes < 10) {
    minutes = '0' + minutes;
  }
    document.getElementById('date').innerHTML  = hours + ":" + minutes + ":" + seconds + " " + days[datetime.getDay()] + "," + " " + day + " "  + months[datetime.getMonth()] + " " + year+ "года";
   
}


setInterval(date_time,

 1000);

 
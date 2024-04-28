var today = new Date();  //today's full date
var currentMonth = today.getMonth();  //today's month
var currentYear = today.getFullYear(); //today's year
var currentDay = today.getDate(); //today's day
indexs=0;

date_box("1",today);
//insert the initial date in the date box
$('.date > span').html(function(index, oldHtml) {
  return  today.toDateString()+oldHtml ;
});

generate(today,currentDay,currentMonth,currentYear);

$("#left_arrow").click(function(){
  indexs = -1;
  getdate(today, indexs);
});

$("#right_arrow").click(function(){
  indexs = 1;
  getdate(today, indexs, generate);
});

function getdate(today, indexs){
  currentMonth = currentMonth + indexs;
  currentDay = 1;

  // Update cur_day and cur_month based on the modified currentDay and currentMonth
 
 
  if (currentMonth <1) {
    currentYear--;
    currentMonth = 12;
    currentDay = new Date(currentYear, currentMonth, 0).getDate();
  }
  else if ( currentMonth>12){
    currentYear++;
    currentMonth = 1;
    currentDay = 1;
  }
  

  today = new Date(currentYear, currentMonth, currentDay);

  
  console.log(today, currentDay, currentMonth, currentYear, "chhhh");
  
  generate(today, currentDay, currentMonth, currentYear);
}

function generate(today, currentDay, currentMonth, currentYear){
  $('.date > span').html(function(index, oldHtml) {
    return today.toDateString();
  });

  
  FirstDay = new Date(currentYear, currentMonth, 1).getDay();
  LastDay = new Date(currentYear, currentMonth + 1 , 0).getDate();
 
  console.log(today,currentDay,currentMonth);




  console.log('Today is ' + FirstDay, LastDay);
  index=7+FirstDay;
  j=0;

  for (var i = 0; i < LastDay; i++) {
    j++;
    index++ ;
    elem= ".item"+ index;
   
    $(elem).html("<span>"+j+"</span>"+"<div id='tag_contain'><div class='tags rob' >Robotics</div><div class='tags art' >Art</div><div class='tags cod'>Coding</div><div class='tags mov'>Movies</div>    <div class='tags gam' >Gaming</div>    <div class='tags spo' >Sports</div>    <div class='tags con' >Conferences</div>    <div class='tags sof' >Soft Skills</div>    <div class='tags fro' >Front-End</div>    <div class='tags bac'>Back-End</div>    <div class='tags aer' >Aerospace</div>    <div class='tags oth' >Others</div>   </div>");
  }


  j= new Date(currentYear, currentMonth , 0).getDate();
  index=7+FirstDay;
  for (var i = FirstDay; i > 0; i--) {
    elem= ".item"+ index;
    
    $(elem).html("<span>"+j+"</span>"+"<div id='tag_contain'><div class='tags rob' >Robotics</div><div class='tags art' >Art</div><div class='tags cod'>Coding</div><div class='tags mov'>Movies</div>    <div class='tags gam' >Gaming</div>    <div class='tags spo' >Sports</div>    <div class='tags con' >Conferences</div>    <div class='tags sof' >Soft Skills</div>    <div class='tags fro' >Front-End</div>    <div class='tags bac'>Back-End</div>    <div class='tags aer' >Aerospace</div>    <div class='tags oth' >Others</div>   </div>");
    j--;
    index--;
  }

  j= 1;
  index=LastDay+8+FirstDay;
  console.log(LastDay +" check");
    for (var i = LastDay; i < 34; i++) {
      elem= ".item"+ index;
      
      $(elem).html("<span>"+j+"</span>"+"<div id='tag_contain'><div class='tags rob' >Robotics</div><div class='tags art' >Art</div><div class='tags cod'>Coding</div><div class='tags mov'>Movies</div>    <div class='tags gam' >Gaming</div>    <div class='tags spo' >Sports</div>    <div class='tags con' >Conferences</div>    <div class='tags sof' >Soft Skills</div>    <div class='tags fro' >Front-End</div>    <div class='tags bac'>Back-End</div>    <div class='tags aer' >Aerospace</div>    <div class='tags oth' >Others</div>   </div>");
      j++;
      index++;
    }

}



$(".box_day").click(function(){
  val=$(this).find("span").html();
  
  cur_month= currentMonth;
  arr1=["31","30","29","28","27","26","25"];
  arr2=["L1", "L2", "L3","L4","L5","L6","L7"];
 
  if ((arr1.includes(val) ) && (arr2.includes($(this).attr('id')) )){
    cur_month= cur_month-1;
    
  }
  if (( ["1","2","3","4","5","6"].includes(val)) && ( ["L8", "L9", "L10","L11","L12","L13","L14"].includes($(this).attr('id')))){
    cur_month= cur_month+1;
  }
  day= new Date(currentYear,cur_month,val);
  $('.date > span').html(function() {
    return day.toDateString();
  });
 date_box(val,day);

})
function date_box(val,day){
  var weekdayIndex = day.getDay(); 
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var weekday = weekdays[weekdayIndex]; 
  $("#date_display > h2").html(weekday);
  $("#date_display > h1").html(val);
}


function event_generate(){
  console.log("future work");
}
var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

$('.date').html(today.toDateString());
console.log(today.toDateString());



FirstDay = new Date(currentYear, currentMonth, 1).getDay();
LastDay = new Date(currentYear, currentMonth + 1 , 0).getDate();




console.log('Today is ' + FirstDay, LastDay);
index=7+FirstDay;
j=0;

for (var i = 0; i < LastDay; i++) {
    j++;
    index++ ;
    elem= ".item"+ index;
    console.log(elem,LastDay,j);
    $(elem).html(j);
  }


j= new Date(currentYear, currentMonth , 0).getDate();
index=7+FirstDay;
  for (var i = FirstDay; i > 0; i--) {
    elem= ".item"+ index;
    console.log(elem+"special1");
    $(elem).html(j);
    j--;
    index--;
  }

j= 1;
index=LastDay+8+FirstDay;
  console.log(LastDay +" check");
    for (var i = LastDay; i < 34; i++) {
      elem= ".item"+ index;
      console.log(elem+"special2");
      $(elem).html(j);
      j++;
      index++;
    }



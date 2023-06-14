//Use this for DOM ONLY!!!!!!!!!!!!

//----------schedule DOM-------------
let selection = document.getElementsByClassName('week_button');
let tables = document.getElementsByClassName('schedule_table');

selection[0].addEventListener('click', function(){
    tables[0].className = "schedule_table";
    tables[1].className = "schedule_table hide";
    tables[2].className = "schedule_table hide";
});

selection[1].addEventListener('click', function(){
    tables[1].className = "schedule_table";
    tables[0].className = "schedule_table hide";
    tables[2].className = "schedule_table hide";
});
selection[2].addEventListener('click', function(){
    tables[2].className = "schedule_table";
    tables[0].className = "schedule_table hide";
    tables[1].className = "schedule_table hide";
});
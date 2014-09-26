$(document).ready(function(){
    $('#eq1 .equalizer').equalizer({
        timeout:1000,
        colWidth:1 
    }).runEqualizer();

    $('#eq2 .equalizer').equalizer({
        timeout:2000,
        colWidth:2 
    }).runEqualizer();

    $('#eq3 .equalizer').equalizer({
        timeout:3000,
        colWidth:3 
    }).runEqualizer();   
})
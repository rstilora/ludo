// pasa count array
var myArray = ["1", "2", "3", "4", "5", "6"];

// globle pasa count 
var pasaChal = '';

var katikholo = false;

var katiId = ''; 

var userHasBajji = 0;
var katiRun = '';
var katiStartFrom = '';
var katiTurnFrom = '';
var katiLal = '';


$('body').on("click", "div.ludu_passas", function (e) {

    pasaChal = myArray[Math.floor(Math.random() * myArray.length)];

    $(this).attr("data-chal-count", pasaChal);
    katiRun = '';
    die()
});




function die() {


    if (userHasBajji == 4) {

        userHasBajji = 1;

    }
    else {
        userHasBajji++;
    }


    if (userHasBajji) {

        if (userHasBajji == '1') {
        
            katiRun = "rd"
            katiStartFrom = "t14"
            katiTurnFrom = "t12"
          }

        if (userHasBajji == '2') {
            katiRun = "gn";
            katiStartFrom = "t27";
            katiTurnFrom = "t25"
        }

        if (userHasBajji == '3') {
            katiRun = "yl";
            katiStartFrom = "t40";
            katiTurnFrom = "t38"
        }

        if (userHasBajji == '4') {

            katiRun = "bl";
            katiStartFrom = "t1";
            katiTurnFrom = "t51"
        }

    }
    
    alert('Kati Run =' + katiRun + ' katiStartFrom =' + katiStartFrom);
    clcik()
    
   
}

// Chal kati
function clcik() {
    $('body').on('click', '.kati', function (e) {

        //alert($(this).hasClass(katiRun))

        if ($(this).hasClass(katiRun)) {
            $thisId = $(this).attr('id');
            console.log($thisId)
            Chal($thisId, katiStartFrom, katiTurnFrom);

        }

    });
}

 function Chal($thisId, katiStartFrom, katiTurnFrom) {
        console.log($thisId)
        //console.log(pasaChal);

        katiId = $thisId;
        var katiIcon = $('#' + katiId).prop('outerHTML');
        //console.log(katiIcon);

        
        var boardAvailableKati = $('#' + katiId).parent().parent().attr('data-kati-count');



        if (boardAvailableKati > 0) {
            if (pasaChal > 0) {


                katikholo = true;

                console.log(katiStartFrom);
                katiKholore(katiStartFrom, katikholo, katiIcon);
                boardAvailableKati = eval(boardAvailableKati) - 1;

                $('#' + $thisId).parent().parent().attr('data-kati-count', boardAvailableKati)

                console.log(boardAvailableKati)

                $('#' + $thisId).remove();
                return false;
            }
        }

        else if (pasaChal > 0) {



            // get track cloumn id

            var theId = $('#' + $thisId).parent('.column').attr("id");
            var theTracknum = theId.match(/\d+$/)[0];




            // get set track stepsCount 

            var forStepsCount = $('#' + katiId).attr('data-step-count');





            forStepsCount = eval(forStepsCount) + eval(pasaChal);



            $('#' + theId).children('#' + katiId).remove();

            Chalar(pasaChal, katiId, katiIcon, theTracknum, forStepsCount);

            pasaChal = '0';
        }
    }







// katikholo 
function katiKholore(katiStartFrom, katiKholoHan, katiIcon) {
    console.log(katiStartFrom);
    $('#' + katiStartFrom).append($(katiIcon).attr('data-step-count', '1'));

    katikholo = false;

}

// Chal

function Chalar(chalCount, katiId, Chalkati, removeFrom, stepsCount) {
    chalCount = eval(chalCount) + eval(removeFrom);

    //console.log('chalCount' + chalCount);
    //console.log('stepsCount' + stepsCount)


    //if (stepsCount > 51) {
    //    if (stepsCount > 56) {
    //        alert('Passa is Not Valid for this Kati');
    //        return false;
    //    }
    //    else {
    //        $('#b' + chalCount).append(Chalkati);
    //    }
    //}
    //else {

    //    $('#t' + chalCount).append(Chalkati);

    //}
    $('#t' + chalCount).append(Chalkati);
    $('#' + katiId).attr('data-step-count', stepsCount);

}
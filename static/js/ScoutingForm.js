(function() {
        $(function () {
            fuelHighInit();
            fuelLowInit();
            gearsInit();
            foulsInit();
            hopperInit();
            checkSubmittedForm();

        })

        function fuelHighInit() {
            var fuelHigh = 0;
            $('#fuelHigh').html(fuelHigh);
            $('#highFuelScoredSend').val(fuelHigh);

            $('#fuelHighInc').click(function() {
                fuelHigh++;
                if($('#fuelHighInc').hasClass("btn-danger")){
                $('#numberShootsHigh').removeClass("panel-danger");
                $('#numberShootsHigh').addClass("panel-default");
                $('#fuelHighDec').removeClass("btn-danger");
                $('#fuelHighInc').removeClass("btn-danger");
                $('#fuelHighDec').addClass("btn-primary");
                $('#fuelHighInc').addClass("btn-primary");
                $('#fuelHighDec10').removeClass("btn-danger");
                $('#fuelHighInc10').removeClass("btn-danger");
                $('#fuelHighDec10').addClass("btn-primary");
                $('#fuelHighInc10').addClass("btn-primary");
                }
                $('#fuelHigh').html(fuelHigh);
                $('#highFuelScoredSend').val(fuelHigh);
            });
            $('#fuelHighInc10').click(function() {
                fuelHigh+=10;
                if($('#fuelHighInc').hasClass("btn-danger")){
                $('#numberShootsHigh').removeClass("panel-danger");
                $('#numberShootsHigh').addClass("panel-default");
                $('#fuelHighDec').removeClass("btn-danger");
                $('#fuelHighInc').removeClass("btn-danger");
                $('#fuelHighDec').addClass("btn-primary");
                $('#fuelHighInc').addClass("btn-primary");
                $('#fuelHighDec10').removeClass("btn-danger");
                $('#fuelHighInc10').removeClass("btn-danger");
                $('#fuelHighDec10').addClass("btn-primary");
                $('#fuelHighInc10').addClass("btn-primary");
                }
                $('#fuelHigh').html(fuelHigh);
                $('#highFuelScoredSend').val(fuelHigh);
            });
            $('#fuelHighDec').click(function() {
                if(fuelHigh>0){
                        fuelHigh--;
                }else{
                $('#numberShootsHigh').addClass("panel-danger");
                $('#numberShootsHigh').removeClass("panel-default");
                $('#fuelHighDec').addClass("btn-danger");
                $('#fuelHighInc').addClass("btn-danger");
                $('#fuelHighDec').removeClass("btn-primary");
                $('#fuelHighInc').removeClass("btn-primary");
                $('#fuelHighDec10').addClass("btn-danger");
                $('#fuelHighInc10').addClass("btn-danger");
                $('#fuelHighDec10').removeClass("btn-primary");
                $('#fuelHighInc10').removeClass("btn-primary");
                }
                $('#fuelHigh').html(fuelHigh);
                $('#highFuelScoredSend').val(fuelHigh);
            });
            $('#fuelHighDec10').click(function() {
                if(fuelHigh>9){
                        fuelHigh-=10;
                }else{
                fuelHigh=0;
                $('#numberShootsHigh').addClass("panel-danger");
                $('#numberShootsHigh').removeClass("panel-default");
                $('#fuelHighDec').addClass("btn-danger");
                $('#fuelHighInc').addClass("btn-danger");
                $('#fuelHighDec').removeClass("btn-primary");
                $('#fuelHighInc').removeClass("btn-primary");
                $('#fuelHighDec10').addClass("btn-danger");
                $('#fuelHighInc10').addClass("btn-danger");
                $('#fuelHighDec10').removeClass("btn-primary");
                $('#fuelHighInc10').removeClass("btn-primary");
                }
                $('#fuelHigh').html(fuelHigh);
                $('#highFuelScoredSend').val(fuelHigh);
            });
            }
            function fuelLowInit() {
            var fuelLow = 0;
            $('#fuelLow').html(fuelLow);
            $('#lowFuelScoredSend').val(fuelLow);

            $('#fuelLowInc').click(function() {
                    fuelLow++;
                if($('#fuelLowInc').hasClass("btn-danger")){
                $('#numberShootsLow').removeClass("panel-danger");
                $('#numberShootsLow').addClass("panel-default");
                $('#fuelLowDec').removeClass("btn-danger");
                $('#fuelLowInc').removeClass("btn-danger");
                $('#fuelLowDec').addClass("btn-primary");
                $('#fuelLowInc').addClass("btn-primary");
                $('#fuelLowDec10').removeClass("btn-danger");
                $('#fuelLowInc10').removeClass("btn-danger");
                $('#fuelLowDec10').addClass("btn-primary");
                $('#fuelLowInc10').addClass("btn-primary");
                }
                $('#fuelLow').html(fuelLow);
                $('#lowFuelScoredSend').val(fuelLow);
            });
            $('#fuelLowInc10').click(function() {
                    fuelLow+=10;
                if($('#fuelLowInc').hasClass("btn-danger")){
                $('#numberShootsLow').removefoulsClass("panel-danger");
                $('#numberShootsLow').addClass("panel-default");
                $('#fuelLowDec').removeClass("btn-danger");
                $('#fuelLowInc').removeClass("btn-danger");
                $('#fuelLowDec').addClass("btn-primary");
                $('#fuelLowInc').addClass("btn-primary");
                $('#fuelLowDec10').removeClass("btn-danger");
                $('#fuelLowInc10').removeClass("btn-danger");
                $('#fuelLowDec10').addClass("btn-primary");
                $('#fuelLowInc10').addClass("btn-primary");
                }
                $('#fuelLow').html(fuelLow);
                $('#lowFuelScoredSend').val(fuelLow);
            });
            $('#fuelLowDec').click(function() {
                if(fuelLow>0){
                        fuelLow--;
                }else{
                $('#numberShootsLow').addClass("panel-danger");
                $('#numberShootsLow').removeClass("panel-default");
                $('#fuelLowDec').addClass("btn-danger");
                $('#fuelLowInc').addClass("btn-danger");
                $('#fuelLowDec').removeClass("btn-primary");
                $('#fuelLowInc').removeClass("btn-primary");
                $('#fuelLowDec10').addClass("btn-danger");
                $('#fuelLowInc10').addClass("btn-danger");
                $('#fuelLowDec10').removeClass("btn-primary");
                $('#fuelLowInc10').removeClass("btn-primary");
                }
                $('#lowFuelScoredSend').val(fuelLow);
                $('#fuelLow').html(fuelLow);
            });

            $('#fuelLowDec10').click(function() {
                if(fuelLow>9){
                        fuelLow-=10;
                }else{
                    fuelLow=0;
                $('#numberShootsLow').addClass("panel-danger");
                $('#numberShootsLow').removeClass("panel-default");
                $('#fuelLowDec').addClass("btn-danger");
                $('#fuelLowInc').addClass("btn-danger");
                $('#fuelLowDec').removeClass("btn-primary");
                $('#fuelLowInc').removeClass("btn-primary");
                $('#fuelLowDec10').addClass("btn-danger");
                $('#fuelLowInc10').addClass("btn-danger");
                $('#fuelLowDec10').removeClass("btn-primary");
                $('#fuelLowInc10').removeClass("btn-primary");
                }
                $('#fuelLow').html(fuelLow);
                $('#lowFuelScoredSend').val(fuelLow);

            });
            }
            function foulsInit(){
            var fouls = 0;
            $('#fouls').html(fouls);
            $('#foulSend').val(fouls);

            $('#foulInc').click(function(){
                fouls++;
                if($('#foulInc').hasClass("btn-danger")){
                    $('#foulsDone').removeClass("panel-danger");
                    $('#foulsDone').addClass("panel-default");
                    $('#foulDec').removeClass("btn-danger");
                    $('#foulInc').removeClass("btn-danger");
                    $('#foulInc').addClass("btn-primary");
                    $('#foulDec').addClass("btn-primary");
                }
                if(fouls>0){
                    $('#foulsDone').removeClass("panel-default");
                    $('#foulsDone').addClass("panel-warning");
                    $('#foulDec').removeClass("btn-primary");
                    $('#foulInc').removeClass("btn-primary");
                    $('#foulInc').addClass("btn-warning");
                    $('#foulDec').addClass("btn-warning");
                }

                $('#fouls').html(fouls);
                $('#foulSend').val(fouls);
            });

            $('#foulDec').click(function() {
                if(fouls>0){
                    fouls--;
                }else{
                    $('#foulsDone').addClass("panel-danger");
                    $('#foulsDone').removeClass("panel-default");
                    $('#foulDec').addClass("btn-danger");
                    $('#foulInc').addClass("btn-danger");
                    $('#foulDec').removeClass("btn-primary");
                    $('#foulInc').removeClass("btn-primary");
                }
                if(fouls == "0"){
                    $('#foulsDone').removeClass("panel-warning");
                    $('#foulsDone').addClass("panel-default");
                    $('#foulDec').removeClass("btn-warning");
                    $('#foulInc').removeClass("btn-warning");
                    $('#foulInc').addClass("btn-primary");
                    $('#foulDec').addClass("btn-primary");
                }
                $('#fouls').html(fouls);
                $('#foulSend').val(fouls);
            });

            }

            function gearsInit() {
            var gears = 0;
            $('#gears').html(gears);
             $('#gearsScoredSend').val(gears);

            $('#gearInc').click(function() {
                    gears++;
                if($('#gearInc').hasClass("btn-danger")){
                    $('#gearsInputed').removeClass("panel-danger");
                    $('#gearsInputed').addClass("panel-default");
                    $('#gearInc').removeClass("btn-danger");
                    $('#gearDec').removeClass("btn-danger");
                    $('#gearInc').addClass("btn-primary");
                    $('#gearDec').addClass("btn-primary");
                }
                $('#gears').html(gears);
                 $('#gearsScoredSend').val(gears);
            });
            $('#gearDec').click(function() {
                if(gears>0){
                    gears--;
                }else{
                    $('#gearsInputed').addClass("panel-danger");
                    $('#gearsInputed').removeClass("panel-default");
                    $('#gearDec').addClass("btn-danger");
                    $('#gearInc').addClass("btn-danger");
                    $('#gearDec').removeClass("btn-primary");
                    $('#gearInc').removeClass("btn-primary");
                }
                $('#gears').html(gears);
                 $('#gearsScoredSend').val(gears);
            });
            }

            function hopperInit(){
            var hoppers = 0;
            $('#hoppers').html(hoppers);
            $('#hoppersUsed').val(hoppers);

            $('#hopperInc').click(function(){
                hoppers++;
                $('#hoppersQuality').show();
                if($('#hopperInc').hasClass("btn-danger")){
                    $('#hoppersPanel').removeClass("panel-danger");
                    $('#hoppersPanel').addClass("panel-default");
                    $('#hopperDec').removeClass("btn-danger");
                    $('#hopperInc').removeClass("btn-danger");
                    $('#hopperInc').addClass("btn-primary");
                    $('#hopperDec').addClass("btn-primary");
                }

                $('#hoppers').html(hoppers);
                $('#hoppersUsed').val(hoppers);
            });

            $('#hopperDec').click(function() {
                if(hoppers>0){
                    hoppers--;
                    if(hoppers==0){
                        $('#hoppersQuality').hide();
                    }
                }else{
                    $('#hoppersPanel').addClass("panel-danger");
                    $('#hoppersPanel').removeClass("panel-default");
                    $('#hopperDec').addClass("btn-danger");
                    $('#hopperInc').addClass("btn-danger");
                    $('#hopperDec').removeClass("btn-primary");
                    $('#hopperInc').removeClass("btn-primary");
                }
                $('#hoppers').html(hoppers);
                $('#hoppersUsed').val(hoppers);
            });

            }
            function canSubmit(){
            if(!($('#teamNumber').val() == '' || $('#matchNumber').val() == '' || $('#comment').val() == '')){
            $('#stuffSpan').html(
            "Team Number : "+$('#teamNumber').val()+"<br/>"+
            "Match Number : "+$('#matchNumber').val()+"<br/>"+
            "High : "+$('input[name=High]:checked').val()+"<br/>"+
            "<div id=highShootingStuff>"+
            "High Shooting Quality : "+$('input[name=qualityHigh]:checked').val()+"<br/>"+
            "Fuel High : "+$('#highFuelScoredSend').val()+"<br/>"+
            "</div>"+
            "Low : "+$('input[name=Low]:checked').val()+"<br/>"+
            "<div id=lowShootingStuff>"+
            "Fuel Low : "+$('#lowFuelScoredSend').val()+"<br/>"+
            "</div>"+
            "Gears : "+$('input[name=Gears]:checked').val()+"<br/>"+
            "<div id=gearsStuff>"+
            "Gears Quality : "+$('input[name=qualityGears]:checked').val()+"<br/>"+
            "Gears Placed : "+$('#gearsScoredSend').val()+"<br/>"+
            "</div>"+
            "Climbs : "+$('input[name=Climb]:checked').val()+"<br/>"+
            "<div id=climbingStuff>"+
            "Climbing Time : "+$('input[name=qualityClimbing]:checked').val()+"<br/>"+
            "</div>"+
            "Defends : "+$('input[name=Defence]:checked').val()+"<br/>"+
            "<div id=defenceStuff>"+
            "Defence Quality : "+$('input[name=qualityDefence]:checked').val()+"<br/>"+
            "</div>"+
            "Fouls Done : "+$('#foulSend').val()+"<br/>"+
            "Hoppers used: "+$('#hoppersUsed').val()+"<br/>"+
            "<div id=hopperStuff>"+
            "Hopper Ball Catching Quality : "+$('input[name=hopperCatchingQuality]:checked').val()+
            "</div>"+
            "Comment : "+$('#comment').val()+"<br/>"
            );
            if($('input[name=High]:checked').val() == "False"){
            $('#highShootingStuff').hide();
            }else{
            $('#highShootingStuff').show();
            }
            if($('input[name=Low]:checked').val() == "False"){
            $('#lowShootingStuff').hide();
            }else{
            $('#lowShootingStuff').show();
            }
            if($('input[name=Gears]:checked').val() == "False"){
            $('#gearsStuff').hide();
            }else{
            $('#gearsStuff').show();
            }
            if($('input[name=Climb]:checked').val() == "False"){
            $('#climbingStuff').hide();
            }else{
            $('#climbingStuff').show();
            }
            if($('input[name=Defence]:checked').val() == "False"){
            $('#defenceStuff').hide();
            }else{
            $('#defenceStuff').show();
            }
            if($('#hoppersUsed').val() < 0){
            $('#hopperStuff').hide();
            }else{
            $('#hopperStuff').show();
            }
            $('#showStuffModal').modal("show");
            }else{
            lightUmUp();
            $('#requiredModal').modal("show");
            }
            }
            function lightUmUp(){
            var quality =["very bad", "bad", "fine", "good", "very good"];
            var checkList = ["Low","Climb","High","Gear","Defence"];
            var boolean = ["True", "False"];
//            if($('input[name=High]:checked').val() == null){
//            $('#doesHighFalse').removeClass("btn-primary");
//            $('#doesHighTrue').removeClass("btn-primary");
//            $('#doesHighTrue').addClass("btn-danger");
//            $('#doesHighFalse').addClass("btn-danger");
//            }
//
//            $('#doesHighFalse').click(function(){
//            $('#doesHighFalse').removeClass("btn-danger");
//            $('#doesHighTrue').removeClass("btn-danger");
//            $('#doesHighTrue').addClass("btn-primary");
//            $('#doesHighFalse').addClass("btn-primary");
//            });
//
//            $('#doesHighTrue').click(function(){
//            $('#doesHighFalse').removeClass("btn-danger");
//            $('#doesHighTrue').removeClass("btn-danger");
//            $('#doesHighTrue').addClass("btn-primary");
//            $('#doesHighFalse').addClass("btn-primary");
//            });
//
//            if($('input[name=Low]:checked').val() == null){
//            $('#doesLowFalse').removeClass("btn-primary");
//            $('#doesLowTrue').removeClass("btn-primary");
//            $('#doesLowTrue').addClass("btn-danger");
//            $('#doesLowFalse').addClass("btn-danger");
//            }
//
//            $('#doesLowFalse').click(function(){
//            $('#doesLowFalse').removeClass("btn-danger");
//            $('#doesLowTrue').removeClass("btn-danger");
//            $('#doesLowTrue').addClass("btn-primary");
//            $('#doesLowFalse').addClass("btn-primary");
//            });
//
//            $('#doesLowTrue').click(function(){
//            $('#doesLowFalse').removeClass("btn-danger");
//            $('#doesLowTrue').removeClass("btn-danger");
//            $('#doesLowTrue').addClass("btn-primary");
//            $('#doesLowFalse').addClass("btn-primary");
//            });
//
//            if($('input[name=Gears]:checked').val() == null){
//            $('#doesGearFalse').removeClass("btn-primary");
//            $('#doesGearTrue').removeClass("btn-primary");
//            $('#doesGearTrue').addClass("btn-danger");
//            $('#doesGearFalse').addClass("btn-danger");
//            }
//
//            $('#doesGearFalse').click(function(){
//            $('#doesGearFalse').removeClass("btn-danger");
//            $('#doesGearTrue').removeClass("btn-danger");
//            $('#doesGearTrue').addClass("btn-primary");
//            $('#doesGearFalse').addClass("btn-primary");
//            });
//
//            $('#doesGearTrue').click(function(){
//            $('#doesGearFalse').removeClass("btn-danger");
//            $('#doesGearTrue').removeClass("btn-danger");
//            $('#doesGearTrue').addClass("btn-primary");
//            $('#doesGearFalse').addClass("btn-primary");
//            });
//
//            if($('input[name=Climb]:checked').val() == null){
//            $('#doesClimbFalse').removeClass("btn-primary");
//            $('#doesClimbTrue').removeClass("btn-primary");
//            $('#doesClimbTrue').addClass("btn-danger");
//            $('#doesClimbFalse').addClass("btn-danger");
//            }
//
//            $('#doesClimbFalse').click(function(){
//            $('#doesClimbFalse').removeClass("btn-danger");
//            $('#doesClimbTrue').removeClass("btn-danger");
//            $('#doesClimbTrue').addClass("btn-primary");
//            $('#doesClimbFalse').addClass("btn-primary");
//            });
//
//            $('#doesClimbTrue').click(function(){
//            $('#doesClimbFalse').removeClass("btn-danger");
//            $('#doesClimbTrue').removeClass("btn-danger");
//            $('#doesClimbTrue').addClass("btn-primary");
//            $('#doesClimbFalse').addClass("btn-primary");
//            });
            for(var j=0;j<checkList.length;j++){
                if($('input[name='+checkList[j]+']:checked').val() == null){
                    for(var i=0;i<boolean.length;i++){
                    $('#does'+checkList[j]+boolean[i]+'').removeClass("btn-primary");
                    $('#does'+checkList[j]+boolean[i]+'').addClass("btn-danger");
                    $('#does'+checkList[j]+boolean[i]+'').click(function(){
                    });
                    }
                }
            }
//            if($('input[name=Defence]:checked').val() == null){
//            $('#doesDefendFalse').removeClass("btn-primary");
//            $('#doesDefendTrue').removeClass("btn-primary");
//            $('#doesDefendTrue').addClass("btn-danger");
//            $('#doesDefendFalse').addClass("btn-danger");
//            }
//


//                $('#doesDefendTrue').click(function(){
////            $('#doesDefendFalse').removeClass("btn-danger");
////            $('#doesDefendTrue').removeClass("btn-danger");
////            $('#doesDefendTrue').addClass("btn-primary");
////            $('#doesDefendFalse').addClass("btn-primary");
////            });

//            $('#doesDefendTrue').click(function(){
//            $('#doesDefendFalse').removeClass("btn-danger");
//            $('#doesDefendTrue').removeClass("btn-danger");
//            $('#doesDefendTrue').addClass("btn-primary");
//            $('#doesDefendFalse').addClass("btn-primary");
//            });
//
//            $('#doesDefendFalse').click(function(){
//            $('#doesDefendFalse').removeClass("btn-danger");
//            $('#doesDefendTrue').removeClass("btn-danger");
//            $('#doesDefendTrue').addClass("btn-primary");
//            $('#doesDefendFalse').addClass("btn-primary");
//            });

            for(var j=2;j<checkList.length;j++){
                if($('input[name="'+checkList[j]+'"]:checked').val() == "True"){
                    if($('input[name="quality'+checkList[j]+'"]:checked').val() == null){
                        for(var i=0;i<quality.length;i++){
                         var id = "quality"+checkList[j]+"-"+quality[i];
                            $('div[name="'+id+'"]').addClass("btn-danger");
                           $('div[name="'+id+'"]').removeClass("btn-primary");
                      }
                    }
               }
            }
            }

            function checkSubmittedForm(){
            $('#deRealSubmit').click(function() {
                $.ajax({
              method: "POST",
              url: "/checkIfTeamAndGameExists",
              data: { team_number: $('#teamNumber').val(), match_number: $('#matchNumber').val() }
                })
              .done(function( teamExists ) {
                if(teamExists == "true"){
                    $('#overrideModal').modal('show');
                }
                else{
                canSubmit();
                }
              });
            });
            $('#submitButton').click(function(){
            $('#scoutingForm').submit()
            });
            $('#overrideButton').click(function(){
            $('#override').val("True");
            canSubmit();
            });
            }
    })()
(function() {
        $(function () {
            fuelHighInit();
            fuelLowInit();
            gearsInit();
            foulsInit();
            hopperInit();
            checkSubmittedForm();
            rightTeamNumber();

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

            function rightTeamNumber(){
            $('#teamNumber').blur(function (){
              $.ajax({
              method: "POST",
              url: "/checkIfTeamExists",
              data: { team_number: $('#teamNumber').val()}
                })
              .done(function( teamExists ) {
                if(teamExists == "false"){
                $('#teamNumberIncorrectModal').modal('show');
                }
              })});
            }

            function canSubmit(){
            if(lightUmUp()==0){
            $('#modalBody').html(
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
            "Gears : "+$('input[name=Gear]:checked').val()+"<br/>"+
            "<div id=gearsStuff>"+
            "Gears Quality : "+$('input[name=qualityGear]:checked').val()+"<br/>"+
            "Gears Placed : "+$('#gearsScoredSend').val()+"<br/>"+
            "</div>"+
            "<div id=ClimbedDivStuff>Climbs : "+$('input[name=Climb]:checked').val()+"</div>"+
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
            if($('input[name=Gear]:checked').val() == "False"){
            $('#gearsStuff').hide();
            }else{
            $('#gearsStuff').show();
            }
            if($('input[name=Climb]:checked').val() == "False"){
            $('#climbingStuff').hide();
            }else if($('input[name=Climb]:checked').val() == "TrueFail"){
            $('#climbingStuff').hide();
            }else{
            $('#climbingStuff').show();
            }
            if($('input[name=Defence]:checked').val() == "False"){
            $('#defenceStuff').hide();
            }else{
            $('#defenceStuff').show();
            }
            if($('#hoppersUsed').val() == 0){
            $('#hopperStuff').hide();
            }else{
            $('#hopperStuff').show();
            }
            if($('input[name=Climb]:checked').val()=="TrueFail"){
            $('#ClimbedDivStuff').html("Climbs : Failed");
            }
            $('#showStuffModal').modal('show');
            }else{

            $("#comment").on("input", () =>{
            $('#comment').removeClass("btn-danger");
            });

            $("#matchNumber").on("input", () =>{
            $('#matchNumber').removeClass("btn-danger");
            });

            $("#teamNumber").on("input", () =>{
            $('#teamNumber').removeClass("btn-danger");
            });

            $('#doesHighFalse').click(function(){
            $('#doesHighFalse').removeClass("btn-danger");
            $('#doesHighTrue').removeClass("btn-danger");
            $('#doesHighTrue').addClass("btn-primary");
            $('#doesHighFalse').addClass("btn-primary");
            });

            $('#doesHighTrue').click(function(){
            $('#doesHighFalse').removeClass("btn-danger");
            $('#doesHighTrue').removeClass("btn-danger");
            $('#doesHighTrue').addClass("btn-primary");
            $('#doesHighFalse').addClass("btn-primary");
            });


            $('#doesLowFalse').click(function(){
            $('#doesLowFalse').removeClass("btn-danger");
            $('#doesLowTrue').removeClass("btn-danger");
            $('#doesLowTrue').addClass("btn-primary");
            $('#doesLowFalse').addClass("btn-primary");
            });

            $('#doesLowTrue').click(function(){
            $('#doesLowFalse').removeClass("btn-danger");
            $('#doesLowTrue').removeClass("btn-danger");
            $('#doesLowTrue').addClass("btn-primary");
            $('#doesLowFalse').addClass("btn-primary");
            });


            $('#doesGearFalse').click(function(){
            $('#doesGearFalse').removeClass("btn-danger");
            $('#doesGearTrue').removeClass("btn-danger");
            $('#doesGearTrue').addClass("btn-primary");
            $('#doesGearFalse').addClass("btn-primary");
            });

            $('#doesGearTrue').click(function(){
            $('#doesGearFalse').removeClass("btn-danger");
            $('#doesGearTrue').removeClass("btn-danger");
            $('#doesGearTrue').addClass("btn-primary");
            $('#doesGearFalse').addClass("btn-primary");
            });

            $('#doesClimbFalse').click(function(){
            $('#doesClimbFalse').removeClass("btn-danger");
            $('#doesClimbTrue').removeClass("btn-danger");
            $('#doesClimbTrue').addClass("btn-primary");
            $('#doesClimbFalse').addClass("btn-primary");
            $('#doesClimbFail').removeClass("btn-danger");
            $('#doesClimbFail').addClass("btn-primary");
            });

            $('#doesClimbFail').click(function(){
            $('#doesClimbFalse').removeClass("btn-danger");
            $('#doesClimbTrue').removeClass("btn-danger");
            $('#doesClimbTrue').addClass("btn-primary");
            $('#doesClimbFalse').addClass("btn-primary");
            $('#doesClimbFail').removeClass("btn-danger");
            $('#doesClimbFail').addClass("btn-primary");
            });

            $('#doesClimbTrue').click(function(){
            $('#doesClimbFalse').removeClass("btn-danger");
            $('#doesClimbTrue').removeClass("btn-danger");
            $('#doesClimbTrue').addClass("btn-primary");
            $('#doesClimbFalse').addClass("btn-primary");
            $('#doesClimbFail').removeClass("btn-danger");
            $('#doesClimbFail').addClass("btn-primary");
            });

            $('#doesDefenceTrue').click(function(){
            $('#doesDefenceFalse').removeClass("btn-danger");
            $('#doesDefenceTrue').removeClass("btn-danger");
            $('#doesDefenceTrue').addClass("btn-primary");
            $('#doesDefenceFalse').addClass("btn-primary");
            });

            $('#doesDefenceFalse').click(function(){
            $('#doesDefenceFalse').removeClass("btn-danger");
            $('#doesDefenceTrue').removeClass("btn-danger");
            $('#doesDefenceTrue').addClass("btn-primary");
            $('#doesDefenceFalse').addClass("btn-primary");
            });

            var ClimbingQual= $('div[name=timeClimb]');

            for(var i=0;i<3;i++){
                $(ClimbingQual[i]).click(function (){
                    for(var z=0;z<3;z++){
                        $(ClimbingQual[z]).addClass("btn-primary");
                        $(ClimbingQual[z]).removeClass("btn-danger");
                    }
                });
            }

            var HighQual= $('div[name=qualitysHigh]');

            for(var i=0;i<5;i++){
                $(HighQual[i]).click(function (){
                    for(var z=0;z<5;z++){
                        $(HighQual[z]).addClass("btn-primary");
                        $(HighQual[z]).removeClass("btn-danger");
                    }
                });
            }

            var GearQual= $('div[name=qualitysGear]');

            for(var i=0;i<5;i++){
                $(GearQual[i]).click(function (){
                    for(var z=0;z<5;z++){
                        $(GearQual[z]).addClass("btn-primary");
                        $(GearQual[z]).removeClass("btn-danger");
                    }
                });
            }

            var DefenceQual= $('div[name=qualitysDefence]');

            for(var i=0;i<5;i++){
                $(DefenceQual[i]).click(function (){
                    for(var z=0;z<5;z++){
                        $(DefenceQual[z]).addClass("btn-primary");
                        $(DefenceQual[z]).removeClass("btn-danger");
                    }
                });
            }

            var HopperQual= $('div[name=qualitysHopper]');

            for(var i=0;i<5;i++){
                $(HopperQual[i]).click(function (){
                    for(var z=0;z<5;z++){
                        $(HopperQual[z]).addClass("btn-primary");
                        $(HopperQual[z]).removeClass("btn-danger");
                    }
                });
            }

            $('#requiredModal').modal("show");
            }
            }
            function lightUmUp(){
            var textInputs = ["comment","matchNumber","teamNumber"];
            var quality =["very bad", "bad", "fine", "good", "very good"];
            var checkList = ["Low","Climb","High","Gear","Defence"];
            var boolean = ["True", "False"];
            var time = ["none", "long", "medium", "short"];
            var count =0;

            if($('#highFuelScoredSend').val()==0&&$('input[name=High]:checked').val()=="True"){
                count++;
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

            if($('#gearsScoredSend').val()==0&&$('input[name=Gear]:checked').val()=="True"){
                count++;
                $('#gearsInputed').addClass("panel-danger");
                $('#gearsInputed').removeClass("panel-default");
                $('#gearDec').addClass("btn-danger");
                $('#gearInc').addClass("btn-danger");
                $('#gearDec').removeClass("btn-primary");
                $('#gearInc').removeClass("btn-primary");
            }

            if($('#lowFuelScoredSend').val()==0&&$('input[name=Low]:checked').val()=="True"){
                count++;
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

            for(var j=0;j<checkList.length;j++){
                if($('input[name='+checkList[j]+']:checked').val() == null){
                    count+=1;
                    if(checkList[j]=="Climb"){
                        $('#does'+checkList[j]+'Fail').removeClass("btn-primary");
                        $('#does'+checkList[j]+'Fail').addClass("btn-danger");
                    }
                    for(var i=0;i<boolean.length;i++){
                    $('#does'+checkList[j]+boolean[i]+'').removeClass("btn-primary");
                    $('#does'+checkList[j]+boolean[i]+'').addClass("btn-danger");
                    }
                }
            }
            for(var i=0;i<textInputs.length;i++){
                if($('#'+textInputs[i]+'').val() == ''){
                    count+=1;
                    $('#'+textInputs[i]+'').addClass("btn-danger");
                }
            }
            for(var j=1;j<checkList.length;j++){
                if($('input[name="'+checkList[j]+'"]:checked').val() == "True"){
                    if($('input[name="quality'+checkList[j]+'"]:checked').val() == null){
                        for(var i=0;i<quality.length;i++){
                             var id = "quality"+checkList[j]+"-"+quality[i];
                             $('div[id="'+id+'"]').addClass("btn-danger");
                             $('div[id="'+id+'"]').removeClass("btn-primary");
                      }
                    }
               }
               if(checkList[j]=="Climb"){
               if($('input[name="'+checkList[j]+'"]:checked').val() == "True"){
                    if($('input[name="quality'+checkList[j]+'ing'+'"]:checked').val() == null){
                        for(var i=0;i<time.length;i++){
                             var id = "time"+checkList[j]+"-"+time[i];
                             $('div[id="'+id+'"]').addClass("btn-danger");
                             $('div[id="'+id+'"]').removeClass("btn-primary");
                      }
                    }
               }
               }
            }
            if($('#hoppersUsed').val()>0){
                if($('input[name=hopperCatchingQuality]:checked').val() == null){
                        for(var i=0;i<quality.length;i++){
                             var id = "qualityHopper-"+quality[i];
                             $('div[id="'+id+'"]').addClass("btn-danger");
                             $('div[id="'+id+'"]').removeClass("btn-primary");
                      }
                    }
            }
            return count;
            }

            function checkSubmittedForm(){
            $('#deRealSubmit').click(function() {
                $.ajax({
              method: "POST",
              url: "/checkIfTeamAndMatchExists",
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
            if($('input[name=hopperCatchingQuality]:checked').val() == null){
                $('input[value=fine,name=hopperCatchingQuality]').prop('checked', true);
            }
            $('#scoutingForm').submit()
            });
            $('#overrideButton').click(function(){
            $('#override').val("True");
            canSubmit();
            });
            }
    })()
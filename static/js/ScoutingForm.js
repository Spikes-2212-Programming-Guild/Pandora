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
            function checkSubmittedForm(){
            $('#deRealSubmit').click(function() {
                $.ajax({
              method: "POST",
              url: "/checkIfTeamAndGameExists",
              data: { team_number: $('#teamNumber').val(), match_number: $('#matchNumber').val() }
                })
              .done(function( teamExists ) {
                if(teamExists == "true"){
                    $('#myModal').modal('show');
                }
                else{
                $('#scoutingForm').submit();
                }
              });
            });

            $('#overrideButton').click(function(){
            $('#override').val("True");
            $('#scoutingForm').submit()
            });
            }
    })()
(function (){
    $(function (){
    listeners();
    })
    function hide(){
    $('.hidden-at-start').hide();
    }
    function listeners(){
    $('#Climb').click(function (){
    hide();
    $('#tier_climb').show();
    });
    $('#Gear').click(function (){
    hide();
    $('#tier_gear').show();
    });
    $('#High').click(function (){
    hide();
    $('#tier_high').show();
    });
    $('#Low').click(function (){
    hide();
    $('#tier_low').show();
    });
    $('#DriverQuality').click(function (){
    hide();
    $('#tier_driver_quality').show();
    });
    }
})()
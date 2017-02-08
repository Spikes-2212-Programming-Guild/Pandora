(function(){
$(function (){
better("#knowledge","#average");
}
)

})


function better(field,checkfield){
$(field).html("checked")
if $(field).val()<$(checkfield).val(){
$(field).addClass("danger");
}
else{
$(field).addClass("success");
}
}
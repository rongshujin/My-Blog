
$(document).ready(function(){
    $("#hide").click(function ()
    {
        $("p").hide();
    });
    $("#show").click(function ()
    {
        $("p").show();

    });
    $("#show").show();
});

function filterClick(clickme){
    //点击一次，间隔3秒后再次点击
    clickme.disabled = true;
    $("p").toggle();
    window.setTimeout(function(){
        clickme.disabled = false;
    },3000);
}
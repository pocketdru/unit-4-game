//var selected = false;
console.log($("button").attr("name"));


$(".character").on("click", function () {
    console.log($(this).val());
    this.id = "selected";

    $("#selected").removeClass("character");
    $(".character").appendTo($(".enemiesAvailable"));
    $("#selected").appendTo($(".yourCharacter"));


    $(".character").on("click", function () {
        this.id = "defender";
        $("#defender").removeClass("character");
        $("#defender").appendTo($(".defender"));
        //$("#health").removeAttr("id");
    });

});

var n = 0;
var health;
var defenderHealth;
$(".attack").on("click", function () {
    // health = $(this).val();
    // console.log($("#selected").val());
    this.health = $("#selected").val();
    this.defenderHealth = $("#defender").val();
    //  console.log(health);
    n += 8;
    this.defenderHealth -=n;
    $("#defender").find("#health").html(this.defenderHealth);
    $(".attack").on("click", function () {
        this.health -= 25;
        console.log(this.health);
        $("#health").html(this.health);

        if (this.health <= 0) {
            var text1 = "You been defeated... GAME OVER!!!";
            $(".defenderText").html(text1);
            $("#reset").css("display", "inline-block");
        }
    });

    var text = "You attacked " + $("#defender").attr("name") + " for " + n + " damage " + "\n. " + $("#defender").attr("name") + " attacked you back for 25 damage.";
    $(".defenderText").html(text);



});

$("#reset").on("click", function () {
    location.reload();
});
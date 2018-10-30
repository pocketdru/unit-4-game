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
        $("#start").css("display", "inline-block");

    });

});

var n;
var health = 0;
var defenderHealth = 0;


$(".attack").on("click", function () {
    this.health = $("#selected").val();
    this.defenderHealth = $("#defender").val();
    //n = n + 8;
    //this.defenderHealth = this.defenderHealth - (n + 8);
    // $("#defender").find("#health").html(this.defenderHealth);
    n = 0;
    $(".attack").on("click", function () {
        n = n + 8;
        this.defenderHealth = this.defenderHealth - n;

        if (this.defenderHealth <= 0) {
            $(".defender").find("button").remove();
            $(".defender").find("button").removeData();
            n = 0;
            
        }

        $("#defender").find("#health").html(this.defenderHealth);
        this.health -= 25;
        console.log(this.health);
        $("#health").html(this.health);

        if (this.health <= 0) {
            var text1 = "You been defeated... GAME OVER!!!";
            $(".defenderText").html(text1);
            $("#reset").css("display", "inline-block");
        } else {

            var text = "You attacked " + $("#defender").attr("name") + " for " + n + " damage " + "\n. " + $("#defender").attr("name") + " attacked you back for 25 damage.";
            $(".defenderText").html(text);
        };
    });

    // var text = "You attacked " + $("#defender").attr("name") + " for " + n + " damage " + "\n. " + $("#defender").attr("name") + " attacked you back for 25 damage.";
    // $(".defenderText").html(text);

});

$("#reset").on("click", function () {
    location.reload();
});
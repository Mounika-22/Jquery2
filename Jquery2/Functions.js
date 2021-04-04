$(document).ready(function () {
    $("body").css("background-color", "lightgreen");
    $("#btnAdd").click(function () {
        var x = parseInt($("#number1").val());
        var y = parseInt($("#number2").val());
        $("#result").val(x + y);
    });
    $("#btnSub").click(function () {
        var x = parseInt($("#number1").val());
        var y = parseInt($("#number2").val());
        $("#result").val(x - y);
    });
    $("#btntxt1").click(function () {
        var x = ($("#text1").val());
        var y = x.toLowerCase();
        $("#result1").val(y);

    });
    $("#btntxt2").click(function () {
        var x = ($("#text2").val());
        var y = ($("#text3").val());
        $("#res2").html("</br>Result is:<b>" + x + " " + y + "</b>");
    });
    $("#btnTab").click(function () {
        var result = "";
        var x = parseInt($("#number3").val());
        for (var i = 1; i <= 10; i++) {
            result = result + "</br><b>" + x + "*" + i + "=" + x * i + "</b>";
        }
        $("#res").html(result);

    });
});
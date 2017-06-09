$(function () {
    var resultado = $("input:text");
    $("input:button").on("click", function () {
        var valorBoton = $(this).val();
        var currentScreen = resultado.val();
        currentScreen += valorBoton;        
        resultado.val(currentScreen);
        if ($(this).val() == "C") {
            resultado.val("");
        }
    });
    $("button").click(function (event) {
        event.preventDefault();
        resultado.val(eval(resultado.val()));
    });
});

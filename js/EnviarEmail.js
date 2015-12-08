function enviar() {

    $(".cargador").css({ width: "75%", transition: "all 20s ease-in-out" })

    var datos = {
        De: $("#umail").val(),
        Para: "comercial.odaju@outlook.com",
        Asunto: "-- Contacto desde pagina web Odaju Store --",
        CopiaOculta: "",
        Mensaje: "La persona " + $("#uname").val() + " con el telefono " + $("#telefono").val() + " y el correo " + $("#umail").val() + " escribe lo siguiente: " + $("#msg").val(),
        HTML: false
    };
    if (datos.De == "" || datos.Mensaje == "") {
        alert("Error, todos los campos son requeridos");
    } else {

        $.ajax({
            type: "POST",
            url: "http://mailingservibike.azurewebsites.net/api/Mailing/Enviar",
            data: datos,
            async: true,
            success: function (msg) {
                if (msg) {
                    //window.location.href = "confirmacion.html";
                    alert('Tu mensaje ha sido enviado con éxito.\nPronto nos estaremos comunicando con usted.')
                    $(".cargador").css({ width: "0%", transition: "all 0.1s ease-in-out" })
                    $("#umail").val('');
                    $("#uname").val('');
                    $("#telefono").val('');
                    $("#msg").val('');
                }
            },
            error: function (msg) {
                alert("Ups, ocurrio un error");
            }
        });

    }
}
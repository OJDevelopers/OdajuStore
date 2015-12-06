var WebApi = "http://quieroirapi.azurewebsites.net/api/";
//------------------------------------------------<Variables>----------------------------------------------------\\
var Background = function (objeto, url, urlDefault) {
    var img = new Image();
    img.src = url;

    img.onerror = function () {
        $(objeto).css({ "background": "url(" + urlDefault + ")", "background-size": "cover" });
    };

    img.onload = function () {
        $(objeto).css({ "background": "url(" + url + ")", "background-size": "cover" });
    };
}
var Ciudad = "D216F087-FDA7-45C0-B3D1-96F69C529253";
var Agenda = "";
var Categoria = "";
var Usuario = "";

function verificarMes(Mes) {
    var MesesA31 = [true, false, true, false, true, false, true, true, false, true, false, true];
    return MesesA31[Mes];
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}

var normalize = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
        to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    }

});

function TraerHora(hora) {
    var datos = hora.split(":");
    var datosHora = {
        hora: "",
        minutos: ""
    }
    var Fhora = parseInt(datos[0]);
    datosHora.hora = Fhora - 12;
    datosHora.minutos = datos[1];

    return datosHora;
}

function FormatearFecha(Fecha) {
    try {
        var MesArray = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

        var fecha = new Date(Fecha);
        var dia = fecha.getDate();
        dia = dia;
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();

        if (dia == 31) {
            if (verificarMes(mes)) {
                dia = 1;
                mes += 1;
            }
        }
        else if (dia == 30) {
            if (verificarMes(mes)) {
                dia += 1;
            }
            else {
                dia = 1;
                mes += 1;
            }
        }
        else {
            dia += 1;
        }

        var datos = {
            "dia": dia-1,
            "mes": MesArray[mes],
            "ano":year,
            "hora": hora,
            "minuto": minuto
        };

        return datos
    }
    catch (err) {
        alert(err);
    }

}


angular.module("OdajuApp", ["OdajuApp.Services"])

.controller("AboutCtrl", function ($scope, OdajuService) {
    var CallBackR = function (Data) {

        Data.Redes.sort(function (a, b) {
            if (a.Orden < b.Orden) return -1;
            if (a.Orden > b.Orden) return 1;
            return 0;
        });
        
        var redesFInal = $.grep(Data.Redes, function (n) {
            return n.Pintar == true;
        })

        Data.Redes = redesFInal;

        $scope.About = Data;
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetAbout(CallBackR, onErrorR);
})
.controller("NoticiasCtrl", function ($scope, OdajuService) {
    var CallBackR = function (Data) {
        $scope.Noticias = Data;
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetNoticias(CallBackR, onErrorR);
})
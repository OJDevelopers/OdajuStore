function OrganizarCatalogo(AData) {
    var divisor = 6;
    var CantidadLi = Math.ceil(AData.length / divisor);

    var ObjetoFinal = [];
    var guia = 0;
    var posicionObj = 0;

    for (var i = 0; i < CantidadLi; i++) {
        var Obj = {"Productos":[]};
        guia += divisor;
        var guia2 = 0;
        for (var j = posicionObj; j < guia; j++) {
            var r = AData[j]

            if (r == undefined) {
                //Obj.Productos.push("" + j + "");
            }
            else {

                if (guia2 == 0) {
                    r.clase = "tr_one_third";
                }
                else if (guia2 == 1) {
                    //r.clase = "tr_one_third_mid";
                    r.clase = "tr_one_third";
                }
                else if (guia2 == 2) {
                    //r.clase = "tr_one_third_right";
                    r.clase = "tr_one_third";
                }
                else if (guia2 == 3) {
                    //r.clase = "tr_one_third_bottom";
                    r.clase = "tr_one_third";
                }
                else if (guia2 == 4) {
                    //r.clase = "tr_one_third_btm_right";
                    r.clase = "tr_one_third";
                }
                else if (guia2 == 5) {
                    //r.clase = "tr_one_third_btm_right";
                    r.clase = "tr_one_third";
                }

                Obj.Productos.push(r);
            }

            posicionObj = j + 1;
            guia2++;
        }

        ObjetoFinal.push(Obj);
    }

    return ObjetoFinal;
}


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

.controller("CatalogoCtrl", function ($scope, OdajuService,$timeout) {
    var CallBackR = function (Data) {
        var j = OrganizarCatalogo(Data);
        $scope.CatalogoLucho = j;

        $timeout(function () {
            var e = window.innerHeight;

            jQuery("#news_slider").bxSlider({
                controls: true,
                displaySlideQty: 1,
                speed: 1e3,
                touchEnabled: false,
                easing: "easeInOutQuint",
                pager: false
            });


        }, 0);
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetCatalogo(CallBackR, onErrorR);
})

.controller("CatalogoCtrl", function ($scope, OdajuService, $timeout) {
    var CallBackR = function (Data) {
        var j = OrganizarCatalogo(Data);
        $scope.CatalogoLucho = j;

        $timeout(function () {
            var e = window.innerHeight;

            jQuery("#news_slider").bxSlider({
                controls: true,
                displaySlideQty: 1,
                speed: 1e3,
                touchEnabled: false,
                easing: "easeInOutQuint",
                pager: false
            });


        }, 0);
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetCatalogo(CallBackR, onErrorR);
})
.controller("TestimoniosCtrl", function ($scope, OdajuService, $timeout) {
    var CallBackR = function (Data) {
        $scope.Testimonios = Data;

        $timeout(function () {
            var e = window.innerHeight;

            jQuery("#news_slider").bxSlider({
                controls: true,
                displaySlideQty: 1,
                speed: 1e3,
                touchEnabled: false,
                easing: "easeInOutQuint",
                pager: false
            });


        }, 0);
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetTestimonios(CallBackR, onErrorR);
})
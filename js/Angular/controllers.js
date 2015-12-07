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

function OrganizarEquipo(AData) {
    var divisor = 3;
    var CantidadLi = Math.ceil(AData.length / divisor);

    var ObjetoFinal = [];
    var guia = 0;
    var posicionObj = 0;

    for (var i = 0; i < CantidadLi; i++) {
        var Obj = { "Equipo": [] };
        guia += divisor;
        var guia2 = 0;
        for (var j = posicionObj; j < guia; j++) {
            var r = AData[j]

            if (r == undefined) {
                //Obj.Productos.push("" + j + "");
            }
            else {

                Obj.Equipo.push(r);
            }

            posicionObj = j + 1;
            guia2++;
        }

        ObjetoFinal.push(Obj);
    }

    return ObjetoFinal;
}


angular.module("OdajuApp", ["OdajuApp.Services", "angular-carousel"])

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
.controller("NoticiasCtrl", function ($scope, OdajuService, $timeout) {
    var CallBackR = function (Data) {
        
        $scope.Noticias = Data;

        $.each($scope.Noticias, function (index, item) {
            var Fecha = FormatearFecha(item.Fecha)
            item.Fecha = Fecha;
        })

        $timeout(function () {
            jQuery(".tr_fashion_slider").bxSlider({
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 550,
                slideMargin: 20,
                pager: false
            });
        },0)
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetNoticias(CallBackR, onErrorR);
})

.controller("CatalogoCtrl", function ($scope, OdajuService,$timeout) {
    var CallBackR = function (Data) {
        //var j = OrganizarCatalogo(Data);
        $scope.CatalogoLucho = Data;

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

            jQuery("#grid").mixitup({
                filterSelector: ".filter-item"
            });
            jQuery(".filter-item").on("click", function (e) {
                e.preventDefault()
            });

            new Photostack(document.getElementById("photostack-1"), {
                callback: function (e) { }
            });

            jQuery("area[data-gal^='prettyPhoto']").prettyPhoto();
            jQuery(".gallery a[data-gal^='prettyPhoto']").prettyPhoto({
                animation_speed: "normal",
                theme: "light_square",
                slideshow: 3e3,
                autoplay_slideshow: false
            });


        }, 0);
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetCatalogo(CallBackR, onErrorR);
})

.controller("EquipoCtrl", function ($scope, OdajuService, $timeout) {
    var CallBackR = function (Data) {
        //var j = OrganizarCatalogo(Data);
        $scope.Equipo = OrganizarEquipo(Data);

    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetEquipo(CallBackR, onErrorR);
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

.controller("CategoriasCtrl", function ($scope, OdajuService, $timeout) {
    var CallBackR = function (Data) {
        $scope.Categorias = Data;

        $timeout(function () {
            var e = window.innerHeight;

            
        }, 0);
    };

    var onErrorR = function (Data) {
        alert(JSON.stringify(Data));
    }

    OdajuService.GetCategorias(CallBackR, onErrorR);
})
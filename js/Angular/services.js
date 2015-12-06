angular.module("OdajuApp.Services", [])
.factory("OdajuService", function ($http) {
    var Result = {};

    Result.GetAbout = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.About);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    Result.GetNoticias = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.Noticias);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    Result.GetCatalogo = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.Catalogo);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    Result.GetTestimonios = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.Testimonios);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    Result.GetEquipo = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.Equipo);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    return Result;
});
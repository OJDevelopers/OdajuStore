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

    Result.GetVideos = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.RecursosJeloz.Multimedia.Videos);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    Result.GetWallPapers = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.RecursosJeloz.WallPapers);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    Result.GetCanciones = function (CallBack, onError) {
        $http.get("../../Data/odaju.json")
		.success(function (data, status, headers, config) {
		    CallBack(data.RecursosJeloz.EmisoraOnline);
		})
        .error(function (data, status, headers, config) {
            onError(data);
        });
    };

    return Result;
});
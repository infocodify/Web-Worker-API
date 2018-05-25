onmessage = function (e) {
    var areaCode = e.data.areaCode;
    postMessage("Area Code : " + areaCode);
}
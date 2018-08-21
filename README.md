# Web-Worker-API
Web Worker API is based on the JavaScript messaging framework.\\

Follow the Steps:

1.  Create the Worker to postMessage
```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
</head>
<body>
    <div id="show"></div>
    <script type="text/javascript">
        var service = new Worker("workerJS.js");
        service.postMessage({
            "areaCode": "107",
            "prefix": "311",
            "number": "9876"
        });
        service.onmessage = function (e) {
            document.getElementById("show").innerHTML = (e.data);
        }
    </script>
</body>
</html>
```

2.  Create the JavaScript Worker to respond back
```html
onmessage = function (e) {
    var areaCode = e.data.areaCode;
    postMessage("Area Code : " + areaCode);
}
```

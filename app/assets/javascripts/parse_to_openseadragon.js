(function (handleload) {
  var manifestJson = new XMLHttpRequest();
  manifestJson.addEventListener("load", handleload, false);
  manifestJson.open("GET", "test_manifest.json", true);
  manifestJson.send(null);
}( function handleload(event) {
  var manifestJson = event.target,
        manifestJsonObj = JSON.parse(manifestJson.responseText),
        arrayJson = new Array(manifestJsonObj),
        infoJson = arrayJson.filter(function (value) {
          if (value == "/http:\/\/[\w/:\(\)~\.=\+\-]+/g"){
            return value;
          }
        });
  console.log(infoJson);
  }
));

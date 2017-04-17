// Gettting manifest_uri

// Getting sequence/canvas/images/id
JSON.parse('{"@id" : "http://gallica.bnf.fr/iiif/ark:/12148/btv1b83018108/f1"}', function(k, v){
  if (k === 'string'){
    console.log(k);
    return v;
    }
  });

//Removing the specified data fetting IIIF Image API
// Adding info.json

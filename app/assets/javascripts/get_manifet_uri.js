test_json = {"sequences" : [ {
    "canvases" : [ {
      "@id" : "http://gallica.bnf.fr/iiif/ark:/12148/btv1b83018108/canvas/f1",
      "label" : "NP",
      "height" : 2385,
      "width" : 3336,
      "images" : [ {
        "motivation" : "sc:painting",
        "on" : "http://gallica.bnf.fr/iiif/ark:/12148/btv1b83018108/canvas/f1",
        "resource" : {
          "format" : "image/jpeg",
          "service" : {
            "profile" : "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",
            "@context" : "http://iiif.io/api/image/1/context.json",
            "@id" : "http://gallica.bnf.fr/iiif/ark:/12148/btv1b83018108/f1"
          },
          "height" : 2385,
          "width" : 3336,
          "@id" : "http://gallica.bnf.fr/iiif/ark:/12148/btv1b83018108/f1/full/full/0/native.jpg",
          "@type" : "dctypes:Image"
        },
        "@type" : "oa:Annotation"
      } ],
      "thumbnail" : {
        "@id" : "http://gallica.bnf.fr/ark:/12148/btv1b83018108/f1.thumbnail"
      },
      "@type" : "sc:Canvas"
    }
  }
}

// Gettting manifest_uri

// Getting sequence/canvas/images/id
JSON.parse('"images"', function)

//Removing the specified data fetting IIIF Image API
// Adding info.json

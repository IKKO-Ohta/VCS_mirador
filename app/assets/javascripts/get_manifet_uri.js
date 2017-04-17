// Gettting manifest_uri

// Getting sequence/canvas/images/id
JSON.parse('{"p": 5}', function(k, v) {
  if (typeof v === 'number') {
    return v * 2;  // 数字については v * 2 を返す
  }
  return v;        // 他のすべてはそのまま返す
});

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function(k, v) {
  console.log(v); // 現在のプロパティ名を出力する。最後は ""。
  return k;       // 変更されていないプロパティの値を返す。
});

//Removing the specified data fetting IIIF Image API
// Adding info.json

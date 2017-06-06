VCS_mirador
====
![all_doc](https://github.com/IKKO-Ohta/VCS_mirador/blob/master/all_documents_comments.gif) 
![fetch](https://github.com/IKKO-Ohta/VCS_mirador/blob/master/adding_documents.gif)
## 名前について
VCS-Miradorは、ソフトウェア開発で用いられる分散システム管理（Version Control System）を、電子資料のビュワーであるMiradorと組み合わせることで新しい人文学の共同研究の形を提案したいという思いを込めて名付けられました。　

## できること
VCS-Miradorでは各図書館が公開している電子資料を手元で一括して管理し、注釈を仲間どうしで加えることができます。また、Miradorのマルチウィンドウや注釈の機能が、人文学研究における様々な場面で役立つでしょう。  
<p>VCS-Miradorでは、グループを作成して、複数の研究者の間で注釈の共有をすることができます。この機能を用いて大量の資料画像を共同で扱うことできます。  
 

## 背景

近年、International Image Interoperability Framework(IIIF)という電子資料に付与するメタデータの国際的なフォーマットが各国の図書館で採用されています。VCS-MiradorはこのIIIFに対応したビューワーであるMiradorをベースに作られています。IIIFに対応したビュワーによって、それまでは図書館ごとのビュワーで閲覧していた資料が１つのビュワーを通じて扱うことができるようになりました。   

## 利用方法
まず、アカウントを作成します。  
アカウントを作成したら、右上のメニューボタンのDocumentsをクリックして、Adding a Documentを選択してください。  

Adding a Documentのページでは、あなたが手元で管理したい資料をあなたのアカウントに追加することができます。nameでは、あなたが自分で資料の名前をつけることができます。次に、あなたがその図書館のビュワーで見ている時の資料のURLをコピーして、入力欄にペースとしてください。自動的にIIIFフォーマットのメタデータを取得して、Miradorによって閲覧することができるようになります。最後に、自分の追加した資料や注釈を見られたくないのであれば、is locked?のボタンにチェックをしてください。あとは、Add itをクリックするだけです。  

新しい資料を追加すると、自動的にコメントページに移ります。コメントはannotation、idea、hypothesisの３種類から選ぶことができます。annotationは、書かれている内容の事実確認や、翻刻など、資料の考証のためにコメントつける時に使います。ideaはannotationでの蓄積から、これまでの解釈とは違った資料の見方ができる場合にその着想をメモするところです。最後のhypothesisはideaの中から新しい理論が立ち上がりそうな時に、annotationやideaを統合して、それについて考察を書くところです。ただし、これは研究の場面に合わせて異なった用い方をしても問題ありません。研究に最適なツールの使用をお勧めします。   

## TODO 
現在は試験的に、Miradorの元となっているOpenSeadragonにて実装がなされています。段階的に、Miradorに移行していく予定です. 
現在は個人のみで資料を管理するようになっていますが、段階的にグループで同じ資料と資料への注釈を管理できるようにしていく予定です.  
現在、利用できる図書館はGallicaだけですが、DPLAやEuropeanaといった図書館に対応していく予定です.  


本番環境のメモリ不足でOSD gemが動かない状態が続いています。対応策を検討中です。 

## Author
IKKO Ohta  
MASANAO Sato 

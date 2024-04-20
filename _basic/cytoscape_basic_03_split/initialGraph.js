
import cytoscape from 'cytoscape';

//document.addEventListener('DOMContentLoaded', function() {


  //内容要素はJSONオブジェクトである、サーバ側加工しフロントに渡すもの
  var elements = {
      nodes:[
          //グラフの点、ノードのidが必須で、他の属性は機能によって調整するばよい
          {data: {id: '172', name: 'Tom Cruise GS', label: 'Person'}},
          {data: {id: '183', title: 'Top Gun', label: 'Movie'}}
      ],
      edges:[
          //グラフの線、エッジはsource(開始点id)とtarget(終了点id)は必須で、他の属性も追加可能
          {data: {source: '172', target: '183', relationship: 'Acted_In'}}
      ],
  }

  //内容要素を表現するCSS
  var style = [
      //セレクターで拾いた内容要素が 指定したCSSを適用する
      //ノードの中で、label属性は「Peson」のノードが青色で表示し、文字はname属性を表示する
      { selector: 'node[label = "Person"]', 
        css: {'background-color': '#6FB1FC', 'content': 'data(name)'}
      },
      //ノードの中で、label属性は「Movie」のノードがオレンジ色で表示し、文字はtitle属性を表示する
      { selector: 'node[label = "Movie"]', 
        css: {'background-color': '#F5A45D', 'content': 'data(title)'}
      },
      //エッジ全体で、文字はrelationship属性を表示する、終了点での矢印は三角形にする
      { selector: 'edge', 
        css: {'content': 'data(relationship)', 'target-arrow-shape': 'triangle'}
      } 
  ]
  //console.log(elements["nodes"][0]["data"]["name"]);
  //elements["nodes"][0]["data"]["name"] = "GS1120";

  //レイアウト設定
  var layout = {
      //グリッドレイアウトを適用する
      name : "grid"
  }

  // Cytoscapeオブジェクト初期化。
  var cy1 = cytoscape({ 
    // containerがHTML内の「cy」DOM要素に指定
    container: document.getElementById('cy1'),
    elements: elements,
    style: style,
    layout: layout,
  });

//   cy1.mount(document.getElementById("cy2"));
//   cy1.mount(document.getElementById("cy1"));



  var cy2 = cytoscape({ 
    // containerがHTML内の「cy」DOM要素に指定
    container: document.getElementById('cy2'),
    elements: elements,
    style: style,
    layout: layout,
  });

  //elements["nodes"][0]["data"]["name"] = "GS1120";


  function btClick() { 
       //console.log(elements["nodes"][0]["data"]["name"]);
       elements["nodes"][0]["data"]["name"] = "TEST001";
       //console.log(elements["nodes"][0]["data"]["name"]);
       cy1.data(elements);
       cy2.data(elements);
  } 
  let bt = document.getElementById('bt');
  bt.addEventListener('click', btClick);

/*
cy1.on('tap', 'node', function(evt){
  var node = evt.target;
  console.log( 'tapped ' + node.id() );
});
*/
cy1.on('drag', 'node', function(evt){
  var node = evt.target;
  var pos = node.position();
  var nodeid = node.id()
  var nodes = cy2.$('node');
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id() == nodeid) {
         nodes[i].position(pos) ;
    }
  }
});

cy2.on('drag', 'node', function(evt){
  var node = evt.target;
  var pos = node.position();
  var nodeid = node.id()
  var nodes = cy1.$('node');
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id() == nodeid) {
         nodes[i].position(pos) ;
    }
  }
});


/*
cy1.$('node').on('drag',  function(evt){
  var node = evt.target;
  console.log( 'drag ' + node.id() );
});
*/

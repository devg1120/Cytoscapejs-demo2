//$(function(){


document.addEventListener('DOMContentLoaded', function() {

  //内容要素はJSONオブジェクトである、サーバ側加工しフロントに渡すもの
  var elements = {
      nodes:[
          //グラフの点、ノードのidが必須で、他の属性は機能によって調整するばよい
          {data: {id: '172', name: 'Tom Cruise', label: 'Person'}},
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

  //レイアウト設定
  var layout = {
      //グリッドレイアウトを適用する
      name : "grid"
  }

  // Cytoscapeオブジェクト初期化。
  var cy = cytoscape({ 
    // containerがHTML内の「cy」DOM要素に指定
    container: document.getElementById('cy'),
    elements: elements,
    style: style,
    layout: layout,
  });
});


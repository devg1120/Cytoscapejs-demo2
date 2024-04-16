
import cytoscape from 'cytoscape';


var subg = window.subg = cytoscape({
  container: document.getElementById('subg'),

  boxSelectionEnabled: false,

  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: ':parent',
      css: {
        'text-valign': 'top',
        'text-halign': 'center',
      }
    },
    {
      selector: 'edge',
      css: {
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  elements: {
    nodes: [
      { data: { id: 'a', parent: 'b' }, position: { x: 215, y: 85 } },
      { data: { id: 'b' } },
      { data: { id: 'c', parent: 'b' }, position: { x: 300, y: 85 } },
      { data: { id: 'd' }, position: { x: 215, y: 175 } },
      { data: { id: 'e' } },
      { data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 } }
    ],
    edges: [
      { data: { id: 'ad', source: 'a', target: 'd' } },
      { data: { id: 'eb', source: 'e', target: 'b' } }

    ]
  },

  layout: {
    name: 'preset',
    padding: 5
  }
});



/*
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

  //レイアウト設定
  var layout = {
      //グリッドレイアウトを適用する
      name : "grid"
  }

  // Cytoscapeオブジェクト初期化。
  var cy = cytoscape({ 
    // containerがHTML内の「cy」DOM要素に指定
    container: document.getElementById('subg'),
    elements: elements,
    style: style,
    layout: layout,
  });
//});

*/


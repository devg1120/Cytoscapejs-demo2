
import cytoscape from 'cytoscape';
import  { SplitSyncBase } from './split_sync.js';

//document.addEventListener('DOMContentLoaded', function() {

  let sb = new SplitSyncBase("abc");
  sb.method1();

  var elements = {
      nodes:[
          {data: {id: '172', name: 'Tom Cruise GS', label: 'Person'}},
          {data: {id: '183', title: 'Top Gun', label: 'Movie'}}
      ],
      edges:[
          {data: {source: '172', target: '183', relationship: 'Acted_In'}}
      ],
  }

  var style = [
      { selector: 'node[label = "Person"]', 
        css: {'background-color': '#6FB1FC', 'content': 'data(name)'}
      },
      { selector: 'node[label = "Movie"]', 
        css: {'background-color': '#F5A45D', 'content': 'data(title)'}
      },
      { selector: 'edge', 
        css: {'content': 'data(relationship)', 'target-arrow-shape': 'triangle'}
      } 
  ]
  //console.log(elements["nodes"][0]["data"]["name"]);
  //elements["nodes"][0]["data"]["name"] = "GS1120";

  var layout = {
      name : "grid"
  }

  var cy1 = cytoscape({ 
    container: document.getElementById('cy1'),
    elements: elements,
    style: style,
    layout: layout,
  });


  var cy2 = cytoscape({ 
    container: document.getElementById('cy2'),
    elements: elements,
    style: style,
    layout: layout,
  });

  var cy3 = cytoscape({ 
    container: document.getElementById('cy3'),
    elements: elements,
    style: style,
    layout: layout,
  });

  function btClick() { 
       //console.log(elements["nodes"][0]["data"]["name"]);
       elements["nodes"][0]["data"]["name"] = "TEST001";
       //console.log(elements["nodes"][0]["data"]["name"]);
       cy1.data(elements);
       cy2.data(elements);
  } 
  let bt = document.getElementById('bt');
  bt.addEventListener('click', btClick);

sb.setPane(cy1);
sb.setPane(cy2);
sb.setPane(cy3);
//sb.unsetPane(cy2);

/*
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

*/

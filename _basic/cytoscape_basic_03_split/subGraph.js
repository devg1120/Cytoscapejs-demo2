
import cytoscape from 'cytoscape';

var style = [
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
  ]

var elements = {
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
  }

var layout = {
    name: 'preset',
    padding: 5
  }

var cy1 = window.subg = cytoscape({
  container: document.getElementById('subg1'),
  boxSelectionEnabled: false,
  style: style,
  elements: elements,
  layout: layout,
});

var cy2 = window.subg = cytoscape({
  container: document.getElementById('subg2'),
  boxSelectionEnabled: false,
  style: style,
  elements: elements,
  layout: layout,
});

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



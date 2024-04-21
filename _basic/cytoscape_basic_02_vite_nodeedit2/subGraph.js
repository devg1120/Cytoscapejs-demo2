
import cytoscape from 'cytoscape';
import nodeEditing from './cytoscape-node-editing.js';
import konva from 'konva';


 nodeEditing( cytoscape , konva ); // register extension



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
      { data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 },  classes: "noResizeMode" }
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


subg.nodeEditing({
     //resizeToContentCueImage: 'resizeCue.svg',
     //autoRemoveResizeToContentCue: true,
     //isNoResizeMode: function (node) { return node.is(".noResizeMode, :parent") }, // no active grapples
     isNoResizeMode: function (node) { return node.is(".noResizeMode") }, // no active grapples

});

/*
subg.nodeEditing({
    padding: 5, // spacing between node and grapples/rectangle
    undoable: true, // and if cy.undoRedo exists

    grappleSize: 8, // size of square dots
    grappleColor: "green", // color of grapples
    inactiveGrappleStroke: "inside 1px blue",               
    boundingRectangleLineDash: [4, 8], // line dash of bounding rectangle
    boundingRectangleLineColor: "red",
    boundingRectangleLineWidth: 1.5,
    zIndex: 999,

    minWidth: function (node) {
        var data = node.data("resizeMinWidth");
        return data ? data : 15;
    }, // a function returns min width of node
    minHeight: function (node) {
        var data = node.data("resizeMinHeight");
        return data ? data : 15;
    }, // a function returns min height of node

    // Getters for some style properties the defaults returns ele.css('property-name')
    // you are encouraged to override these getters
    getCompoundMinWidth: function(node) { 
      return node.css('min-width'); 
    },
    getCompoundMinHeight: function(node) { 
      return node.css('min-height'); 
    },
    getCompoundMinWidthBiasRight: function(node) {
      return node.css('min-width-bias-right');
    },
    getCompoundMinWidthBiasLeft: function(node) { 
      return node.css('min-width-bias-left');
    },
    getCompoundMinHeightBiasTop: function(node) {
      return node.css('min-height-bias-top');
    },
    getCompoundMinHeightBiasBottom: function(node) { 
      return node.css('min-height-bias-bottom');
    },

    // These optional functions will be executed to set the width/height of a node in this extension
    // Using node.css() is not a recommended way (http://js.cytoscape.org/#eles.style) to do this. Therefore,
    // overriding these defaults so that a data field or something like that will be used to set node dimentions
    // instead of directly calling node.css() is highly recommended (Of course this will require a proper 
    // setting in the stylesheet).
    setWidth: function(node, width) { 
        node.css('width', width);
    },
    setHeight: function(node, height) {
        node.css('height', height);
    },

    isFixedAspectRatioResizeMode: function (node) { return node.is(".fixedAspectRatioResizeMode") },// with only 4 active grapples (at corners)
    //isNoResizeMode: function (node) { return node.is(".noResizeMode, :parent") }, // no active grapples
    isNoResizeMode: function (node) { return node.is(".noResizeMode ") }, // no active grapples
    isNoControlsMode: function (node) { return node.is(".noControlsMode") }, // no controls - do not draw grapples

    cursors: { // See http://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor
        // May take any "cursor" css property
        default: "default", // to be set after resizing finished or mouseleave
        inactive: "not-allowed",
        nw: "nw-resize",
        n: "n-resize",
        ne: "ne-resize",
        e: "e-resize",
        se: "se-resize",
        s: "s-resize",
        sw: "sw-resize",
        w: "w-resize"
    },

    // enable resize content cue according to the node
    resizeToContentCueEnabled: function (node) {
      return true;
    },
    // handle resize to content with given function
    // default function resizes node according to the label
    resizeToContentFunction: undefined,
    // select position of the resize to content cue
    // options: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    resizeToContentCuePosition: 'bottom-right',
    // relative path of the resize to content cue image
    resizeToContentCueImage: 'resizeCue.svg',
    enableMovementWithArrowKeys: true,
    autoRemoveResizeToContentCue: false,
 });
*/

subg.on("nodeediting.resizestart", function (e, type) {
     console.log(type);
});

subg.on("nodeediting.resizeend", function (e, type) {
     document.body.style.cursor = 'initial';
});



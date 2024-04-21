
import cytoscape from 'cytoscape';
import nodeEditing from './cytoscape-node-editing.js';
import konva from 'konva';


  nodeEditing( cytoscape , konva ); // register extension

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

  var layout = {
      name : "grid"
  }

  var cy = cytoscape({ 
    container: document.getElementById('cy'),
    elements: elements,
    style: style,
    layout: layout,
  });

  cy.nodeEditing({
     //resizeToContentCueImage: 'resizeCue.svg',
     //autoRemoveResizeToContentCue: true,
     grappleSize: 6, // size of square dots
     grappleColor: "red", // color of grapples
  });

/*
  cy.nodeEditing({
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
     console.log("setWidth");
         node.css('width', width);
     },
     setHeight: function(node, height) {
         node.css('height', height);
     },

     isFixedAspectRatioResizeMode: function (node) { return node.is(".fixedAspectRatioResizeMode") },// with only 4 active grapples (at corners)
     isNoResizeMode: function (node) { return node.is(".noResizeMode, :parent") }, // no active grapples
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
     resizeToContentCueImage: '/node_modules/cytoscape-node-editing/resizeCue.svg',
     enableMovementWithArrowKeys: true,
     autoRemoveResizeToContentCue: false,
  });

*/

   cy.on("nodeediting.resizestart", function (e, type) {
   	console.log(type);
   });
   
   cy.on("nodeediting.resizeend", function (e, type) {
   	document.body.style.cursor = 'initial';
   });




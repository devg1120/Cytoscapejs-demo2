
export class SplitSyncBase {
    constructor(name) {
	    this.name = name;
	    this.split_panes = [];
    }
    method1() {
	   console.log(this.name);
    }
    method2() {
    }

    setPane( pane ) {
      let that = this;
      pane.on('drag', 'node', function(evt){
           var node = evt.target;
           var pos = node.position();
           var nodeid = node.id()
           for (let i = 0; i < that.split_panes.length; i++) {
                var c_pane = that.split_panes[i]
                if (c_pane === pane) continue;
                var nodes = c_pane.$('node');
                for (let i = 0; i < nodes.length; i++) {
                  if (nodes[i].id() == nodeid) {
                       nodes[i].position(pos) ;
                  }
                }
           }
         });
      this.split_panes.push(pane);
    }
    unsetPane( pane ) {
       pane.removeListener('drag', 'node');
       let new_array = [];
       while(true) {
           let ele = this.split_panes.pop();
           if ( ele == undefined ) break;
           if ( ele === pane ) continue;
           new_array.push(ele);
       }
       this.split_panes = new_array;
    }

}


console.log("HI");

var savedGraph;


var defaultNoApps = '{"nodes":[{"id":2,"title":"Life is Linear","x":535.4767456054688,"y":44.850502014160156},{"id":3,"title":"Linear Systems","x":787.8787841796875,"y":151.95350646972656},{"id":4,"title":"Images","x":434.1212463378906,"y":189.48680114746094},{"id":7,"title":"Represent","x":625.3372802734375,"y":212.78761291503906},{"id":10,"title":"Transform","x":363.6809387207031,"y":359.0647277832031},{"id":11,"title":"Scalar Math","x":569.4366149902344,"y":372.5615539550781},{"id":12,"title":"Matrix Math","x":183.78392028808594,"y":269.1148986816406},{"id":13,"title":"Rotation","x":218.08291625976562,"y":484.2952575683594},{"id":19,"title":"Translation","x":16.216278076171875,"y":397.7032775878906}],"edges":[{"source":2,"target":4},{"source":2,"target":3},{"source":4,"target":7},{"source":4,"target":10},{"source":10,"target":11},{"source":10,"target":12},{"source":12,"target":13},{"source":12,"target":19}]}';
var defaultAllApps = '{"nodes":[{"id":2,"title":"Life is Linear","x":543,"y":47},{"id":3,"title":"Linear Systems","x":790.0282592773438,"y":105.73929595947266},{"id":4,"title":"Images","x":543.7456359863281,"y":230.32725524902344},{"id":5,"title":"Table Magic","x":965.729248046875,"y":42.30903625488281},{"id":6,"title":"Guess your number","x":952.6928100585938,"y":199.5150604248047},{"id":7,"title":"Represent","x":740.33544921875,"y":314.8887939453125},{"id":8,"title":"ASCII Art","x":935.6243896484375,"y":387.4302673339844},{"id":9,"title":"Face Swap","x":789.4849853515625,"y":501.4019775390625},{"id":10,"title":"Transform","x":390.5496826171875,"y":373.0364685058594},{"id":11,"title":"Scalar Math","x":576.9598388671875,"y":458.5414733886719},{"id":12,"title":"Matrix Math","x":243.96987915039062,"y":469.0182189941406},{"id":13,"title":"Rotation","x":157.89698791503906,"y":598.2186584472656},{"id":14,"title":"Translation","x":63.02641296386719,"y":470.8568420410156},{"id":15,"title":"Blend It","x":468.5113830566406,"y":605.9899291992188},{"id":16,"title":"Color It","x":673.46484375,"y":604.3636474609375},{"id":17,"title":"Spinny Art","x":317.77391052246094,"y":684.6070175170898},{"id":18,"title":"Tile Art","x":-76.69096374511719,"y":634.8230514526367}],"edges":[{"source":2,"target":4},{"source":2,"target":3},{"source":3,"target":6},{"source":3,"target":5},{"source":4,"target":7},{"source":7,"target":8},{"source":7,"target":9},{"source":4,"target":10},{"source":10,"target":11},{"source":10,"target":12},{"source":12,"target":13},{"source":12,"target":14},{"source":11,"target":16},{"source":11,"target":15},{"source":13,"target":17},{"source":13,"target":18},{"source":14,"target":18}]}';

var dragged = false;
showAllApplication = localStorage.getItem("showAllApps");
//console.log(showAllApplication);

if (showAllApplication == 1) {
    //already showing all Apps
    document.getElementById("showAllApps").innerText = "Hide all Applications";
    if (localStorage.getItem("savedGraphAllApps") != null) {
        txtRes = localStorage.getItem("savedGraphAllApps");
    } else {
        txtRes = defaultAllApps;
    }

} else {
    //not showing all apps
    document.getElementById("showAllApps").innerText = "Show all Applications!";
    if (localStorage.getItem("savedGraphNoApps") != null) {
        txtRes = localStorage.getItem("savedGraphNoApps");
    } else {
        txtRes = defaultNoApps;
    }
}

//console.log(localStorage.getItem("savedGraph"));
// if (localStorage.getItem("savedGraph") != null) {
//     txtRes = localStorage.getItem("savedGraph");
// }


function refresh() {
    if (showAllApplication == 1) {
        //are showing all Apps and then clicked to Hide all Apps
        document.getElementById("showAllApps").innerText = "Show all Applications!";
        localStorage.setItem("showAllApps", 0);
        //console.log(localStorage.getItem("showAllApps"));
        location.reload();
    } else {
        document.getElementById("showAllApps").innerText = "Hide all Applications";
        localStorage.setItem("showAllApps", 1);
        //console.log(localStorage.getItem("showAllApps"));
        location.reload();
    }

}

function clickedNode(id) {
    if (dragged == true) {

        if (showAllApplication == 1) {
            localStorage.setItem("savedGraphAllApps", savedGraph);
        } else {
            localStorage.setItem("savedGraphNoApps", savedGraph);
        }
        //console.log("saved!");

        return;
    }

    console.log("GO TO PAGE!", id);
    hi(id)


}









document.onload = (function(d3, saveAs, Blob, undefined) {
    "use strict";

    // TODO add user settings
    var consts = {
        defaultTitle: "random variable"
    };
    var settings = {
        appendElSpec: "#graph"
    };
    // define graphcreator object
    var GraphCreator = function(svg, nodes, edges) {
        var thisGraph = this;
        thisGraph.idct = 0;

        thisGraph.nodes = nodes || [];
        thisGraph.edges = edges || [];

        thisGraph.state = {
            selectedNode: null,
            selectedEdge: null,
            mouseDownNode: null,
            mouseDownLink: null,
            justDragged: false,
            justScaleTransGraph: false,
            lastKeyDown: -1,
            shiftNodeDrag: false,
            selectedText: null
        };

        // define arrow markers for graph links
        var defs = svg.append('svg:defs');
        defs.append('svg:marker')
            .attr('id', 'end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', "32")
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');

        // define arrow markers for leading arrow
        defs.append('svg:marker')
            .attr('id', 'mark-end-arrow')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 7)
            .attr('markerWidth', 3.5)
            .attr('markerHeight', 3.5)
            .attr('orient', 'auto')
            .append('svg:path')
            .attr('d', 'M0,-5L10,0L0,5');

        thisGraph.svg = svg;
        thisGraph.svgG = svg.append("g")
            .classed(thisGraph.consts.graphClass, true);
        var svgG = thisGraph.svgG;

        // displayed when dragging between nodes
        thisGraph.dragLine = svgG.append('svg:path')
            .attr('class', 'link dragline hidden')
            .attr('d', 'M0,0L0,0')
            .style('marker-end', 'url(#mark-end-arrow)');

        // svg nodes and edges
        thisGraph.paths = svgG.append("g").selectAll("g");
        thisGraph.circles = svgG.append("g").selectAll("g");

        thisGraph.drag = d3.behavior.drag()
            .origin(function(d) {
                return { x: d.x, y: d.y };
            })
            .on("drag", function(args) {
                thisGraph.state.justDragged = true;
                thisGraph.dragmove.call(thisGraph, args);
            })
            .on("dragend", function() {
                // todo check if edge-mode is selected
            });

        //listen for key events
        // d3.select(window).on("keydown", function() {
        //         thisGraph.svgKeyDown.call(thisGraph);
        //     })
        //     .on("keyup", function() {
        //         thisGraph.svgKeyUp.call(thisGraph);
        //     });


        svg.on("mousedown", function(d) { thisGraph.svgMouseDown.call(thisGraph, d); });
        svg.on("mouseup", function(d) { thisGraph.svgMouseUp.call(thisGraph, d); });

        // listen for dragging
        var dragSvg = d3.behavior.zoom()
            .on("zoom", function() {
                if (d3.event.sourceEvent.shiftKey) {
                    // TODO  the internal d3 state is still changing
                    return false;
                } else {
                    thisGraph.zoomed.call(thisGraph);
                }
                return true;
            })
            .on("zoomstart", function() {
                var ael = d3.select("#" + thisGraph.consts.activeEditId).node();
                if (ael) {
                    ael.blur();
                }
                if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
            })
            .on("zoomend", function() {
                d3.select('body').style("cursor", "auto");
            });

        svg.call(dragSvg).on("dblclick.zoom", null);

        // listen for resize
        window.onresize = function() { thisGraph.updateWindow(svg); };

        try {
            var jsonObj = JSON.parse(txtRes);
            thisGraph.nodes = jsonObj.nodes;
            thisGraph.setIdCt(jsonObj.nodes.length + 1);
            var newEdges = jsonObj.edges;
            newEdges.forEach(function(e, i) {
                newEdges[i] = {
                    source: thisGraph.nodes.filter(function(n) {
                        return n.id == e.source;
                    })[0],
                    target: thisGraph.nodes.filter(function(n) {
                        return n.id == e.target;
                    })[0]
                };
            });
            thisGraph.edges = newEdges;
            thisGraph.updateGraph();
        } catch (err) {
            window.alert("Error drawing graph " + err.message);
            return;
        }

        d3.select("#default-graph").on("click", function() {
            console.log("back to default!");
            if (showAllApplication == 1) {
                savedGraph = defaultAllApps;
                localStorage.setItem("savedGraphAllApps", defaultAllApps);
            } else {
                savedGraph = defaultNoApps;
                localStorage.setItem("savedGraphNoApps", defaultNoApps);
            }
            location.reload();
        });
    };














    GraphCreator.prototype.setIdCt = function(idct) {
        this.idct = idct;
    };

    GraphCreator.prototype.consts = {
        selectedClass: "selected",
        connectClass: "connect-node",
        circleGClass: "conceptG",
        graphClass: "graph",
        activeEditId: "active-editing",
        ENTER_KEY: 13,
        nodeRadius: 50
    };

    /* PROTOTYPE FUNCTIONS */

    GraphCreator.prototype.dragmove = function(d) {
        var thisGraph = this;
        if (thisGraph.state.shiftNodeDrag) {
            thisGraph.dragLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + d3.mouse(thisGraph.svgG.node())[0] + ',' + d3.mouse(this.svgG.node())[1]);
        } else {
            d.x += d3.event.dx;
            d.y += d3.event.dy;
            thisGraph.updateGraph();
        }
    };



    /* select all text in element: taken from http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element */
    GraphCreator.prototype.selectElementContents = function(el) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    };


    /* insert svg line breaks: taken from http://stackoverflow.com/questions/13241475/how-do-i-include-newlines-in-labels-in-d3-charts */
    GraphCreator.prototype.insertTitleLinebreaks = function(gEl, title) {
        var words = title.split(/\s+/g),
            nwords = words.length;
        var el = gEl.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "-" + (nwords - 1) * 7.5);

        for (var i = 0; i < words.length; i++) {
            var tspan = el.append('tspan').text(words[i]);
            if (i > 0)
                tspan.attr('x', 0).attr('dy', '15');
        }
    };


    // remove edges associated with a node
    GraphCreator.prototype.spliceLinksForNode = function(node) {
        var thisGraph = this,
            toSplice = thisGraph.edges.filter(function(l) {
                return (l.source === node || l.target === node);
            });
        toSplice.map(function(l) {
            thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
        });
    };

    GraphCreator.prototype.replaceSelectEdge = function(d3Path, edgeData) {
        var thisGraph = this;
        d3Path.classed(thisGraph.consts.selectedClass, true);
        if (thisGraph.state.selectedEdge) {
            thisGraph.removeSelectFromEdge();
        }
        thisGraph.state.selectedEdge = edgeData;
    };

    GraphCreator.prototype.replaceSelectNode = function(d3Node, nodeData) {
        var thisGraph = this;
        d3Node.classed(this.consts.selectedClass, true);
        if (thisGraph.state.selectedNode) {
            thisGraph.removeSelectFromNode();
        }
        thisGraph.state.selectedNode = nodeData;
    };

    GraphCreator.prototype.removeSelectFromNode = function() {
        var thisGraph = this;
        thisGraph.circles.filter(function(cd) {
            return cd.id === thisGraph.state.selectedNode.id;
        }).classed(thisGraph.consts.selectedClass, false);
        thisGraph.state.selectedNode = null;
    };

    GraphCreator.prototype.removeSelectFromEdge = function() {
        var thisGraph = this;
        thisGraph.paths.filter(function(cd) {
            return cd === thisGraph.state.selectedEdge;
        }).classed(thisGraph.consts.selectedClass, false);
        thisGraph.state.selectedEdge = null;
    };

    GraphCreator.prototype.pathMouseDown = function(d3path, d) {
        var thisGraph = this,
            state = thisGraph.state;
        d3.event.stopPropagation();
        state.mouseDownLink = d;

        if (state.selectedNode) {
            thisGraph.removeSelectFromNode();
        }

        var prevEdge = state.selectedEdge;
        if (!prevEdge || prevEdge !== d) {
            thisGraph.replaceSelectEdge(d3path, d);
        } else {
            thisGraph.removeSelectFromEdge();
        }
    };

    // mousedown on node
    GraphCreator.prototype.circleMouseDown = function(d3node, d) {
        var thisGraph = this,
            state = thisGraph.state;
        d3.event.stopPropagation();
        state.mouseDownNode = d;
    };


    // mouseup on nodes
    GraphCreator.prototype.circleMouseUp = function(d3node, d) {
        dragged = false
        console.log(d)
        var thisGraph = this,
            state = thisGraph.state,
            consts = thisGraph.consts;
        // reset the states
        state.shiftNodeDrag = false;
        d3node.classed(consts.connectClass, false);

        var mouseDownNode = state.mouseDownNode;

        if (!mouseDownNode) return;

        thisGraph.dragLine.classed("hidden", true);

        if (mouseDownNode !== d) {
            // we're in a different node: create new edge for mousedown edge and add to graph
            // var newEdge = { source: mouseDownNode, target: d };
            // var filtRes = thisGraph.paths.filter(function(d) {
            //     if (d.source === newEdge.target && d.target === newEdge.source) {
            //         thisGraph.edges.splice(thisGraph.edges.indexOf(d), 1);
            //     }
            //     return d.source === newEdge.source && d.target === newEdge.target;
            // });
            // if (!filtRes[0].length) {
            //     thisGraph.edges.push(newEdge);
            //     thisGraph.updateGraph();
            // }
        } else {
            // we're in the same node
            if (state.justDragged) {
                console.log("dragged!")
                var saveEdges = [];
                thisGraph.edges.forEach(function(val, i) {
                    saveEdges.push({ source: val.source.id, target: val.target.id });
                });
                savedGraph = JSON.stringify({ "nodes": thisGraph.nodes, "edges": saveEdges });
                localStorage.setItem("savedGraph", savedGraph);
                dragged = true
                    // dragged, not clicked
                state.justDragged = false;
            } else {
                // clicked, not dragged
                if (d3.event.shiftKey) {
                    // shift-clicked node: edit text content
                    //var d3txt = thisGraph.changeTextOfNode(d3node, d);
                    //var txtNode = d3txt.node();
                    //thisGraph.selectElementContents(txtNode);
                    //txtNode.focus();
                } else {
                    // if (state.selectedEdge) {
                    //     thisGraph.removeSelectFromEdge();
                    // }
                    // var prevNode = state.selectedNode;

                    // if (!prevNode || prevNode.id !== d.id) {
                    //     thisGraph.replaceSelectNode(d3node, d);
                    // } else {
                    //     thisGraph.removeSelectFromNode();
                    // }
                }
            }
        }
        state.mouseDownNode = null;

        clickedNode(d.id)
        return;

    }; // end of circles mouseup

    // mousedown on main svg
    GraphCreator.prototype.svgMouseDown = function() {
        this.state.graphMouseDown = true;
    };

    // mouseup on main svg
    GraphCreator.prototype.svgMouseUp = function() {
        var thisGraph = this,
            state = thisGraph.state;
        if (state.justScaleTransGraph) {
            // dragged not clicked
            state.justScaleTransGraph = false;
        } else if (state.graphMouseDown) {

        }
        state.graphMouseDown = false;
    };



    // call to propagate changes to graph
    GraphCreator.prototype.updateGraph = function() {

        var thisGraph = this,
            consts = thisGraph.consts,
            state = thisGraph.state;

        thisGraph.paths = thisGraph.paths.data(thisGraph.edges, function(d) {
            return String(d.source.id) + "+" + String(d.target.id);
        });
        var paths = thisGraph.paths;
        // update existing paths
        paths.style('marker-end', 'url(#end-arrow)')
            .classed(consts.selectedClass, function(d) {
                return d === state.selectedEdge;
            })
            .attr("d", function(d) {
                return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
            });

        // add new paths
        paths.enter()
            .append("path")
            .style('marker-end', 'url(#end-arrow)')
            .classed("link", true)
            .attr("d", function(d) {
                return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
            })
            .on("mousedown", function(d) {
                thisGraph.pathMouseDown.call(thisGraph, d3.select(this), d);
            })
            .on("mouseup", function(d) {
                state.mouseDownLink = null;
            });

        // remove old links
        paths.exit().remove();

        // update existing nodes
        thisGraph.circles = thisGraph.circles.data(thisGraph.nodes, function(d) {
            return d.id;
        });
        thisGraph.circles.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        // add new nodes
        var newGs = thisGraph.circles.enter()
            .append("g");


        newGs.classed(consts.circleGClass, true)
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            })
            .on("mouseover", function(d) {
                if (state.shiftNodeDrag) {
                    d3.select(this).classed(consts.connectClass, true);
                }
            })
            .on("mouseout", function(d) {
                d3.select(this).classed(consts.connectClass, false);
            })
            .on("mousedown", function(d) {
                thisGraph.circleMouseDown.call(thisGraph, d3.select(this), d);
            })
            .on("mouseup", function(d) {
                thisGraph.circleMouseUp.call(thisGraph, d3.select(this), d);
            })
            .call(thisGraph.drag);

        newGs.append("circle")
            .attr("r", String(consts.nodeRadius));

        newGs.each(function(d) {
            thisGraph.insertTitleLinebreaks(d3.select(this), d.title);
        });

        // remove old nodes
        thisGraph.circles.exit().remove();
    };

    GraphCreator.prototype.zoomed = function() {
        this.state.justScaleTransGraph = true;
        d3.select("." + this.consts.graphClass)
            .attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
    };

    GraphCreator.prototype.updateWindow = function(svg) {
        var docEl = document.documentElement,
            bodyEl = document.getElementsByTagName('body')[0];
        var x = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
        var y = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;
        svg.attr("width", x).attr("height", y);
    };



    /**** MAIN ****/

    // warn the user when leaving

    var docEl = document.documentElement,
        bodyEl = document.getElementsByTagName('body')[0];

    var width = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth,
        height = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;

    var xLoc = width / 2 - 25,
        yLoc = 100;

    // initial node data
    var nodes = [];
    var edges = [];


    /** MAIN SVG **/
    var svg = d3.select(settings.appendElSpec).append("svg")
        .attr("width", width)
        .attr("height", height);
    var graph = new GraphCreator(svg, nodes, edges);
    graph.setIdCt(2);
    graph.updateGraph();
})(window.d3, window.saveAs, window.Blob);

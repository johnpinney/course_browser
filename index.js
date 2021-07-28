

G6.registerBehavior("url-node", {
  getDefaultCfg() {
    return {
      multiple: true
    };
  },
  getEvents() {
    return {
      "node:click": "onNodeClick",
      "canvas:click": "onCanvasClick"
    };
  },
  onNodeClick(e) {
    const graph = this.graph;
    const item = e.item;
    window.open(item.url).focus();
  },
  onCanvasClick(e) {
    // shouldUpdate can be overrode by users. Returning true means turning the 'active' to be false for all the nodes
    if (this.shouldUpdate(e)) {
      removeNodesState();
    }
  },
  removeNodesState() {
    graph.findAllByState("node", "active").forEach((node) => {
      graph.setItemState(node, "active", false);
    });
  }
});

G6.registerNode(
  "sql",
  {
    drawShape(cfg, group) {
      const rect = group.addShape("rect", {
        attrs: {
          x: -75,
          y: -25,
          width: 150,
          height: 50,
          radius: 10,
          stroke: "#5B8FF9",
          fill: "#C6E5FF",
          lineWidth: 3
        },
        name: "rect-shape"
      });
      if (cfg.name) {
        group.addShape("text", {
          attrs: {
            text: cfg.name,
            x: 0,
            y: 0,
            fill: "#00287E",
            fontSize: 14,
            textAlign: "center",
            textBaseline: "middle",
            fontWeight: "bold"
          },
          name: "text-shape"
        });
      }
      return rect;
    }
  },
  "single-node"
);


const container = document.getElementById("container");
const width = container.scrollWidth;
const height = container.scrollHeight || 500;
const graph = new G6.Graph({
  container: "container",
  width,
  height,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node", "url-node"]
  },
  layout: {
    type: "dagre",
    controlPoints: true,
    nodesep: 80,
    ranksep: 50
  },
  defaultNode: {
    size: [20, 20],
    type: "sql",
    style: {
      lineWidth: 2,
      stroke: "#5B8FF9",
      fill: "#C6E5FF"
    }
  },
  defaultEdge: {
    type: "polyline",
    size: 3,
    color: "#e2e2e2",
    style: {
      endArrow: {
        path: "M 0,0 L 8,4 L 8,-4 Z",
        fill: "#e2e2e2"
      },
      radius: 20
    }
  }
});
graph.data(data);
graph.render();

if (typeof window !== "undefined")
  window.onresize = () => {
    if (!graph || graph.get("destroyed")) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };

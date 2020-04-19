//1) graphs
/*
    A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, 
    together with a set of unordered pairs of these vertices 
    for an undirected graph or a set of ordered pairs for a directed graph.
*/

//uses of graphs
/*
    Social Networks
    Location / Mapping
    Routing Algorithms
    Visual Hierarchy
    File System Optimizations
    EVERYWHERE!
*/

//use of graphs in Recommendations
/*
    "People also watched"
    "You might also like..."
    "People you might know"
    "Frequently bought with"
*/

//terminologies of graphs

/*
    Vertex - a node
    Edge - connection between nodes
    Weighted/Unweighted - values assigned to distances between vertices
    Directed/Undirected - directions assigned to distanced between vertices
*/

//1.a) adjancy list vs adjancy matrix
/*
    OPERATION	    ADJACENCY LIST	       ADJACENCY MATRIX
    Add Vertex	        O(1)	                ​O(|V^2|)
    Add Edge	        O(1)	                O(1)
    Remove Vertex	    O(|V| + |E|)	        O(|V^2|)
    Remove Edge	        O(|E|)	                O(1)
    Query	            O(|V| + |E|)	        O(1)
    Storage	            O(|V| + |E|)	        ​O(|V^2|)

    more comparisons
    1) Adjacency List
        Can take up less space (in sparse graphs)
        Faster to iterate over all edges
        Can be slower to lookup specific edge

    2) Adjacency Matrix
        Takes up more space (in sparse graphs)
        Slower to iterate over all edges
        Faster to lookup specific edge
*/

//Listen! I am building code for undirected graphs

//1.b) adding a vertex
//pseudocode
/*
    Write a method called addVertex, which accepts a name of a vertex
    It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
*/

//1.c) adding an edge
//pseudocode
/*
    This function should accept two vertices, we can call them vertex1 and vertex2
    The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    Don't worry about handling errors/invalid vertices
*/

//1.d) removing a vertex
//pseudocode
/*
    The function should accept a vertex to remove
    The function should loop as long as there are any other vertices in the adjacency list for that vertex
    Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    delete the key in the adjacency list for that vertex
*/

//1.e) removing an edge
//pseudocode
/*
    This function should accept two vertices, we'll call them vertex1 and vertex2
    The function should reassign the key of vertex1 to be an array that does not contain vertex2
    The function should reassign the key of vertex2 to be an array that does not contain vertex1
    Don't worry about handling errors/invalid vertices
*/

//2) graph traversal - Visiting/Updating/Checking each vertex in a graph
//uses of graph traversal
/*
    Peer to peer networking
    Web crawlers
    Finding "closest" matches/recommendations
    Shortest path problems
        GPS Navigation
        Solving mazes
        AI (shortest path to win the game)
*/

//2.a) dfs - Explore as far as possible down one branch before "backtracking"
// Recursive pseudocode dfs
/*
    The function should accept a starting node
    Create a list to store the end result, to be returned at the very end
    Create an object to store visited vertices
    Create a helper function which accepts a vertex
        The helper function should return early if the vertex is empty
        The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
        Loop over all of the values in the adjacencyList for that vertex
        If any of those values have not been visited, recursively invoke the helper function with that vertex
    Invoke the helper function with the starting vertex
    Return the result array

    OR

    DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
*/

// Iterative pseudocode dfs
/*
    The function should accept a starting node
    Create a stack to help use keep track of vertices (use a list/array)
    Create a list to store the end result, to be returned at the very end
    Create an object to store visited vertices
    Add the starting vertex to the stack, and mark it visited
    While the stack has something in it:
        Pop the next vertex from the stack
        If that vertex hasn't been visited yet:
            ​Mark it as visited
            Add it to the result list
            Push all of its neighbors into the stack
    Return the result array

    OR
    
    DFS-iterative(start):
        let S be a stack
        S.push(start)
        while S is not empty
            vertex = S.pop()
            if vertex is not labeled as discovered:
                visit vertex (add to result list)
                label vertex as discovered
                for each of vertex's neighbors, N do 
                    S.push(N)
*/

//2.b) bfs -Visit neighbors at current depth first!
//pseudocode
/*
    This function should accept a starting vertex
    Create a queue (you can use an array) and place the starting vertex in it
    Create an array to store the nodes visited
    Create an object to store nodes visited
    Mark the starting vertex as visited
    Loop as long as there is anything in the queue
    Remove the first vertex from the queue and push it into the array that stores nodes visited
    Loop over each vertex in the adjacency list for the vertex you are visiting.
    If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    Once you have finished looping, return the array of visited nodes
*/

// 3) shortest path algorithms
/*
    When working with weighted and directed/undirected graphs, 
    we very commonly want to know how to get from one vertex to another! Better yet, how to do it quickly.
    What's the fastest way to get from point A to point B?
*/

//3.a) Dijkstra's Algorithm
/*
    One of the most famous and widely used algorithms around!
    Finds the shortest path between two vertices on a graph
    "What's the fastest way to get from point A to point B?"

    Whos was he?
        Edsger Dijkstra was a Dutch programmer, physicist, essayist, and all around smarty-pants
        He helped to advance the field of computer science from an "art" to an academic discipline
        Many of his discoveries and algorithms are still commonly used to this day.
*/

//uses of Dijkstra's Algorithm
/*
    GPS - finding fastest route
    Network Routing - finds open shortest path for data
    Biology - used to model the spread of viruses among humans
    Airline tickets - finding cheapest route to your destination
    Many other uses!
*/

//how Dijkstra's Algorithm works?
/*
    Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
    Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
    For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from the starting node.
    If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
*/

//pseudocode for Dijkstra's Algorithm
/*
    This function should accept a starting and ending vertex
    Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
    After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
    Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    Start looping as long as there is anything in the priority queue
        dequeue a vertex from the priority queue
        If that vertex is the same as the ending vertex - we are done!
        Otherwise loop through each value in the adjacency list at that vertex
            Calculate the distance to that vertex from the starting vertex
            if the distance is less than what is currently stored in our distances object
                update the distances object with new lower distance
                update the previous object to contain that vertex
                enqueue the vertex with the total distance from the start node
*/

//more about graphs
/*
    Graphs are collections of vertices connected by edges
    Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
    Graphs can contain weights and directions as well as cycles
    Just like trees, graphs can be traversed using BFS and DFS
    Shortest path algorithms like Dijkstra can be altered using a heuristic to achieve better results like those with A*
*/

//code
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]

//code for Dijkstra's Algorithm

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");

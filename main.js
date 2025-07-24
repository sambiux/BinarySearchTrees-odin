import { Tree } from './tree.js';

function randomArray(size = 15, max = 100) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

const data = randomArray();
console.log("Datos iniciales:", data);

const myTree = new Tree(data);

console.log("\n¿Está balanceado?", myTree.isBalanced());

console.log("\nRecorrido INORDEN:");
myTree.inOrder(n => console.log(n.value));

console.log("\nRecorrido PREORDEN:");
myTree.preOrder(n => console.log(n.value));

console.log("\nRecorrido POSTORDEN:");
myTree.postOrder(n => console.log(n.value));

console.log("\nRecorrido POR NIVELES:");
myTree.levelOrder(n => console.log(n.value));

// Insertamos números grandes para desbalancear
myTree.insert(myTree.root, 150);
myTree.insert(myTree.root, 200);
myTree.insert(myTree.root, 300);

console.log("\n¿Desbalanceado?", myTree.isBalanced());

console.log("\nRebalanceando...");
myTree.rebalance();

console.log("¿Balanceado ahora?", myTree.isBalanced());

console.log("\nInorden tras rebalanceo:");
myTree.inOrder(n => console.log(n.value));

# 🌳 Project: Balanced Binary Search Tree (BST) in JavaScript

This project implements a fully functional **Balanced Binary Search Tree (BST)** in JavaScript. It supports essential operations like insertion, deletion, search, traversals, height/depth checks, and balancing. The tree can automatically **rebalance itself** when it becomes unbalanced, and provides multiple traversal methods to explore its structure.

---

## 📁 Project Structure

```
proyectoArbolBinarioDeBusqueda/
├── main.js         # Controller script: runs the tree
├── tree.js         # Tree and Node class definitions
└── package.json    # Node.js config file (with ES module type)
```

---

## 🧠 Implemented Features

- ✅ Build a balanced BST from an initial array
- ✅ Insert new values
- ✅ Delete nodes (handling all 3 cases: leaf, one child, two children)
- ✅ Search for a node by value
- ✅ Calculate:
  - Node **depth**
  - Node **height**
- ✅ Check if the tree is balanced (`isBalanced`)
- ✅ Rebalance the tree (`rebalance`)
- ✅ Tree traversals:
  - 🔁 In-order (`inOrder`)
  - 🔁 Pre-order (`preOrder`)
  - 🔁 Post-order (`postOrder`)
  - 🔁 Level-order (Breadth-First Search with `levelOrder`)

---

## 🚀 How to Run the Project

### 1. Requirements

- Install [Node.js](https://nodejs.org) (version 14 or higher recommended)

### 2. Setup & Execution

```bash
# In your project folder:
npm init -y               # (if you haven't created package.json yet)
# Make sure package.json includes: "type": "module"
node main.js              # Runs the tree script
```

---

## 💻 Example output

```
Initial data: [42, 30, 81, 99, 62, 15, 95, 83, 66, 64, 42, 27, 81, 12, 52]
Is the tree balanced? true

IN-ORDER Traversal:
12
15
27
30
42
52
...

Unbalanced? true
Rebalancing...
Balanced again? true
```

---

## 📦 Technologies Used

- 🟨 JavaScript (ES6 / ESModules)
- ⚙️ Node.js

---

## ✍️ Author

Created by **sam daz**



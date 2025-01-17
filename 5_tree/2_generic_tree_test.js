import GenericTree from "./2_generic_tree.js";

const genericTree = new GenericTree();

const root = genericTree.add("Livro Azul", null);

const intro = genericTree.add("Introdução", root);
const cap1 = genericTree.add("Capítulo 1", root);
const cap2 = genericTree.add("Capítulo 2", root);

genericTree.add("Para quem é este livro", intro);
genericTree.add("Agradecimentos", intro);

genericTree.add("Conceitos", cap1);
genericTree.add("Aplicações", cap1);

const cap2Sec1 = genericTree.add("Métodos", cap2);
genericTree.add("Problema terreno", cap2);
genericTree.add("Problema carros", cap2);

genericTree.add("Método recursivo", cap2Sec1);
genericTree.add("Método imperativo", cap2Sec1);

console.log("size: " + genericTree.size());
console.log("isEmpty: " + genericTree.isEmpty());

const pos1 = genericTree.find("Livro Azul");
const pos2 = genericTree.find("Capítulo 1");
const pos3 = genericTree.find("Aplicações");

console.log("\nLivro Azul:");
if (pos1) {
    console.log("Encontrado");
    console.log("isExternal: " + genericTree.isExternal(pos1));
    console.log("isRoot: " + genericTree.isRoot(pos1));
    const parent = genericTree.parent(pos1);
    if (parent != null) {
        console.log("parent: " + parent.element());
    }
}
else {
    console.log("NÃO encontrado");
}

console.log("\nCapítulo 1:");
if (pos2) {
    console.log("Encontrado");
    console.log("isExternal: " + genericTree.isExternal(pos2));
    console.log("isRoot: " + genericTree.isRoot(pos2));
    const parent = genericTree.parent(pos2);
    if (parent != null) {
        console.log("parent: " + parent.element());
    }
}
else {
    console.log("NÃO encontrado");
}

console.log("\nAplicações:");
if (pos3) {
    console.log("Encontrado");
    console.log("isExternal: " + genericTree.isExternal(pos3));
    console.log("isRoot: " + genericTree.isRoot(pos3));
    const parent = genericTree.parent(pos3);
    if (parent != null) {
        console.log("parent: " + parent.element());
    }
}
else {
    console.log("NÃO encontrado");
}

const pos4 = genericTree.find("Conceitos");
genericTree.replace(pos4, "Conceitos básicos");

console.log("\nPRINT DFS PRE ORDER:");
print(genericTree);

console.log("\nPRINT elements():");
for (const elem of genericTree.elements()) {
    console.log(elem);
}

console.log("\nPRINT positions():");
for (const pos of genericTree.positions()) {
    console.log(pos.elements());
}

console.log("\nPRINT BFS:");
genericTree.printBfs(genericTree);

const pos5 = genericTree.find("Métodos");
if (pos5) {
    genericTree.remove(pos5);
    console.log("\nPRINT remove:");
    console.log("SIZE = " + genericTree.size());
    genericTree.printTree(genericTree);
}
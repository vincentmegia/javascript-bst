import Node from './node.js'
import InorderProcessor from './inorder-processor.js'
import PreorderProcessor from './preorder-processor.js'
import PostorderProcessor from './postorder-processor.js'

const numbers = [10, 7, 11, 6, 8, 1, 9, 20, 14, 22];

const tree = new Node()
numbers.forEach(number => {
    tree.insert(number)
})

debugger;

console.log('PREORDER TRAVERSAL: ')
const preorderProcessor = new PreorderProcessor()
preorderProcessor.process(tree)

console.log('INORDER TRAVERSAL: ')
const inorderProcessor = new InorderProcessor()
inorderProcessor.process(tree)

console.log('POSTORDER TRAVERSAL: ')
const postOrderProcessor = new PostorderProcessor()
postOrderProcessor.process(tree)
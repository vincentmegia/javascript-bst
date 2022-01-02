"use strict"

class Node {
    constructor(value) {
        this.value = value
        this.left = undefined
        this.right = undefined
    }

    /**
     * populates the nodes
     * @param {*} value 
     */
    insert(value) {
        // handle first value to be assigned to root
        if (!this.value) {
            this.value = value
            return
        }

        // handle subsequent population logic
        if (value < this.value) {
            if (!this.left) {
                this.left = new Node(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if (!this.right) {
                if (!this.right) {
                    this.right = new Node(value)
                } else {
                    this.right.insert(value)
                }
            }
        }
    }

    /**
     * How to remove a node efficiently
     * @param {*} value 
     */
    remove(value) {

    }
}

export default Node
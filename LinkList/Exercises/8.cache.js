
class Nodo {
    constructor(key, value) {
        this.key = key;
        this.value = value
        this.tail = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.saveNodes = new Map()
        this.head = null
        this.lastNode = null
    }

    moveToEnd(node) {
        if (node === this.lastNode) return

        if (node === this.head) {
            this.head = this.head.next
            if (this.head) this.head.tail = null
            if (!this.head) this.head = node
        } else {
            node.tail.next = node.next
            if (node.next) node.next.tail = node.tail
        }

        //  Move to end
        node.tail = this.lastNode
        node.next = null
        if (this.lastNode) this.lastNode.next = node
        this.lastNode = node

    }

    get(key) {
        const viewNode = this.saveNodes.get(key)
        if (!viewNode) {
            return -1
        }
        this.moveToEnd(viewNode)
        return viewNode.value
    }

    put(key, value) {
        // Actualizar Valor
        const viewNode = this.saveNodes.get(key)
        if (viewNode) {
            viewNode.value = value
            this.moveToEnd(viewNode)
            return
        }

        // Crear nuevo valor

        const newNode = new Nodo(key, value)

        // Esta lleno el SET
        if (this.saveNodes.size >= this.capacity) {
            this.saveNodes.delete(this.head.key)
            this.head = this.head.next
            if (this.head) this.head.tail = null
        }


        // Ahora Mover al final
        this.saveNodes.set(key, newNode)

        if (!this.head) {
            this.head = this.lastNode = newNode
        } else {
            this.lastNode.next = newNode
            newNode.tail = this.lastNode
            this.lastNode = newNode
        }
        return newNode.value

    }

}
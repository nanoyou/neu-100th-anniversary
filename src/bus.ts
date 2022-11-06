type Key = string | number | symbol
class Bus {
    list: Map<Key, Set<Function>>
    constructor() {
        this.list = new Map()
    }
    emit(name: Key, ...args: any) {
        this.list.get(name)?.forEach(func => func(...args))
    }
    on(name: Key, callback: Function) {
        if (!this.list.has(name)) this.list.set(name, new Set())
        this.list.get(name)!.add(callback)
    }
    off(name: Key, callback: Function) {
        this.list.get(name)?.delete(callback)
    }
    once(name: Key, callback: Function) {
        this.list.set(name, new Set([callback]))
    }
}
const bus = new Bus()
export { bus }
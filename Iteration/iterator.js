const iterator = (max) => ({
    count: 0,
    next() {
        if (this.count < max) {
            this.count++;
            return { value: this.count, done: false };
        }
        return { value: undefined, done: true };
    }
});

let it = iterator(3);
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }
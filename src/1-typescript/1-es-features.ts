// destructuring
{
    const [a, b] = ['a', 1]

    const { c, d } = { c: 'c', d: 2 }
}

// async/await
{
    const func1 = (arg: string) => Promise.resolve(arg)

    const func2 = async () => {
        const resolved = await func1('test')

        return resolved
    }
}

// decorators
{
    const lazyClassDecorator = (Target: { new(): any }) => Target
    const lazyMethodDecorator = (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => descriptor

    @lazyClassDecorator
    class TestClass {
        @lazyMethodDecorator
        method() { }
    }
}

// generators/iterators
{
    for (const value of [1,2,3]) {
        console.log(`${value}!`)
    }

    for (const [value, key] of Object.entries({ a: 'a', b: 'b' })) {
        console.log(`${key} is ${value}!`)
    }

    const countdown = function * (from: number) {
        do { yield `${from}!` } while (from--)
    }

    // Only availably when targeting ES6 or later
    for (const value of countdown(5)) {
        console.log(value)
    }
}

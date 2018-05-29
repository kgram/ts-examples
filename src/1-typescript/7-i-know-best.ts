// Any type (complete type-check opt-out)
{
    const a: any = 'value'
    a.toFixed()            // Will obviously fail, no error
}

// Non-null assertion
{
    const func1 = (x: string?) => {
        x.substring(2)      // May be null

        x!.substring(2)     // I KNOW x won't be null
    }
}

// Definite assignments
{
    let a: number
    const assignA = () => { a = 1 }
    assignA()
    a.toFixed()     // Error, since assignment is indirect

    // I KNOW b is assigned before usage
    let b!: number
    const assignB = () => { b = 1 }
    b.toFixed()     // Runtime error
    assignB()
    b.toFixed()     // Fine, now it's assigned
}

// Overriding method signatures
{
    function func(string: string, length: number): string
    function func(number: number, suffix: string): string
    function func(arg1: string | number, arg2: string | number) {
        if (typeof arg1 === 'string' && typeof arg2 === 'number') {
            return arg1.substring(arg2)
        } else if (typeof arg1 === 'number' && typeof arg2 === 'string') {
            return arg1.toString() + arg2
        } else {
            throw new Error('You\'re using my function all wrong!')
        }
    }

    func('abcdef', 3)   // => 'abc'
    func(5, '!')        // => '5!'
    func(5, 3)          // => error
    func('a', 'b')      // => error
}

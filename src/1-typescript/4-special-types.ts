// Existance checks
{
    // Enable 'strictNullChecks' in compiler
    // Must have value
    let a: string
    console.log(a)      // error, access before assignment
    a = undefined       // error, can't be undefined
    a = null            // error, can't be null

    // Can be undefined
    let b: string | undefined
    console.log(b)      // fine
    b = undefined       // fine
    b = null            // error, can't be null

    // Can be null
    let c: string | null
    console.log(c)      // error, access before assignment
    c = undefined       // error, can't be undefined
    c = null            // fine
}

// Optional props/params & nullable types
{
    // Optional '?'-postfix on name (prop or param) = T | undefined
    const a: { val?: string } = {}
    a.val = undefined     // fine
    a.val = null          // error, can't be null

    // Nullable '?'-postfix on type = T | null
    const b: { val: string? } = { val: null }
    b.val = undefined     // fine
    b.val = null          // error, can't be null
}

// Impossible cases (never-type)
{
    const a = 'value'
    switch(a) {
        case 'value':
            console.log('value is value!')
            break
        default:
            console.log(`This NEVER happens, a is ${a}`)
    }

    // Return type is never
    const func = () => {
        throw new Error('Function will never return')
    }

    type T1 = { val1: string } & { val1: number }
}

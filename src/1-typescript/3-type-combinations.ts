// Type "variables"
{
    type T1 = string
    type T2 = number
    type T3 = {
        a: T1,
        b: T2,
    }
    // Explicit interface
    interface T4 {
        a: T1,
        b: T2,
    }
}

// Combining types - intersections
{
    type T1 = { val1: string, val2: string } & { val2: string, val3: string }

    const a: T1 = { val1: 'value', val2: 'value' }                  // Error, missing val3
    const b: T1 = { val1: 'value', val2: 'value', val3: 'value' }   // Fine

    const c: string & number = 'test'  // Nonsense, nothing can be a string AND a number
}

// Combining types - unions
{
    // Primitive types
    type T1 = string | number

    const a: T1 = 'value'
    const b: T1 = 1

    // Objects
    type T2 = { val1: string, val2: string } | { val3: string, val4: string }

    const c: T2 = { val1: 'value', val2: 'value' }  // Fine
    const d: T2 = { val3: 'value', val4: 'value' }  // Fine
    const e: T2 = { val1: 'value', val3: 'value' }  // Error, doesn't match either
}

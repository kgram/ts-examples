// Explicit types
{
    const anyString: string = 'value'
    const specificString: 'value' = 'value'
    const anyNumber: number = 1
    const specificNumber: 1 = 1
    const anyBool: boolean = true
    const specificBool: true = true

    const object: { a: string } = { a: 'value' }
    const arrayShorthand: string[] = ['value 1', 'value 2']
    const arrayType: Array<string> = ['value 1', 'value 2']
    const tuple: [string, number] = ['value', 1]
    const tupleExplicit: { '0': string, '1': number, length: 2 } = ['value', 1]

    const func: (a: number) => string = (a) => a.toString()
    func(1)
    func(1, 'value')
    const funcCast: (a: number, b: string) => string = (a) => a.toString()
    funcCast(1)
    funcCast(1, 'value')
    const funcOptionalParam: (a: number, b?: string) => string = (a, b) => b || a.toString()
    funcOptionalParam(1)
    funcOptionalParam(1, 'value')
}

// Implicit types
{
    const specificString = 'value'
    const specificNumber = 1
    const specificBool = true
    const object = { a: 'value' }
    const array = ['value 1', 'value 2']
    const func = (a: number) => a.toString()
    func(1)
    const funcOptionalParam = (a: number, b?: string) => b || a.toString()
    funcOptionalParam(1)
    funcOptionalParam(1, 'value')
}

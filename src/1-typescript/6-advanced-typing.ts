// generics
{
    const chunk = <T extends { length: number, slice(begin: number, end: number): T }>(entity: T, size: number) => {
        const result = []

        for (let i = 0; i < entity.length; i += size) {
            result.push(entity.slice(i, i + size))
        }

        return result
    }

    chunk(['a', 'b', 'c', 'd', 'e'], 2) // => [['a', 'b'], ['c', 'd'], ['e']]
    chunk('abcde', 3) // => ['abc', 'de']
    chunk({ val1: 'value' }, 3)
}

// tagged unions
{
    type T = { type: 'type1', value1: number } | { type: 'type2', value1: string } | { type: 'type3' }

    const func = (obj: T) => {
        obj.value1 = 5

        switch (obj.type) {
            case 'type1':
                obj.value1 = 5
                break
            case 'type2':
                obj.value1 = 'value'
                break
            case 'type3':
                break
            default:
                throw new Error(`This will never happen, obj is ${obj}`)
        }
    }
}

// dynamic keys
{
    const lookup: { [key: string]: number } = {}
    lookup['key1'] = 5
    lookup['key2'] = 'value'

    const get = <T>(obj: T, key: keyof T): T[keyof T] => obj[key]

    const val1 = get({ val1: 'value', val2: 'value' }, 'val1')
    const val3 = get({ val1: 'value', val2: 'value'  }, 'val3')
}

// modifing a type
{
    type SimpleType = { val1: string, val2: string }

    const a: SimpleType = { val1: 'value' }
    const b: SimpleType = { val2: 'value' }
    const c: SimpleType = { val3: 'value' }

    type Partial<T> = {
        [Key in keyof T]?: T[Key]
    }

    const d: Partial<SimpleType> = { val1: 'value' }
    const e: Partial<SimpleType> = { val2: 'value' }
    const f: Partial<SimpleType> = { val3: 'value' }

    type Pick<T, K extends keyof T> = {
        [Key in K]: T[Key]
    }

    const g: Pick<SimpleType, 'val1'> = { val1: 'value' }
    const h: Pick<SimpleType, 'val1'> = { val2: 'value' }
    const i: Pick<SimpleType, 'val1'> = { val3: 'value' }
    const j: Pick<SimpleType, 'val3'> = { val3: 'value' }

    type Deferred<T> = {
        [Key in keyof T]: Promise<T[Key]>
    }

    const k: Deferred<SimpleType> = { val1: 'value', val2: 'value' }
    const l: Deferred<SimpleType> = { val1: Promise.resolve('value'), val2: Promise.resolve('value') }
}

// type-guards on if
{
    const func = (arg: string | number) => {
        arg.toString()
        arg.substring(2)
        arg.toFixed()

        if (typeof arg === 'string') {
            return arg.substring(2)
        } else {
            return arg.toFixed()
        }
    }
}

// type-guards on return
{
    const func = (arg?: number) => {
        arg.toFixed()

        if (!arg) {
            return
        }

        arg.toFixed()
    }
}

// type-guards from custom functions
{
    function canDoStuff(value: any): value is { doStuff(): void } {
        return !!value && typeof value.doStuff === 'function'
    }

    const func = (mayDoStuff?: object?) => {
        mayDoStuff.doStuff()

        if (canDoStuff(mayDoStuff)) {
            mayDoStuff.doStuff()
        }
    }
}

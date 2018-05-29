import * as React from 'react'

{
    const hoc = <Key extends string, Value extends any>(key: Key, value: Value) =>
        <Props extends { [K in Key]: Value }>(Component: React.ComponentType<Props>): React.ComponentType<Pick<Props, Exclude<keyof Props, Key>>> =>
            (props: Pick<Props, Exclude<keyof Props, Key>>) =>
                <Component {...props} {...{ [key]: value }} />

    class Component extends React.PureComponent<{ val1: number, val2: string }> {
        render() {
            const { val1, val2 } = this.props

            return <div>{val1} {val2}</div>
        }
    }

    @hoc('val1', 10)
    class DecoratedComponent extends React.PureComponent<{ val1: number, val2: string }> {
        render() {
            const { val1, val2 } = this.props

            return <div>{val1} {val2}</div>
        }
    }

    const ComponentWithVal1 = hoc('val1', 10)(Component)
    const ComponentWithVal2 = hoc('val2', 'value')(Component)
    const ComponentWithAll = hoc('val1', 10)(hoc('val2', 'value')(Component))

    const InvalidComponent = hoc('val1', 'value')(Component)

    const content = (
        <div>
            <Component />
            <Component val1={5} />
            <Component val2='value' />
            <Component val1={5} val2='value' />

            <ComponentWithVal1 />
            <ComponentWithVal1 val1={5} />
            <ComponentWithVal1 val2='value' />
            <ComponentWithVal1 val1={5} val2='value' />

            <ComponentWithVal2 />
            <ComponentWithVal2 val1={5} />
            <ComponentWithVal2 val2='value' />
            <ComponentWithVal2 val1={5} val2='value' />

            <ComponentWithAll />
            <ComponentWithAll val1={5} />
            <ComponentWithAll val2='value' />
            <ComponentWithAll val1={5} val2='value' />
        </div>
    )
}

import * as React from 'react'

// Common props
{
    class Component extends React.PureComponent {
        render() {
            return <div>Content!</div>
        }
    }

    const content = (
        <React.Fragment>
            <Component />
            <Component extraProp='value' />
            <Component key='value' />
            <Component ref={(el) => {}} />
            <Component>child</Component>
        </React.Fragment>
    )
}

// Props
{
    class Component extends React.PureComponent<{ val1: string, val2?: string }> {
        render() {
            const { val1 } = this.props
            return <div>Content with props: {val1}</div>
        }
    }

    const content = (
        <React.Fragment>
            <Component />
            <Component val1='value' />
            <Component val1='value' val2='value' />
        </React.Fragment>
    )
}

// State
{
    class Component extends React.PureComponent<{}, { val1: string, val2: number }> {
        func1() {
            this.setState({ val1: 'value' })
        }

        func2() {
            this.setState(({ val2 }) => ({ val2: val2 + 1}))
        }

        render() {
            const { val1, val2 } = this.state
            return <div>Content with state: {val1} {val2}</div>
        }
    }

    const content = (
        <React.Fragment>
            <Component />
        </React.Fragment>
    )
}

// Pure functional components
{
    const Component = ({ val1, val2 }: { val1: string, val2?: string }) => (
        <div>Pure function with props: {val1}</div>
    )

    const content = (
        <React.Fragment>
            <Component />
            <Component val1='value' />
            <Component val1='value' val2='value' />
        </React.Fragment>
    )
}

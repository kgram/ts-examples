import * as React from 'react'

{
    class Component extends React.PureComponent<{ dynamicBool: boolean }> {
        render() {
            const { dynamicBool } = this.props

            return <div>Value is: {dynamicBool}</div>
        }
    }

    const content = (
        <div>
            <Component />
            <Component dynamicBool={true} />
            <Component dynamicBool={false} />
        </div>
    )
}

{
    class Component extends React.PureComponent<{ staticBool?: true }> {
        static defaultProps = {
            staticBool: false
        }

        render() {
            const { staticBool } = this.props
            if (staticBool) {
                return <div>First kind</div>
            } else {
                return <div>Second kind</div>
            }
        }
    }

    const content = (
        <div>
            <Component />
            <Component staticBool />
            <Component staticBool={false} />
        </div>
    )
}

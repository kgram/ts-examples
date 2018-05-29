import * as React from 'react'

// Type-checked HTML-props
{
    const content = (
        <div>
            <div name='value' className='value' />
            <input name='value' className='value' />
        </div>
    )
}

// Event handlers
{
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(`x: ${event.clientX}, y: ${event.clientY}`)
    }
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }
    const content = (
        <div>
            <div onClick={onClick} />
            <input onChange={onChange} />
            <div onClick={(event) => {
                console.log(`x: ${event.clientX}, y: ${event.clientY}`)
            }} />
        </div>
    )
}

// Refs
{
    const refInput = (element: HTMLInputElement | null) => {
        element && element.focus()
    }
    const content = (
        <div>
            <input ref={refInput} />
            <input ref={(el) => el && el.focus()} />
        </div>
    )
}

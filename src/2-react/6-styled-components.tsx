import * as React from 'react'
import styled from 'styled-components'

{
    type Props = {
        width: number,
        light?: true,
    }
    const StyledDiv = styled.div`
        color: ${({ light }: Props) => light ? '#000' : '#FFF'};
        background-color: ${({ light }: Props) => light ? '#FFF' : '#000'};

        width: ${({ width }: Props) => width}px;
    `

    const content = (
        <div>
            <StyledDiv />
            <StyledDiv width={25} />
            <StyledDiv width={25} light />
        </div>
    )
}

import React from 'react'

import { Container, HashtagIcon, Title, Separator, Description } from './styles'
// import { Separator } from '../ServerList/styles'
// import { Description } from 'styled-icons/material'

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon/>

            <Title> chat-livre </Title>

            <Separator/>

            <Description>Canal aberto para conversas</Description>
            
        </Container>
    )
}

export default ChannelInfo
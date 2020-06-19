import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ServerName: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messageRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messageRef])

    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Brancol"
                    date="14/03/2020"
                    content="Morri de novo no wow"
                />
                <ChannelMessage
                    author="Cavalinho"
                    date="14/03/2020"
                    content={
                        <>
                            <Mention>@Brancol</Mention>, branquito do branquito
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre " />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ServerName
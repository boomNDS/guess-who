import React from 'react'
import { Container, } from 'react-bootstrap'
import styled from 'styled-components' //

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  position: relative;
  top: 50%;
  left: 50%;
`


function Dashboard(props) {
    return <Container>
        <Wrapper>
            <Title>
                Hello World!
            </Title>
        </Wrapper>
    </Container>
}

export default Dashboard
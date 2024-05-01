import styled from 'styled-Components'

export const Section = styled.section`
    margin-top: 2rem;
    margin-bottom: 2.5rem;
`

export const Container = styled.div`
    width: 90%;
    max-width: 1400px;
    margin:0 auto;
`

export const Heading = styled.h2`
    display: flex;
    justify-content: center;
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
        flex: 1
    }
`

export const Fig = styled.figure`
    @media screen and (max-width:820px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 350px;
    object-fit: cover;
`

export const Desc = styled.article`

    & > * {
        margin-bottom: 1rem;
        text-align: end;
    }
`

export const Content = styled.p``

export const Details = styled.article`
    text-align: end;
    margin-top: 2rem;

    & .title {
        text-transform: capitalize;
        margin: 0;
    }
`

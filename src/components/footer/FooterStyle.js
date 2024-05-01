import styled from 'styled-Components'

export const CustomFooter = styled.footer`
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    text-align: end;
    background: #CC9C51;
    margin-bottom: 0;
    padding: 1.5rem 2rem 3rem 2rem;
`

export const Container = styled.div`
    width: 90%;
    max-width: 1400px;
    margin:0 auto;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    flex: 1;
    align-items: end;

    @media screen and (max-width:820px) {
        flex-basis: 45%;
    }

    @media screen and (max-width:480px) {
        flex-basis: 100%;
    }

    &.about {
        flex: 2;

        @media screen and (max-width:820px) {
        flex-basis: 100%;
    }
    }

    & .brief {
        width: 70%;

        @media screen and (max-width:820px) {
        width: 100%;
        }
    }
`

export const Logo = styled.img`
    width: 8rem;
    object-fit: cover;
`

export const Title = styled.h3``

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & .desc {
        margin: 0;
    }
`

export const BoxIcon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ContactBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.5rem;

    & .desc {
        margin: 0;
    }
`

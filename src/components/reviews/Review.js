import styled from 'styled-Components'

export const Section = styled.section`
    margin-top: 2rem;
    margin-bottom: 2.5rem;
`

export const Container = styled.div`
    width: 50%;
    max-width: 1400px;
    margin:0 auto;

    @media screen and (max-width: 820px) {
        width: 70%;
    }

    @media screen and (max-width: 480px) {
        width: 85%;
    }

    .slick-arrow.slick-next,
    .slick-arrow.slick-prev{
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        opacity: 0.8;
        height:30px;
        width:30px;
        background: transparent;
        color: #333;
        z-index: 2;
    }

    .slick-arrow.slick-next{
        right: -10%;
    }
    .slick-arrow.slick-prev{
        left: -10%;
    }

    .slick-arrow.slick-next:hover,
    .slick-arrow.slick-prev:hover
    {
        opacity:1;
        color: #444;
    }


    .slick-prev::before,.slick-next::before{
        display:none;
    }

    .arrows{
        height:30px;
        width:30px;
        margin: 1px;
    }
`

export const Heading = styled.h2`
    display: flex;
    justify-content: center;
`

export const Content = styled.article`
    border-radius: 20px;
    background-color: #CC9C51;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    text-align: end;

    @media screen and (max-width: 480px) {
        text-align: center;
    }

    & > * {
    padding: 0 2rem;
    }
`

export const Desc = styled.p`
    margin-top: 2.5rem;
`

export const Name = styled.h4`
    align-self: flex-start;
    margin-top: 0;

    @media screen and (max-width: 480px) {
        align-self: center;
    }
`
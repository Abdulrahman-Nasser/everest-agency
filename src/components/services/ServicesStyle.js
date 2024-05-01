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

export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    justify-content: center;
`

export const Service = styled.div`
    background-image: linear-gradient(to bottom, rgba(248, 247, 216, 0.4), rgba(248, 247, 216, 0.4)), url(${props => props.imgUrl});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 300px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: end;
`

export const Fig = styled.figure`
    background-color: #fff;
    color: #000;
    flex: 1;
    max-width: 90%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1rem 0;

    & > * {
        padding: .7rem;
    }
`

export const Title = styled.h3`
    text-align: end;
    font-size: 1rem;
    margin: 0;
    flex: 6;
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CC9C51;
    height: 35px;
    flex: 1;
`

export const FigIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
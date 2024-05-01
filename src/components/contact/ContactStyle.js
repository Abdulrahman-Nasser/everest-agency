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
    justify-content: end;
    color: #CC9C51;

    @media screen and (max-width:820px) {
        justify-content: center;
    }
`

export const Flex = styled.section`
    display: flex;
    gap: 1rem;
`

export const Form = styled.form`
    flex:2;
    background: #CC9C51;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 3rem;
    gap: 1rem;
    border-radius: 5px;

    @media screen and (max-width:480px) {
        padding: 2rem 1.5rem;
    }
`

export const BoxNames = styled.div`
    display: flex;
    gap: 1rem;

    & > * {
        flex: 1;
    }

    @media screen and (max-width:480px) {
        flex-direction: column;
    }
`

export const Input = styled.input`
    border-radius: 5px;
    border: 0;
    padding: .5rem 1rem;
    text-align: end;
    font-family: 'Cairo';
    outline: none;
`

export const TextArea = styled.textarea`
    border-radius: 5px;
    border: 0;
    padding: .5rem 1rem;
    text-align: end;
    font-family: 'Cairo';
    resize: none;
    outline: none;

    @media screen and (max-width:480px) {
        width: 90%
    }
`

export const SubmitBtn = styled.button`
    align-self: center;
    padding: .3rem 2.5rem;
    font-family: 'Cairo';
    border-radius: 5px;
    border: 0;
    font-weight: bold;
    background-color: #E3D9C6;
    outline: none;
    cursor: pointer;

    @media screen and (max-width:480px) {
        align-self: stretch;
    }
`

export const ContactIcons = styled.section`
    flex: 1;
    border-radius: 5px;
    padding: 2rem 1.5rem;
    text-align: end;
    background-color: #E3D9C6;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:820px) {
        display: none;
    }
`

export const Title = styled.h3`
    color: #CC9C51;
`

export const BoxIcon = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.5rem;
`
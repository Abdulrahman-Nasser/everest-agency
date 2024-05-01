import { BoxIcon, BoxNames, ContactBox, ContactIcons, Container, Flex, Form, Heading, Input, Section, SubmitBtn, TextArea, Title } from "./ContactStyle"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import GmailLogo from '../../assets/images/gmail-icon-logo.svg'

const Contact = () => {
    return (
        <Section>
            <Container>
                <Heading>تواصل معنا</Heading>
                <Flex>
                    <Form>
                        <BoxNames>
                            <Input type='text' placeholder='الاسم الاول' />
                            <Input type='text' placeholder='الاسم الاخير' />
                        </BoxNames>
                        <Input type='email' placeholder='البريد الالكتروني' />
                        <Input type='text' placeholder='الموضوع' />
                        <TextArea rows='5' cols='50' placeholder='الرسالة'></TextArea>
                        <SubmitBtn type='submit'>ارسال</SubmitBtn>
                    </Form>
                    <ContactIcons>
                        <Title>لاتتردد, تواصل معنا الان</Title>
                        <BoxIcon>
                          
                            <ContactBox>
                                <FaPhoneAlt color="#175eea" size={24} />
                                <p>+20 120 1345 760</p>
                            </ContactBox>
                            <ContactBox>
                                <FaWhatsapp color="#38ae41" size={24} />
                                <p>+20 120 1345 760</p>
                            </ContactBox>
                            <ContactBox>
                                <img src={GmailLogo} alt='Everst email' width={24} height={24} />
                                <p>everst@gmail.com</p>
                            </ContactBox>
                        </BoxIcon>
                    </ContactIcons>
                </Flex>
            </Container>
        </Section>
    )
}

export default Contact
import { Box, Container, CustomFooter, Flex, Info, Logo, Title, BoxIcon, ContactBox } from "./FooterStyle"
import LogoImg from '../../assets/images/mini-logo.svg'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import GmailLogo from '../../assets/images/gmail-icon-logo.svg'
import MapIcon from '../../assets/images/map.svg'

const Footer = () => {
    return (
        <CustomFooter>
            <Container>
                <Flex>
                    <Box className="about">
                        <Logo src={LogoImg} alt='everst logo' />
                        <p className='brief'>باختصار، إذا كنت تبحث عن شريك موثوق وفعال لتعزيز استراتيجيات التسويق الرقمي لعملك، فإن شركة إيفرست للتسويق هي الخيار الأمثل.</p>
                    </Box>
                    <Box>
                        <Title>خريطة الموقع</Title>
                        <Info>
                            <p className="desc">من نحن</p>
                            <p className="desc">خدماتنا</p>
                            <p className="desc">تواصل معنا</p>
                        </Info>
                    </Box>
                    <Box>
                        <Title>معلومات الاتصال</Title>
                        <BoxIcon>
                            <ContactBox>
                                <img src={MapIcon} alt='location' width={24} height={24} />
                                <p className='desc'>سوهاج</p>
                            </ContactBox>
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
                                <p className='desc'>everst@gmail.com</p>
                            </ContactBox>
                        </BoxIcon>
                    </Box>


                </Flex>
            </Container>
        </CustomFooter>
    )
}

export default Footer
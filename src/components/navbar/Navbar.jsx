import { Link as ScrollLink } from "react-scroll";
import { Fig, Link, LinkBtn, Logo, Nav, NavLinks, SearchBar, SearchIcon, SearchInput, WrapperLinks, MobileBox, MobileLinks, MobileIcon } from "./NavbarStyle"
import logo from "../../assets/images/logo.svg"
import { IoIosSearch, IoIosMenu } from 'react-icons/io'
import { useState } from "react"


const Navbar = () => {

    const [toggleMobile, setToggleMobile] = useState(false)

    return (
        <>
            <Nav>
                <NavLinks>
                    <Fig>
                        <Logo src={logo} alt='logo' />
                    </Fig>
                    <WrapperLinks>
                        <ScrollLink to="header" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">الصفحة الرئيسية</LinkBtn>
                        </ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">الخدمات</LinkBtn>
                        </ScrollLink>
                        <ScrollLink to="portfolio" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">سابقة الأعمال</LinkBtn>
                        </ScrollLink>

                        <ScrollLink to="reviews" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">شركاء النجاح</LinkBtn>
                        </ScrollLink>
                        <Link href="">
                            <LinkBtn className="linkBtn">المدونات والمقالات</LinkBtn>
                        </Link>
                       
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">تواصل معانا</LinkBtn>
                        </ScrollLink>
                        <ScrollLink to="portfolio" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">عنا</LinkBtn>
                        </ScrollLink>
                    </WrapperLinks>
                </NavLinks>
                <SearchBar>
                    <SearchIcon>
                        <IoIosSearch />
                    </SearchIcon>
                    <SearchInput type='text' placeholder='ابحث هنا' />
                </SearchBar>
                <MobileIcon onClick={() => setToggleMobile(prev => !prev)}>
                    <IoIosMenu size={30} />
                </MobileIcon>
            </Nav>
            <MobileBox isToggle={toggleMobile}>
                <MobileLinks isToggle={toggleMobile}>
                <ScrollLink to="header" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">الصفحة الرئيسية</LinkBtn>
                        </ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">الخدمات</LinkBtn>
                        </ScrollLink>
                        <ScrollLink to="portfolio" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">سابقة الأعمال</LinkBtn>
                        </ScrollLink>

                        <ScrollLink to="reviews" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">شركاء النجاح</LinkBtn>
                        </ScrollLink>
                        <Link href="">
                            <LinkBtn className="linkBtn">المدونات والمقالات</LinkBtn>
                        </Link>
                       
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">تواصل معانا</LinkBtn>
                        </ScrollLink>
                        <ScrollLink to="portfolio" smooth={true} duration={500}>
                            <LinkBtn className="linkBtn">عنا</LinkBtn>
                        </ScrollLink>
                </MobileLinks>
                {toggleMobile && <SearchBar className='search-mobile'>
                    <SearchIcon>
                        <IoIosSearch />
                    </SearchIcon>
                    <SearchInput type='text' placeholder='ابحث هنا' />
                </SearchBar>}
            </MobileBox>
        </>
    )
}


export default Navbar
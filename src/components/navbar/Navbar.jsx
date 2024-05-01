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
                        <Link href="">
                            <LinkBtn className="linkBtn">الصفحة الرئيسية</LinkBtn>
                        </Link>
                        <Link href="">
                            <LinkBtn className="linkBtn">الخدمات</LinkBtn>
                        </Link>
                        <Link href="Portfolio">
                            <LinkBtn className="linkBtn">سابقة الأعمال</LinkBtn>
                        </Link>
                        <Link >
                            <LinkBtn className="linkBtn">شركاء النجاح</LinkBtn>
                        </Link>
                        <Link href="">
                            <LinkBtn className="linkBtn">المدونات والمقالات</LinkBtn>
                        </Link>
                       
                        <Link href="">
                            <LinkBtn className="linkBtn">تواصل معانا</LinkBtn>
                        </Link>
                        <Link href="">
                            <LinkBtn className="linkBtn">عنا</LinkBtn>
                        </Link>
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
                    <Link href="">
                        <LinkBtn className="linkBtn">الصفحة الرئيسية</LinkBtn>
                    </Link>
                    <Link href="">
                        <LinkBtn className="linkBtn">الخدمات</LinkBtn>
                    </Link>
                    <Link href="">
                        <LinkBtn className="linkBtn">سابقة الأعمال</LinkBtn>
                    </Link>
                    <Link href="">
                        <LinkBtn className="linkBtn">شركاء النجاح</LinkBtn>
                    </Link>
                    <Link href="">
                        <LinkBtn className="linkBtn">المدونات والمقالات</LinkBtn>
                    </Link>
                    <Link href="">
                        <LinkBtn className="linkBtn">تواصل معانا</LinkBtn>
                    </Link>
                    <Link href="">
                        <LinkBtn className="linkBtn">عنا</LinkBtn>
                    </Link>
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
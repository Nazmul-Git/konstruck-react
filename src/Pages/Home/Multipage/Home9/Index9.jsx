import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-tan.png";
import headerLogoSticky from "../../../../assets/images/logo-tan.png";
import Header from '../../../../Layout/Header/Header';
import Index9Main from './Index9Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/tan-white.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index9 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoSticky}
                middleHeader={true}
                headerStyle='header-style1'
                otherClass='header-tan-modify4'
                logoMidl={headerLogoNormal}
                modifyClassMidl={'middle-modify3'}
                socialIcon={true}
                searchIcon={true}
                btnQuite1={true}
                btnQuite1Icon={true}
            />
            <ScrollToTop
                bgColor={'#ba9071'}
                hoverColor={'#010d14'}
            />
            <Index9Main />
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style6'}
            />
        </>
    );
};

export default Index9;
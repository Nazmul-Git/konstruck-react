import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-orange.png";
import headerLogoSticky from "../../../../assets/images/logo-orange.png";
import Header from '../../../../Layout/Header/Header';
import Index8Main from './Index8Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/orange-white.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index8 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoSticky}
                middleHeader={true}
                headerStyle='header-style1 header-blue-modify2'
                otherClass='header-orange-modify3 header-transparent'
                logoMidl={headerLogoNormal}
                modifyClassMidl={'middle-modify2'}
                boxLayout={'box-layout'}
                searchIcon={true}
                btnQuite1={true}
                btnQuite1Icon={true}
            />
            <ScrollToTop
                bgColor={'#e88e2e'}
                hoverColor={'#010d14'}
            />
            <Index8Main/>
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style5'}
            />
        </>
    );
};

export default Index8;
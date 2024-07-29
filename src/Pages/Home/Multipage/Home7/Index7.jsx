import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-paste.png";
import headerLogoSticky from "../../../../assets/images/paste-light.png";
import Header from '../../../../Layout/Header/Header';
import Index7Main from './Index7Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/logo-paste.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index7 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoSticky}
                topBarVisible={true}
                headerStyle='header-style3'
                otherClass='header-transparent'
                topBarModifyClass='topber-modify2 paste-color-modify1'
                address={true}
                mail={true}
                isPhnNumber={true}
            />
            <ScrollToTop
                bgColor={'#21c0f5'}
                hoverColor={'#010d14'}
            />
            <Index7Main/>
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style4'}
            />
        </>
    );
};

export default Index7;
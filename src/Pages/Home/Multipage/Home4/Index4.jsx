import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-red.png";
import Header from '../../../../Layout/Header/Header';
import Index4Main from './Index4Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/red-white.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index4 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                mail={true}
                address={true}
                isPhnNumber={false}
                headerStyle='header-style2'
                topBarModifyClass='topber-modify1'
                callIcon={true}
            />
            <ScrollToTop
                bgColor={'#eb003d'}
                hoverColor={'#010d14'}
            />
            <Index4Main />
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style1'}
            />
        </>
    );
};

export default Index4;
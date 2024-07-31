import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-white2.png";
import Header from '../../../../Layout/Header/Header';
import Index11Main from './Index11Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/paste-light2.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index11 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                topBarModifyClass={'topber-modify5'}
                phnNumberFirst={true}
                mail={true}
                address={true}
                headerStyle='header-style2'
                otherClass='header-orange-modify1'
                containerFluid={'-fluid3'}
                callIcon={true}
            />
            <ScrollToTop
                bgColor={'#70bf4a'}
                hoverColor={'#010d14'}
            />
            <Index11Main />
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style7'}
            />
        </>
    );
};

export default Index11;
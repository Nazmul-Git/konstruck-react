import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-orange2.png";
import Header from '../../../../Layout/Header/Header';
import Index12Main from './Index12Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogoNormal from "../../../../assets/images/logo-white2.png";
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index12 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                topBarModifyClass={'topber-modify6'}
                mail={true}
                address={true}
                headerStyle='header-style2'
                otherClass='header-orange-modify2'
                callIcon={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#ff6314'}
                hoverColor={'#010d14'}
            />
            <Index12Main />
            <Footer
                logo={footerLogoNormal}
                footerStyle={'footer-style9'}
            />
        </>
    );
};

export default Index12;
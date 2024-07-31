import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-blue.png";
import Header from '../../../../Layout/Header/Header';
import Index6Main from './Index6Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/blue-white.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index6 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                headerStyle='header-style1'
                otherClass='header-blue-modify2'
                topBarModifyClass='topber-modify3'
                textOnly={true}
                middleHeader={true}
                boxLayout='box-layout'
                modifyClassMidl='middle-modify1'
                logoMidl={headerLogoNormal}
                searchIcon={true}
                btnQuite2={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#0052da'}
                hoverColor={'#010d14'}
            />
            <Index6Main />
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style3'}
            />
        </>
    );
};

export default Index6;
import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-red.png";
import Header from '../../../../Layout/Header/Header';
import Index13Main from './Index13Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import LogoRedWhite from '../../../../assets/images/red-white.png'
import footerlogo from '../../../../assets/images/logo-white2.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index13 = () => {
    return (
        <>
            <Header
                normalLogo={LogoRedWhite}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                isPhnNumber={true}
                mail={true}
                address={true}
                headerStyle='header-modify1'
                otherClass='header-roofing1 header-transparent'
                topBarModifyClass='topber-modify2 topbar-red1'
                searchIcon={true}
                btnQuite1={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#cb0000'}
                hoverColor={'#010d14'}
            />
            <Index13Main/>
            <Footer
                logo={footerlogo}
                footerStyle={'footer-style10'}
            />
        </>
    );
};

export default Index13;
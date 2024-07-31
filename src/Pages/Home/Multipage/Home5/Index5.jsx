import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-red.png";
import Header from '../../../../Layout/Header/Header';
import Index5Main from './Index5Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import LogoRedWhite from '../../../../assets/images/red-white.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index5 = () => {
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
                otherClass='header-transparent'
                topBarModifyClass='topber-modify2'
                searchIcon={true}
                btnQuite1={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#e8271e'}
                hoverColor={'#010d14'}
            />
            <Index5Main/>
            <Footer
                logo={LogoRedWhite}
                footerStyle={'footer-style2'}
            />
        </>
    );
};

export default Index5;
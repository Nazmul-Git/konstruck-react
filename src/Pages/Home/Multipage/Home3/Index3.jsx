import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-dark.png";
import Header from '../../../../Layout/Header/Header';
import Index3Main from './Index3Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import logo from '../../../../assets/images/logo-white.png';
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index3 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={false}
                searchIcon={true}
                btnQuite1={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#FFB703'}
                hoverColor={'#010d14'}
            />
            <Index3Main />
            <Footer
                logo={logo}
            />
        </>
    );
};

export default Index3;
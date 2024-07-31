import React from 'react';
import Header from '../../../../Layout/Header/Header';
import headerLogoNormal from '../../../../assets/images/logo-dark.png';
import Index2Main from './Index2Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import logo from '../../../../assets/images/logo-white.png';
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop'

const Index2 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                headerStyle={'header-style1'}
                searchIcon={true}
                socialIcon={true}
                middleHeader={true}
                logoMidl={headerLogoNormal}
                btnQuite2={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#FFB703'}
                hoverColor={'#010d14 '}
            />
            <Index2Main />
            <Footer
                logo={logo}
            />
        </>
    );
};

export default Index2;
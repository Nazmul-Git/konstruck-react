import React from 'react';
import Header from '../../../../Layout/Header/Header';
import headerLogoNormal from "../../../../assets/images/logo-dark.png";
import Index1Main from './Index1Main';
import logo from '../../../../assets/images/logo-white.png';
import FooterMain from '../../../../Layout/Footer/FooterMain';
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';


const Index1 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                mail={true}
                isPhnNumber={true}
                address={true}
                searchIcon={true}
                btnQuite1={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
                

            />
            <ScrollToTop
                bgColor={'#FFB703'}
                hoverColor={'#010d14 '}
            />
            <Index1Main />
            <FooterMain
                logo={logo}
            />
        </>
    );
};

export default Index1;
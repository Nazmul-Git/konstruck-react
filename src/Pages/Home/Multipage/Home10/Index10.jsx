import React from 'react';
import headerLogoNormal from "../../../../assets/images/logo-paste2.png";
import Header from '../../../../Layout/Header/Header';
import Index10Main from './Index10Main';
import Footer from '../../../../Layout/Footer/FooterMain';
import footerLogo from '../../../../assets/images/paste-light2.png'
import ScrollToTop from '../../../../Layout/ScrollToTop/ScrollToTop';

const Index10 = () => {
    return (
        <>
            <Header
                normalLogo={headerLogoNormal}
                darkLogo={headerLogoNormal}
                topBarVisible={true}
                topBarModifyClass={'topber-modify4'}
                mail={true}
                address={true}
                headerStyle='header-style2 '
                otherClass='header-paste-modify1'
                callIcon={true}
                firstLvlMenu="home"
                secondLvlMenu="multipages"
            />
            <ScrollToTop
                bgColor={'#70bf4a'}
                hoverColor={'#010d14'}
            />
            <Index10Main />
            <Footer
                logo={footerLogo}
                footerStyle={'footer-style7'}
            />
        </>
    );
};

export default Index10;
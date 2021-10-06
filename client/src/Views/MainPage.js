import React from 'react';
import Pricing from '../Components/CardPricing/Pricing';
import Header from '../Components/Header/Header';
import NavBar from '../Components/NavBar/NavBar';
import OurService from '../Components/OurService/OurService';
import Newsletter from '../Components/Newsletter/Newsletter';
import StepService from '../Components/OurService/StepService';

function MainPage() {
    return (
        <main>
            <NavBar/>
            <Header/>
            <OurService/>
            <StepService/>
            <Pricing/>
            <Newsletter/>
        </main>
    )
}

export default MainPage;
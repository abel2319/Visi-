import React from 'react';
import Pricing from '../Components/CardPricing/Pricing';
import Header from '../Components/Header/Header';
import NavBar from '../Components/NavBar/NavBar';
import OurService from '../Components/OurService/OurService';

function MainPage() {
    return (
        <main>
            <NavBar/>
            <Header/>
            <OurService/>
            <Pricing/>
        </main>
    )
}

export default MainPage;
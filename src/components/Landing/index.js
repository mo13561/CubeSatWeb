import React from 'react';
import {
    LandingBg,
    LandingContainer,
    LandingImg,
    LandingH1,
    LandingH3,
    LandingContent
} from './LandingElements';
//https://emerging-europe.com/wp-content/uploads/2020/09/bigstock-planet-earth-from-space-beaut-298703191.jpg
const Landing = () => {
    return (
        <LandingContainer id='home'>
            <LandingBg>
            <LandingImg src={'https://images2.alphacoders.com/933/933145.jpg'} alt="pic" />
            </LandingBg>
            <LandingContent>
                <LandingH1>POLARIS</LandingH1>
                <LandingH3>SUTTON GRAMMAR SCHOOL CUBE SATELLITE PROJECT</LandingH3>
            </LandingContent>
        </LandingContainer>
    )
}

export default Landing

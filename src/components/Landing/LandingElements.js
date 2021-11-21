import styled from 'styled-components';

export const LandingContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const LandingBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: solid;
`
export const LandingImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const LandingContent = styled.div`
    z-index: 3;
    max-width: 100px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: column;
    align-self: center;
`;

export const LandingH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: clamp(4.6875rem, -0.4261rem + 22.7273vw, 18.75rem);
    color: white;
    text-align: center;
    align-self: center;
    padding: 10;

    @media screen and (max-width: 360px) {
        font-size: 75px; 
    }
`;

export const LandingH3 = styled.text`
    color: white;
    font-size: 28px;
    position: absolute;
    width: auto;
    text-align: center;
    padding-top: 0px;
    white-space: wrap;
    font-family: 'Roboto Condensed', sans-serif;    
    @media screen and (max-width: 360px) {
        color: white;
        font-size: 28px;
        position: absolute;
        width: auto;
        text-align: center;
        padding-top: 150px;
        white-space: wrap;
        font-family: 'Roboto Condensed', sans-serif;
    }
    @media screen and (min-width: 768px) {
        color: white;
        font-size: 28px;
        position: absolute;
        width: auto;
        text-align: center;
        padding-top: 0px;
        white-space: nowrap;
        font-family: 'Roboto Condensed', sans-serif;
    }
    @media screen and (max-width: 767px) and (min-width: 360px) {
        color: white;
        font-size: 28px;
        width: auto;
        text-align: center;
        padding-top: 150px;
        white-space: wrap;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        font-family: 'Roboto Condensed', sans-serif;
    }
`;


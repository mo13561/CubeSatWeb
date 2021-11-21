import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: white;
    background: ${({lightBg}) => (lightBg ? 'white' : 'black')};
    height: 100vh;
    margin-top: 0px;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        align-items: center;
        margin: 0;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 24px;
    grid-area:  col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 -50px;
    grid-area:  col2;
    padding: -50%;
    margin-left: 50px;
    position: sticky;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: purple;
    font-size: 1.5rem;
    //line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 15%;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 5%;
    margin-top: 5%;
    font-size: 7rem;
    line-height: 1.1;
    margin-right: 20px;
    font-weight: 600;
    white-space: hidden;
    overflow: nowrap;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    font-size: clamp(3.75rem, 0.4071rem + 8vw, 7rem);
    /* @media screen and (max-width: 480px) {
        font-size: 3.75rem;
        //font-size: clamp(4.6875rem, -0.4261rem + 22.7273vw, 18.75rem);
    } */

`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    padding-right: 40%;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (!darkText ? '#010606' : '#fff')};
`;

export const Descriptor = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    max-height: 900px;
    padding: 0 0 0 22.5%;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (!darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
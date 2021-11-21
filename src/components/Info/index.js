import React from "react";
import {
  Column2,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TopLine,
  Column1,
  Heading,
  TextWrapper,
  Subtitle,
  Descriptor
} from "./InfoElements";

const InfoSection = ({headline, headloan, imgStart, lightBg, id, topline, lightText, darkText, description, bottomline}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column2>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Heading lightText={lightText}>{headloan}</Heading>
                <Subtitle darkText={darkText}>{bottomline}</Subtitle>
              </TextWrapper>
            </Column2>
            <Column1>
              <Descriptor darkText={darkText}>{description}</Descriptor>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

// const InfoSection = (dataObject1) => {
//   return (
//     <>
//       <InfoContainer lightBg={dataObject1.lightBg} id={dataObject1.id}>
//         <InfoWrapper>
//           <InfoRow imgStart={dataObject1.imgStart}>
//             <Column2>
//               <TextWrapper>
//                 <TopLine>{dataObject1.TopLine}</TopLine>
//                 <Heading lightText={dataObject1.lightText}>{dataObject1.headline}</Heading>
//                 <Subtitle darkText={dataObject1.darkText}>{dataObject1.bottomline}</Subtitle>
//               </TextWrapper>
//             </Column2>
//             <Column1>
//               <Subtitle>{dataObject1.description}</Subtitle>
//             </Column1>
//           </InfoRow>
//         </InfoWrapper>
//       </InfoContainer>
//     </>
//   )
// };
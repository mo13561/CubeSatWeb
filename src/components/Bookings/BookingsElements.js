import styled from 'styled-components';

export const MainText = styled.h1`
`;
 
export const ForumContainer = styled.div`
`;
 
export const EmailBox = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    size: 1em;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

export const NameBox = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    size: 1em;
    margin: ${props => props.size};
    padding: ${props => props.size};
`; 

export const T1 = styled.h1`
    
`;

export const DateBox = styled.input`
`;
 
export const CommentBox = styled.input`
`;

export const SubmitBox = styled.button`
`;
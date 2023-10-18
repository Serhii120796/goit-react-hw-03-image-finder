import styled from "styled-components";

export const ErrorMessage = styled.b`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
color: ${p => p.theme.colors.error};
`;
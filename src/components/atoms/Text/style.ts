import styled from "styled-components";

export const Container = styled.p<{
  color: "#1A1A1A" | "#333333" | "#4CB3F8" | "#32A8F8" | "#FFFFFF";
  fontSize: 10 | 12 | 16 | 24;
  fontWeight: 400 | 700;
  lineHeight?: string;
  width?: string;
}>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize + "px"};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: "NotoSansJP";
  letter-spacing: 0;
  margin: 0;
  line-height: ${({ lineHeight }) => lineHeight};
  width: ${({ width }) => width};
`;

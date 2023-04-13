import styled from "styled-components";

export const Container = styled.div<{
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 24px;
  width: 230px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  ${({ selected }) => {
    const containerConfig = makeContainerConfig(selected);
    return `
      color: ${containerConfig.color};
      font-weight: ${containerConfig.fontWeight};
      background: ${containerConfig.background};
      border-radius: ${containerConfig.borderRadius};
    `;
  }}
  img {
    height: 24px;
    width: 24px;
    cursor: pointer;
    :hover {
      background: #e6e6e6;
      border-radius: 4px;
    }
    :active {
      background: #cccccc;
      border-radius: 4px;
    }
  }
`;

// サイドバーで選択されているかどうかによってスタイルを変える関数
const makeContainerConfig = (
  selected: boolean
): {
  color: string;
  fontWeight: number;
  background: string;
  borderRadius: string;
} => {
  if (selected) {
    return {
      color: "#32A8F8",
      fontWeight: 700,
      background: "#F5F8FA",
      borderRadius: "4px",
    };
  } else {
    return {
      color: "#333333",
      fontWeight: 400,
      background: "#FFFFFF",
      borderRadius: "0px",
    };
  }
};

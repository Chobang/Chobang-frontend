import styled from "styled-components";

export const Label = styled.div`
  width: 100px;
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const WarningMessage = styled.div`
  margin-top: 10px;
  color: red;
  text-align: center;
`;

/** 이미지상자임 */
export const ImgDiv = styled.div<{ marginTop?: string }>`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  img {
    width: 100%;
  }
  margin-bottom: 80px;
`;

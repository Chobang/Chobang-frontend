import styled from "styled-components";

export const inputBox = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: 3fr 10fr;
`;
/** 이미지상자임 */
export const ImgDiv = styled.div<{ margintop?: string }>`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  margin-top: ${(props) => (props.margintop ? props.margintop : 0)};
  img {
    width: 100%;
  }
  margin-bottom: 80px;
`;

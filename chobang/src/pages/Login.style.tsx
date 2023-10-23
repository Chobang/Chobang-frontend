import styled from "styled-components";

export const inputBox = styled.div`
  width: 100%;
  margin: auto;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
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

/**텍스트 상자임 */
export const TextDiv = styled.div`
  font-size: 1.5rem;
  p:nth-child(2) {
    font-weight: 800;
  }
`;

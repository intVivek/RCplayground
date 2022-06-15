import { css } from "@rocket.chat/css-in-js";

const itemStyle = (layer: number) => {
  let customStyle;
  const basicStyle = css`
    cursor: pointer;
    padding-start: ${layer * 10}px;
  `;

  switch (layer) {
    case 1:
      customStyle = css`
        &:hover {
          background-color: #ffe4e4;
        }
        &:active {
          background-color: #ffc0c0;
        }
        &:focus {
          background-color: #ffc0c0;
        }
      `;
      break;
    case 2:
      customStyle = css`
        &:hover {
          background-color: #ffebeb;
        }
      `;
      break;
    case 3:
      customStyle = css`
        &:hover {
          background-color: #fff1f1;
        }
      `;
      break;
    default:
      customStyle = css`
        &:hover {
          background-color: #f5f5f5;
        }
      `;
      break;
  }
  return [customStyle, basicStyle];
};

export default itemStyle;

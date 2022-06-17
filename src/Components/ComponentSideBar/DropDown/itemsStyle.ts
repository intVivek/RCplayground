import { css } from "@rocket.chat/css-in-js";

export const itemStyle = (layer: number) => {
  let customStyle;
  const basicStyle = css`
    cursor: pointer;
    padding-left: ${10 + (layer - 1) * 16}px;
    &:active {
      background-color: #ffc0c0;
    }
  `;
  switch (layer) {
    case 1:
      customStyle = css`
        &:hover {
          background-color: #ffe4e4;
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

export const labelStyle = (layer: number) => {
  let customStyle;
  const basicStyle = css`
    cursor: pointer;
    font-szie: 12px;
    padding-left: 4px;
  `;
  switch (layer) {
    case 1:
      customStyle = css`
        font-weight: 700;
        letter-spacing: 0.3px;
        color: #999;
        text-transform: uppercase;
      `;
      break;
    case 2:
      customStyle = css`
        letter-spacing: 0.1px;
        color: #555;
        text-transform: capitalize;
      `;
      break;
    default:
      customStyle = css`
        color: #555;
        text-transform: capitalize;
      `;
      break;
  }
  return [customStyle, basicStyle];
};

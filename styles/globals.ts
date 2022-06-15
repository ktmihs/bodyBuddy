import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const global = css`
  @import url(https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css);

  ${emotionReset}

  * {
    font-family: 'NanumSquareRound';
  }
`;

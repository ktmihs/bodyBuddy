/* global kakao */

import styled from '@emotion/styled';
import { useEffect } from 'react';

const Map = styled.div`
  width: 335px;
  height: 130px;
  border-radius: 10px;
`;

export const KakaoMap = () => {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false&libraries=services`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          scrollwheel: false,
          disableDoubleClickZoom: false,
          draggable: false,
        };

        new window.kakao.maps.Map(container, options);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, []);

  return <Map id="map" />;
};

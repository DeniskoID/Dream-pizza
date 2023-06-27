// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={464}
    viewBox="0 0 280 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="26" y="268" rx="10" ry="30" width="223" height="27" />
    <rect x="0" y="309" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="428" rx="10" ry="10" width="92" height="22" />
    <rect x="130" y="416" rx="17" ry="17" width="150" height="42" />
  </ContentLoader>
);

export default Skeleton;

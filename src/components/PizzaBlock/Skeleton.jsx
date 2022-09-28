import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={0.5}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="135" r="136" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="334" rx="10" ry="10" width="280" height="88" />
    <rect x="1" y="446" rx="10" ry="10" width="92" height="30" />
    <rect x="112" y="436" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

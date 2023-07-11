import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import './placeholders.scss';

const NewsPlaceholder = () => {
  return (
    <div className="news-skeleton-component">
      <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
        <div className="news-skeleton-image">
          <Skeleton
            
            height={'100%'}
            width={'100%'}
            duration={1.5}
            animation="wave"
          />
        </div>
        <div className="news-skeleton-heading">
          <Skeleton height={100} width={'100%'} duration={1.5} animation="wave" />
        </div>
        <div className="news-skeleton-label-date">
          <div className="news-skeleton-label">
            <Skeleton height={50} width={'80%'} duration={1.5} animation="wave" />
          </div>
          <div className="news-skeleton-date">
            <Skeleton height={50} width={'80%'} duration={1.5} animation="wave" />
          </div>
        </div>
        <div className="news-skeleton-title">
          <Skeleton height={40} width={'80%'} duration={1.5} animation="wave" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default NewsPlaceholder;

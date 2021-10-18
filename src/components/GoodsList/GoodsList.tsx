/* eslint-disable no-underscore-dangle */
import React from 'react';
import classnames from 'classnames';
import { Card } from '../Card/Card';
import './GoodsList.scss';

type Props = {
  products: Products[];
  sortOption: string;
  toggle: string;
};

export const GoodsList: React.FC<Props> = (props) => {
  const { products, sortOption, toggle } = props;

  const sortBy = (first: Products, second: Products) => {
    if (sortOption === 'rating') {
      return (first.rating - second.rating);
    }

    if (sortOption === 'relevant') {
      return (second.rating - first.rating);
    }

    return (second.rating - first.rating);
  };

  return (
    <div className={classnames('card-list', `card-list--${toggle}`)}>
      {products
        .sort(sortBy)
        .map((product: Products) => {
          return (
            <Card
              product={product}
              key={product._id}
              rate={product.rating}
              toggle={toggle}
            />
          );
        })}
    </div>
  );
};

import React, { useState } from 'react';
import classnames from 'classnames';
import './Card.scss';

type Props = {
  product: Products;
  rate: number;
  toggle: string;
};

export const Card: React.FC<Props> = (props) => {
  const { product, rate, toggle } = props;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const switchFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleKeyPress = () => {

  };

  return (
    <div className={classnames('card', 'card--mg', `card--${toggle}`)}>
      <div className="card-picture">
        <img src={product.picture} className="card-img-top" alt="Didn't found"></img>
        <div
          role="button"
          tabIndex={0}
          onKeyPress={handleKeyPress}
          className="favorite"
          onClick={switchFavorite}
        >
          {!isFavorite
            ? <img src="/img/like.png" alt="heart" className="favorite-heart" />
            : <img src="/img/heart.png" alt="heart" className="favorite-heart" />}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div className="card-description">
          <p className="card-text product-size card-text--mg">{`${product.size}`}</p>

          <div className="rating">
            <div className={classnames('rating__body', `rating__body--${rate}`)}>
            </div>
          </div>
        </div>

        <div className="price-card">
          <p className="price-card__currentPrice">
            &pound;&nbsp;
            {`${product.price.slice(1)}`}
          </p>

          {!product.oldPrice || (
            <p className="price-card__oldPrice">
              <s>
                &pound;
                {`${product.oldPrice?.slice(1)}`}
              </s>
            </p>
          )}

          {!product.oldPrice || (
            <p className="price-card__saved">
              You save &pound;
              {product.savings?.slice(1)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

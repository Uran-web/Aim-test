import React, { useState, useEffect } from 'react';
import './App.scss';
import { getProducts } from './data/api';
import { GoodsList } from './components/GoodsList/GoodsList';
import { Form } from './components/Form/Form';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [sortOption, setSortOption] = useState<string>('');
  const [toggle, setToggle] = useState<string>('grid');

  useEffect(() => {
    getProducts().then(resp => {
      setProducts([...resp]);
    });
  }, []);

  const optionValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;

    setSortOption(value);
  };

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;

    setToggle(value);
  };

  return (
    <>
      <header className="header">
        <div className="card-container">
          <div className="header__content">
            <div className="header__picture">
              <a href="/">
                <img src="/img/logo.png" alt="logo" className="header__logo" />
              </a>
            </div>

            <div className="nav">
              <div className="nav__about nav__about--hov">About</div>
              <div className="nav__catalog nav__about--hov">Catalog</div>
              <div className="nav__contacts nav__about--hov">Contacts</div>
              <div className="nav__gallery nav__about--hov">Gallery</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="card-container">

          <div className="info-bar info-bar--mg-bot">
            <div className="info-bar__amount">
              {`${products.length} results`}
            </div>

            <div className="toggle-button">
              <button
                type="button"
                className="toggle-button__list"
                value="list"
                onClick={handleToggle}
              >
                List
              </button>

              <button
                type="button"
                className="toggle-button__grid"
                value="grid"
                onClick={handleToggle}
              >
                Grid
              </button>
            </div>

            <div className="sort-list">
              Sort by:
              <select className="sort-list__selector" name="sort" id="sort" onChange={optionValue}>
                <option value="rating">Rating</option>
                <option value="relevant">Relevant</option>
              </select>
            </div>
          </div>

          <GoodsList
            products={products}
            sortOption={sortOption}
            toggle={toggle}
          />

          <Form />

        </div>
      </main>

      <footer className="footer">
        <div className="card-container">
          <div className="footer__content">
            &copy; All rights protected
          </div>
        </div>
      </footer>
    </>
  );
};

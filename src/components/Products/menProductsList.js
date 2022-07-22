import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import MenProductPage from "../ProductInformation/mensPage";
import men from "../../assets/images/mens-banner.jpg";
import BreadCrumb from '../BreadCrumb/breadCrumb';
import '../../assets/scss/productList.css';
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';

const MenProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const categoryList = products.filter((value) => value.category === "men's clothing");
  return (
    <div className="productCatalog">
      <div className="productCatalog-mobile">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__image">
              <img src={men} alt="men" />
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__title">
              <h3>Mens <br />Outerwear</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="productCatalog-desktop">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--4">
              <div className="productCatalog__title">
                <h3>Men's</h3>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--8">
              <div className="productCatalog__image">
                <img src={men} alt="men" />
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumbslist">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <BreadCrumb />
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <div className="product-filter">
                <button><FaArrowsAlt /> Filter Results</button><button><BiSort /> Sort Ptoducts</button>
              </div>
              <div className="breadcrumbslist__filter">
                <p>{categoryList.length} Results</p>
                <div className="sortByLatest">
                  <select>
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="productfilters">
                <h4>Filters</h4>
                <p>Material</p>
                <label><input type="checkbox" />Cotton</label>
                <label><input type="checkbox" />Linen</label>
                <label><input type="checkbox" />Nylon</label>
                <label><input type="checkbox" />Rayon</label>
                <a href="/">Show more</a>
                <p>Price</p>
                <label><input type="checkbox" />35.34 - 42.67$</label>
                <label><input type="checkbox" />49.47$ - 56.67$</label>
                <label><input type="checkbox" />56.67$ - 63.42$</label>
                <label><input type="checkbox" />63.42$ - 70.67$</label>
                <p>Colors</p>
                <button className="btn-1"></button>
                <button className="btn-2"></button>
                <button className="btn-3"></button>
                <button className="btn-4"></button>
                <button className="btn-5"></button>
                <button className="btn-6"></button>
                <button className="btn-7"></button>
                <button className="btn-8"></button>
                <button className="btn-9"></button>
                <button className="btn-10"></button>
                <p>Style</p>
                <label><input type="checkbox" />Short Sleeve</label>
                <label><input type="checkbox" />Sleeveless</label>
                <label><input type="checkbox" />Long Sleeve</label>
                <label><input type="checkbox" />3/4 Sleeve</label>
                <label><input type="checkbox" />Open Front</label>
                <label><input type="checkbox" />Crew</label>
                <label><input type="checkbox" />Hooded</label>
                <label><input type="checkbox" />V-Neck</label>
                <hr></hr>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <MenProductPage />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenProductList;

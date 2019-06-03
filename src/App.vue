<template>
  <div id="app">

    <!-- white-plate -->
    <div class="white-plate">
      <div class="container-fluid">
        <!-- header -->
        <div class="header">
          <div class="row">
            <div class="col-sm-6">
              <a href="index.html" class="site-logo">
              <span>техно</span>Store
              </a>
            </div>
            <div class="col-sm-6 d-flex justify-content-end">
              <div class="fav-list-wrapper">
                <button v-on:click='updat()' class="cart-list__button" style="margin-right: 15px;width: 70px;">Обнов</button>
                <button v-on:click='sort()' class="cart-list__button" style="margin-right: 15px;width: 70px;">Сорт</button>
                <div class="fav-list__button">
                  <i class="far fa-heart"></i> Избранное
                </div>
                <div class="list-dropdown">
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="cart-list-wrapper">
                <div class="cart-list__button">
                  <i class="fas fa-shopping-cart"></i>
                  Корзина
                  <span class="cart-btn-badge">4</span>
                </div>
                <div class="list-dropdown">
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="product-list-item">
                    <div class="product-list-item__img">
                      <img src="/assets/img/products/iphone.jpg" alt="iPhone">
                    </div>
                    <div class="product-list-item__title">
                      <a href="#">Apple iPhone X 256 ГБ «серый космос»</a>
                    </div>
                    <a href="#" class="product-list-item__delete">
                    <i class="fas fa-times"></i>
                    </a>
                  </div>
                  <div class="dropdown-cart-btn">
                    <a href="cart.html" class="btn btn-warning">Перейти в корзину</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- // header -->
        <div class="line-between"></div>
        <!-- content block -->
        <div class="row">
          <div class="col-md-3 col-lg-2">
            <div class="nav-section">
              <div class="nav-section__title">Категории</div>
              <ul class="nav">
                <li class="nav__element">
                  <a href="#!" class="nav__link nav__link--active">
                  <i class="fas fa-check-square"></i>
                  Все товары
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Телефоны
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Планшеты
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Ноутбуки
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Компьютеры
                  </a>
                </li>
              </ul>
            </div>
            <div class="nav-section">
              <div class="nav-section__title">Цена</div>
              <div class="input-price-wrapper form-inline">
                <input type="number" placeholder="От" class="form-control input-price-before">
                <input type="number" placeholder="До" class="form-control input-price-after">
              </div>
            </div>
            <div class="nav-section">
              <div class="nav-section__title">Производители</div>
              <ul class="nav">
                <li class="nav__element">
                  <a href="#!" class="nav__link nav__link--active">
                  <i class="fas fa-check-square"></i>
                  Все
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Apple
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Google
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Huawei
                  </a>
                </li>
                <li class="nav__element">
                  <a href="#!" class="nav__link">
                  <i class="far fa-square"></i>
                  Yandex
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Center Part -->
          <div class="col-md-9 col-lg-10">
            <div class="row">
              <good-card 
                v-for='good of goods'
                :title='good.title'
                :image='good.image'
                :price='good.price'  
                :newPrice='good.newPrice' 
                :oldPrice='good.oldPrice' 
                :isDiscount='good.isDiscount'
                :isNew='good.isNew' 
                :isFavorites='good.isFavorites'
              />

              
            </div>
          </div>
          <!-- // Center Part --> 
        </div>
        <!-- content block -->
      </div>
    </div>
    <!-- // white-plate -->
    <div class="copyright">
      <p>
        Сделал John Doe, на курсе
        <a href="http://webcademy.ru" target="_blank">WebCademy.ru</a>
      </p>
    </div>

  </div>
</template>

<script>
import GoodCard from '@/components/GoodCard'
export default {
  components: { GoodCard },
//  beforeCreate () {
//    this.$store.dispatch('updat')
//  },
  data () {
    return {}
  },
  computed: {
    goods () {
      return this.$store.state.goods
    }
  },
  methods: {
    sort () {
 //     this.$store.commit('sort')
      this.$store.dispatch('sort')
    },
    updat () {
      this.$store.dispatch('updat')
    }
  }
}
</script>

<style>
:root {
  --blue: #316BF3;
  --orange: #fd5e60;
}
body,
html {
  background-color: #F8F9F9;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
}
body {
  height: auto;
  min-height: 100%;
  background: #306BF2;
  background: -webkit-linear-gradient(top left, #306BF2, #0A41C5);
  background: -webkit-gradient(linear, left top, right bottom, from(#306BF2), to(#0A41C5));
  background: -o-linear-gradient(top left, #306BF2, #0A41C5);
  background: linear-gradient(top left, #306BF2, #0A41C5);
  padding-bottom: 50px;
}
img {
  max-width: 100%;
  height: auto;
}
.white-plate {
  margin-top: 55px;
  background-color: #FFF;
  border-radius: 16px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 55px;
  -webkit-box-shadow: 0px 10px 62px 10px #133b9a;
  box-shadow: 0px 10px 62px 10px #133b9a;
}
.white-plate.white-plate--login {
  max-width: 400px;
  padding-bottom: 25px;
}
body:before {
  content: "";
  display: table;
}
.site-logo,
a.site-logo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 38px;
  color: var(--blue);
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
@media (max-width: 576px) {
  .site-logo {
    display: block;
    text-align: center;
  }
}
.site-logo span {
  color: #2B2B2B;
}
a.site-logo:hover {
  color: var(--blue);
  text-decoration: none;
  color: #FF3805;
}
a.site-logo:hover span {
  color: #2B2B2B;
  text-decoration: none;
  color: var(--blue);
}
.admin-link {
  font-size: 38px;
  text-align: right;
}
@media (max-width: 576px) {
  .admin-link {
    text-align: center;
  }
}
.fav-list-wrapper {
  position: relative;
  -ms-flex-item-align: center;
  align-self: center;
}
.fav-list__button {
  display: inline-block;
  padding: 7px 15px 5px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: #C3C3C3;
  border-radius: 4px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
.fav-list__button:hover,
.fav-list__button:focus,
.fav-list__button:active {
  background-color: #fd5e60;
}
.cart-list-wrapper {
  position: relative;
  -ms-flex-item-align: center;
  align-self: center;
}
.cart-list__button {
  display: inline-block;
  padding: 7px 15px 5px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: #C3C3C3;
  border-radius: 4px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
.cart-list__button:hover,
.cart-list__button:focus,
.cart-list__button:active {
  background-color: #fd5e60;
}
.fav-list-dropdown {
  display: none;
  position: absolute;
  z-index: 9;
  top: 100%;
  right: 0;
  margin-top: 10px;
  height: auto;
  width: 300px;
  background-color: #FFF;
  -webkit-box-shadow: 0px 0px 15px #b2c3ed;
  box-shadow: 0px 0px 15px #b2c3ed;
  border-radius: 6px;
  padding: 0px 15px;
}
.fav-list-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eceff5;
}
.fav-list-item:last-child {
  border-bottom: none;
}
.fav-list-item__img {
  width: 64px;
  height: auto;
}
.fav-list-item__title {
  margin-left: 15px;
  margin-right: 15px;
}
.fav-list-item__delete {
  padding: 4px;
  color: #464646;
}
.fav-list-item__delete:hover {
  color: #fd5e60;
}
.list-dropdown {
  display: none;
  position: absolute;
  z-index: 9;
  top: 100%;
  right: 0;
  margin-top: 10px;
  height: auto;
  width: 300px;
  background-color: #FFF;
  -webkit-box-shadow: 0px 0px 15px #b2c3ed;
  box-shadow: 0px 0px 15px #b2c3ed;
  border-radius: 6px;
  padding: 0px 15px;
}
.dropdown-cart-btn {
  padding-top: 15px;
  padding-bottom: 15px;
}
.product-list-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eceff5;
}
.product-list-item:last-child {
  border-bottom: none;
}
.product-list-item__img {
  width: 64px;
  height: auto;
}
.product-list-item__title {
  margin-left: 15px;
  margin-right: 15px;
}
.product-list-item__delete {
  padding: 4px;
  color: #464646;
}
.product-list-item__delete:hover {
  color: #fd5e60;
}
.cart-list__button {
  display: inline-block;
  padding: 7px 15px 5px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-item-align: center;
  align-self: center;
  margin-left: 15px;
  position: relative;
  background-color: var(--blue);
  border-radius: 4px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
.cart-btn-badge {
  position: absolute;
  right: 0;
  top: 0px;
  -webkit-transform: translate(45%, -45%);
  -ms-transform: translate(45%, -45%);
  transform: translate(45%, -45%);
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 32px;
  background-color: #fd5e60;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  color: #FFF;
  text-align: center;
  padding-top: 5px;
}
.header {
  padding-top: 35px;
  padding-bottom: 30px;
}
.line-between {
  background-color: var(--blue);
  height: 60px;
  margin-left: -55px;
  margin-right: -55px;
  margin-bottom: 40px;
}
.nav-section {
  margin-bottom: 25px;
}
.nav-section__title {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 15px;
  color: #000;
}
.nav {
  font-family: 'Montserrat', sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media (max-width: 576px) {
  .nav {
    text-align: center;
  }
}
.nav__element {
  margin-bottom: 15px;
}
.nav__link {
  display: inline-block;
  color: #000;
  font-weight: 400;
  font-size: 14px;
  padding: 8px 0px;
  border-radius: 5px;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
.nav__link:hover {
  text-decoration: none;
}
.nav__link:hover i {
  color: #717171;
}
.nav__link i {
  font-size: 18px;
  margin-right: 5px;
  color: #C3C3C3;
}
.nav__link--active,
.nav__link--active i {
  color: #fd5e60;
}
.input-price-wrapper {
  display: inline-block;
}
.input-price-before {
  width: 70px !important;
}
.input-price-after {
  width: 70px !important;
}
.title-1,
.product-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 35px;
}
.title-2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 35px;
}
.product-title-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.product-top-fav {
  margin-left: 25px;
  font-size: 24px;
}
.product-top-fav i {
  color: #C3C3C3;
}
.product-top-fav--active i {
  color: var(--orange);
}
.product-top-fav i:hover {
  color: var(--orange);
  cursor: pointer;
}
.product-price {
  color: #4ab081;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 25px;
}
.product-price-old {
  text-decoration: line-through;
  font-size: 16px;
  font-weight: 600;
  vertical-align: baseline;
  padding-left: 10px;
  color: #000;
}
.product-btn-order,
a.product-btn-order {
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 25px;
  background-color: var(--blue);
  color: #FFF;
  font-weight: 700;
  font-size: 18px;
  padding: 0.5em 1em;
  text-decoration: none;
  -webkit-transition: 0.2s linear;
  -o-transition: 0.2s linear;
  transition: 0.2s linear;
}
.product-btn-order:hover,
a.product-btn-order:hover {
  text-decoration: none;
  color: #FFF;
  background-color: #FF3805;
}
.product-desc {
  margin-bottom: 50px;
}
.product-img {
  max-width: 220px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.card-price-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  margin-bottom: 10px;
}
.card-price-wrapper span {
  font-weight: 600;
}
.card-price-new {
  font-weight: 800;
  color: #fd5e60;
  font-size: 20px;
  margin-right: 10px;
}
.card-price-regular {
  font-weight: 600;
  color: #000;
  font-size: 20px;
  margin-right: 10px;
}
.card-price-old {
  font-weight: 400;
  color: #000;
  text-decoration: line-through;
  font-size: 16px;
}
/*.item-price-wrapper {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}*/
/*.item-price {
  font-weight: 800;
  color: #fd5e60;
  font-size: 20px;
  margin-right: 10px;
}*/
/*.item-price__new span {
  font-weight: 600;
}*/
/*.item-price__new {
  font-weight: 800;
  color: #fd5e60;
  font-size: 20px;
  margin-right: 10px;
}*/
/*.item-price__new span {
  font-weight: 600;
}*/
/*.item-price__old {
  font-weight: 400;
  color: #000;
  text-decoration: line-through;
  font-size: 16px;
}*/
.item-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 25px;
  color: #000;
  text-decoration: none;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
.item-title a {
  color: #000;
  text-decoration: none;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
  display: inline-block;
}
.item-title a:hover {
  color: #007bff;
  text-decoration: none;
}
.card-buy {
  background-color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: var(--blue);
  font-weight: 600;
  letter-spacing: 1px;
  padding: 7px 0 5px;
  text-align: center;
  -webkit-box-flex: 5;
  -ms-flex: 5 0 50px;
  flex: 5 0 50px;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
  border-radius: 4px;
  background-color: var(--blue);
  color: #FFF;
}
.card-buy:hover {
  background-color: var(--orange);
  color: #FFF;
}
.card-btn {
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid var(--blue);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 15px;
}
.card-btn__price {
  background-color: #FFF;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100px;
  flex: 0 0 100px;
  text-align: center;
  padding: 5px;
  font-weight: 400;
  font-size: 18px;
  height: 100%;
  border-radius: 4px 0 0 4px;
  border-right: 2px solid var(--blue);
}
.card-btn__btn {
  background-color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: var(--blue);
  font-weight: 600;
  letter-spacing: 1px;
  padding: 7px 0 5px;
  text-align: center;
  -webkit-box-flex: 5;
  -ms-flex: 5 0 50px;
  flex: 5 0 50px;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
  border-radius: 0 4px 4px 0;
}
.card-btn__btn:hover {
  background-color: var(--blue);
  color: #FFF;
  border-radius: 0;
}
.card-top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 20px;
}
.card-top__sale {
  background-color: #FF3805;
  border-radius: 3px;
  padding: 4px 5px;
  font-size: 15px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
}
.card-top__new {
  border-radius: 3px;
  padding: 4px 5px;
  font-size: 15px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  background-color: #4ab081;
}
.card-top__cat {
  color: #D8D8D8;
  font-weight: 700;
}
.card-top__fav i {
  color: #C3C3C3;
}
.card-top__fav i:hover {
  color: var(--orange);
  cursor: pointer;
}
.card-top__fav--active i {
  color: var(--orange);
}
.card {
  border-radius: 8px;
  border: 1px solid rgba(195, 206, 214, 0.5);
  -webkit-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in;
}
.card:hover {
  border: 1px solid #fff;
  -webkit-box-shadow: 0px 10px 30px 0px #c3ced6;
  box-shadow: 0px 10px 30px 0px #c3ced6;
}
.copyright {
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  padding: 35px;
}
.copyright a {
  color: #FFF;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.order-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgba(195, 206, 214, 0.5);
  padding-bottom: 25px;
  margin-bottom: 35px;
}
.order-item-data {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.order-item-controls {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 50px;
  padding-top: 15px;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.order-img {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 120px;
  flex: 0 0 120px;
  max-width: 120px;
  height: auto;
  margin-right: auto;
}
.order-desc {
  -webkit-box-flex: 5;
  -ms-flex: 5 0 auto;
  flex: 5 0 auto;
  padding-top: 15px;
}
.order-title {
  font-weight: 700;
  font-size: 22px;
}
.order-price {
  font-size: 16px;
  color: #4AB081;
}
.order-number {
  width: 110px;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 110px;
  flex: 0 0 110px;
}
.order-number-input {
  text-align: center;
}
.order-delete {
  display: inline-block;
  width: 30px;
  margin-left: 30px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
}
</style>

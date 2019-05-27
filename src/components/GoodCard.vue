<template>
    <div class="col-sm-6 col-md-6 col-lg-4">
        <article class="card mb-4">
            <div class="card-top">
                <div class="card-top__left">
                    <div v-if="isDiscount !== undefined" class="card-top__sale">Скидка</div>
                    <div v-if="isNew !== undefined" class="card-top__new">Новинка</div>
                </div>

                <div class="card-top__right">
                	<div v-if="isFavorites !== undefined" class="card-top__fav card-top__fav--active" title="Убрать из избранного">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div v-if="isFavorites === undefined" class="card-top__fav" title="Добавить в избранное">
       				    <i class="far fa-heart"></i>
                    </div>

                </div>
            </div>
            <div class="product-img">
                <img v-bind:src="image">
            </div>
            <div class="card-body">
                <div class="card-price-wrapper">
                	<div v-if="price !== undefined" class="card-price-regular">
                        {{price}} <span>₽</span>
                      </div>
                    <div v-if="newPrice !== undefined" class="card-price-new">
                        {{newPrice}} <span>₽</span>
                    </div>
                    <div v-if="oldPrice !== undefined" class="card-price-old">
                        {{oldPrice}} <span>₽</span>
                    </div>
                </div>
                <h4 class="item-title">
                    <a href="product-page.html">{{title}}</a>
                </h4>
                <div class="card-buy">В корзину</div>
            </div>
        </article>
    </div>
     
         
</template>
<script>
export default {
	props: ['title', 'image', 'price', 'newPrice', 'oldPrice', 'isFavorites', 'isNew', 'isDiscount'],
	name: 'good-card'
}
</script>
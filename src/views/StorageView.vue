<template v-if="storageStore.storage">

    <div v-for="product in storageStore.storage" :key="product.id">
        <div class="products" v-if="storageStore.sortFilter.includes(product.type)">
            <div class="overview">
                <div class="product-image">
                    <img src="@/assets/product.png" alt="#">
                </div>
                <div class="info">
                    <h4 class="type">{{ product.type }}</h4>
                    <h4 class="title">Брус №{{ product.id }}</h4>
                    <div class="location">
                        <img src="@/assets/geo.png" alt="" />
                        <span>Санкт-Петербург, Красное Село</span>
                    </div>
                    <div class="seller">Продавец <span>Торговый Дом ГОСТ</span></div>
                    <div class="material">Вид товара <p>Стройматериалы</p>
                    </div>
                    <div class="about">Пиломатериалы бpyc доска. Распродажа пиломатериалов в связи закрытием ЛЕСО-БАЗЫ!
                        Успейте приобрести пиломатериал co скидками до закрытия 01.06.2022 !
                        Мы стараемся быть не такими как все и даем вам: Доставка в согласованный день, если переносим -
                        доставка бесплатно за наш счет.
                        Весь материал соответствует гостам. Вы можете проверить пиломатериалы на складе или на адресе. Если
                        материал не соответствует заявленному качеству - бесплатно меняем ero.</div>
                </div>
            </div>
            <div class="card" v-if="storageStore.sortFilter.includes(product.type)">
                <h2 class="title">33 000 ₽</h2>
                <div class="count">
                    <p class="name">Количество</p>
                    <p class="amount">3 шт</p>
                </div>
                <div class="price">
                    <p class="name">Стоимость за штуку</p>
                    <p class="amount">11 000 ₽</p>
                </div>
                <div class="features">
                    <button class="cart-button">Добавить в сделки</button>
                    <img src="@/assets/favourite.png" alt="#" class="favourite-button" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useStorageStore } from '@/stores/storage';
import http from '../../http-common'

const storageStore: any = useStorageStore();

http.get('').then(res => {
    storageStore.storage = res.data.products;
})

</script>


<style scoped>
.products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 1rem;
    width: 95%;
    height: 30%;
    border: 1px solid #E0E3EE;
    border-radius: 20px;

    position: relative;
    left: 1.7rem;
    top: .4rem;

    overflow: hidden;
}

.overview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    width: 782px;
    height: 300px;

    position: relative;
    right: 7rem;

    background: #FFFFFF;
    border-radius: 20px;
}

.product-image {
    width: 287%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.product-image img {
    position: relative;
    left: 3.65rem;
    top: 1rem;
    width: 55%;
    border-radius: 10px;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

.info .type {
    margin-top: 0rem;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: #969DC3;
}

.info .title {
    margin-top: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 125%;
    color: #2D3B87;
}

.info .location {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: .2rem;
    width: 200px;
    height: 23px;
    background: #F4F5F9;
    border-radius: 5px;
}

.info .location span {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 100%;
    color: #616CA5;
}

.info .seller {
    margin-top: .5rem;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: #969DC3;
}

.info .material {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: .4rem;
    padding: .5rem 0;

    background: #F4F5F9;
    border-radius: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: #969DC3;
}

.info .material p {
    margin: 0 0;
    padding: .3rem;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;

    color: #616CA5;
}

.info .about {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    width: 100%;
    color: #2D3B87;
}

.card {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    position: relative;
    top: 0rem;

    width: 314px;
    height: 300px;
    background: #FFFFFF;
    border: 1px solid #E0E3EE;
    border-radius: 20px;
}

.card .title {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;

    margin: 1.4rem 17px 0px 17px;

    display: flex;
    align-items: center;
    color: #2D3B87;
}

.card .count,
.card .price {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    width: 100%;
}

.card .count .name {
    position: relative;
    right: 2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;

    margin-bottom: 0px;

    color: #969DC3;
}

.card .count .amount {
    position: relative;
    left: .5rem;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    text-align: right;

    margin-bottom: 0px;

    color: #2D3B87;
}

.card .price .name {
    position: relative;
    right: 1.1rem;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;

    color: #969DC3;
}

.card .price .amount {
    position: relative;
    right: .3rem;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    text-align: right;

    color: #2D3B87;
}


.card .features {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    position: relative;
    top: 10rem;

    width: 100%;
}

.card .features .cart-button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 17.5px 25px;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: #2D3B87;

    width: 170px;
    height: 30px;
    background: #F4F5F9;
    border: 10px;
    border-radius: 10px;
    cursor: pointer;
}
.card .features .favourite-button {
    position: relative;
    right: 1.2rem;

    padding: 10px;

    width: 15px;
    height: 15px;
    background: #F4F5F9;
    border-radius: 10px;
    cursor: pointer;
}
</style>
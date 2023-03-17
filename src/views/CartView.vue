<template v-if="storageStore.storage">
    <FilterComp />

    <div v-for="product in storageStore.filteredCart" :key="product.id">
        <div class="products" v-if="storageStore.sortFilter.includes(product.type)">
            <div class="overview">
                <div class="product-image">
                    <img src="@/assets/product.png" alt="#">
                </div>
                <div class="info">
                    <h4 class="type">{{ product.type }}</h4>
                    <h4 class="title">{{ product.name }} v.{{ product.id }}</h4>
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
                <h2 class="title">{{ product.amount ? `${makeSum(product.amount)} ₽` : 'Оплачено' }} </h2>
                <div class="count">
                    <p class="name">Количество</p>
                    <p class="amount">{{ `${product.amount} шт` }}</p>
                </div>
                <div class="price">
                    <p class="name">Стоимость за штуку</p>
                    <p class="amount">11 000 ₽</p>
                </div>
                <div class="features">

                    <button class="buy-button" :class="{ bought: product.toggler }" @click="buyProduct(product)">{{
                        !product.toggler ? 'Оплатить' : 'Оплачено' }}</button>

                    <img :src="product.favourite ? favouriteActiveIcon : favouriteIcon" alt="#" class="favourite-button"
                        :class="{ active: product.favourite }" @click="updateFavourite(product)" />

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useStorageStore } from '@/stores/storage';

import favouriteIcon from '@/assets/favourite.png';
import favouriteActiveIcon from '@/assets/favourite-active.png';

import FilterComp from '../components/FilterComp.vue';

import '../assets/products.css'

const storageStore: any = useStorageStore();

const makeSum = (amount: number) => {
    return (11000 * amount).toLocaleString(undefined, { minimumFractionDigits: 2 }).slice(0, -3)
}

const updateFavourite = (product: any) => {
    product.favourite = true;
    storageStore.storage.forEach((element: any) => {
        if (element.id === product.id) {
            if (element.favourite === false) {
                element.favourite = true;
            }
        }
    })

    localStorage.setItem('storage', JSON.stringify(storageStore.storage));
    localStorage.setItem('cart', JSON.stringify(storageStore.cart));
}

const buyProduct = (product: any) => {
    product.amount = 0;
    product.toggler = true;

    localStorage.setItem('cart', JSON.stringify(storageStore.cart));
}
</script>
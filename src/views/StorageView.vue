<template v-if="storageStore.storage">
    <FilterComp />

    <div v-for="product in storageStore.filteredStorage" :key="product.id">
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
                <h2 class="title">11 000 ₽</h2>
                <div class="count">
                    <p class="name">Количество</p>
                    <p class="amount">1 шт</p>
                </div>
                <div class="price">
                    <p class="name">Стоимость за штуку</p>
                    <p class="amount">11 000 ₽</p>
                </div>
                <div class="features">
                    <button class="cart-button" @click="addToCart(product)">Добавить в сделки</button>
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

const updateFavourite = (product: any) => {
    storageStore.storage.forEach((element: any) => {
        if (element.id === product.id) {
            element.favourite = !element.favourite;
        }
    })

    localStorage.setItem('storage', JSON.stringify(storageStore.storage));
}

const addToCart = (product: any) => {
    let productCopy = product;
    let toggler;
    
    product.toggler = false;

    if (storageStore.cart.length == 0) {
        productCopy.amount = 1;
        storageStore.cart = [productCopy];
    } else {
        storageStore.cart.forEach((element: any) => {
            toggler = false;
            if (element.id === productCopy.id) {
                productCopy.amount = element.amount + 1;
                element = productCopy;
                toggler = true;
            }
        });

        if (!toggler) {
            productCopy.amount = 1;
            storageStore.cart.push(productCopy);
        }
    }
    localStorage.setItem('cart', JSON.stringify(storageStore.cart));
}

</script>
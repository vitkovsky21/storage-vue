<template>
    <div class="filter">
        <div class="sortbar">
            <button @click="filterBy('Аукцион Прямые продажи', 0)" :class="{ active: storageStore.sortId === 0 }">Bce
                типы</button>
            <button @click="filterBy(sellings, 1)" :class="{ active: storageStore.sortId === 1 }">Прямые продажи</button>
            <button @click="filterBy(auction, 2)" :class="{ active: storageStore.sortId === 2 }">Аукцион</button>
        </div>
        <div class="search">
            <input type="text">
            <img src="@/assets/search.png" alt="#">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStorageStore } from '@/stores/storage';
import { ref, type Ref } from 'vue';

const auction: Ref<string> = ref("Аукцион");
const sellings: Ref<string> = ref("Прямые продажи");

const storageStore: any = useStorageStore();

const filterBy = (options: any, id: number): void => {
    storageStore.sortId = id;
    localStorage.setItem('id', id.toString())

    storageStore.sortFilter = options;
    localStorage.setItem('type', options)
}
</script>

<style scoped>
.filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.sortbar {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 254px;
    height: 35px;

    position: relative;
    top: .3rem;
    left: 2rem;
    background: #F4F5F9;
    border: 1px solid #E0E3EE;
    border-radius: 10px;
    margin: 1.8rem 0rem;
    z-index: 2000;
}

button {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    border: none;
    cursor: pointer;

    color: #969DC3;
}

button.active {
    color: #2d3b87 !important;
}

.search {
    position: relative;
    right: 2rem;
    top: .3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 4px 20px 20px;
    gap: 8px;
    width: 220px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #E0E3EE;
    border-radius: 10px;
}

.search input {
    border: none;
}

.search input:focus {
    border: none;
    outline-width: 0;
}

.search img {
    width: 30px;
    height: 30px;
    z-index: 2000;
    cursor: pointer;
}
</style>
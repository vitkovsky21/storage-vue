<template>
    <div class="header">
        <div class="panel"></div>
        <div class="navbar">
            <RouterLink to="/favourite" class="link"><img src="@/assets/favourite.png" alt="#" />
                <p>Избранное</p>
            </RouterLink>
            <RouterLink to="/" class="link"><img src="@/assets/stock.png" alt="#" />
                <p>Склад</p>
            </RouterLink>
            <RouterLink to="/cart" class="link"><img src="@/assets/cart.png" alt="#" />
                <p>Сделки</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.panel {
    width: 95%;
    height: 30px;
    background: #E0E3EE;
    border-radius: 0px 0px 10px 10px;
}

.navbar {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 90px;
}

.link {
    position: relative;
    right: .5rem;
    top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 60px;
    height: 40px;

    border-radius: 10px;
}

.link.router-link-active {
    background: #F4F5F9;
}

.link img {
    position: relative;
    width: 15px;
    height: 15px;

    text-align: center;
}

.link p {
    position: relative;
    top: .2rem;

    margin: 0 0;

    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 100%;
}
</style>
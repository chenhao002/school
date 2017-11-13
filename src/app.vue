<template>
    <div class="container">
        <p class="information">asdasdasdsadasdasdasdsadsa</p>
        <ul>
            <router-link class="filter-item" :to="{name:'overall'}" tag="li">综合检索</router-link>
            <router-link class="filter-item" :to="{name:'college'}" tag="li">高校检索</router-link>
            <router-link class="filter-item" :to="{name:'major'}" tag="li">专业检索</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return {}
        }
    }
</script>

<style scoped>
    .container{
        min-width:960px;
        max-width: 92%;
        margin: 0 auto;
    }
    .information{
        font-size:16px;
        line-height: 36px;
        color:red;
        text-indent: 10px;
    }
    .container ul{
        width: 100%;
        font-size: 0;
        border-bottom: 1px solid #ccc;
    }
    .filter-item{
        display: inline-block;
        min-width: 70px;
        height: 35px;
        color: #333333;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        font-size: 16px;
        margin: 0;
    }
    .router-link-active,.filter-item:hover{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }
</style>

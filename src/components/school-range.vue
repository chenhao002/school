<template>
    <div class="school-range clear">
        <div class="left-title">高校层次：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolRangeList" :key="index" :index="index" :object="value" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>
<script>
    import filter_item from './filter-item';
    export default {
        name:'school-range',
        props:{
            schoolRangeList:{
                type:Array,
                required: true
            }
        },
        components:{
            "filter-item":filter_item
        }
    }
</script>
<style scoped>
    
</style>

<template>
    <div class="school-area clear">
        <div class="left-title">高校地区：</div>
        <div class="right-area">
            <filter-item v-for="(value,index) in schoolAreaList" :catagory="'高校地区'" :index="index" :key="index" :object="value"></filter-item>
        </div>
        <div class="clear"></div> 
    </div>
</template>
<script>
    import filter_item from './filter-item.vue';
    export default {
        name:'school-area',
        props:{
            schoolAreaList:{
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
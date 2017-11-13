<template>
    <span class="filter-item" @click="toggle" :class="{selected:object.selected}">{{object.value}}</span>
</template>

<script>
    export default {
        props:['index','object','catagory'],
        methods: {
            toggle: function () {
                if(this.catagory == '高校层次'){
                    this.$store.commit('reset_school_range',{
                        index:this.index,
                        selected:!this.object.selected
                    })
                    console.log(this.object.selected)
                }else{
                    this.$store.commit('reset_school_area',{
                        index:this.index,
                        selected:!this.object.selected
                    })
                }
            }
        },
    }
</script>

<style>
    .selected{
        background:rgba(0, 160, 92, 1);
        color:#fff;
    }
</style>

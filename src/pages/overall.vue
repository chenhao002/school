<template>
    <div class="filter-box">
        <div class="selected-condations">
            <div class="left-title">已选条件：</div>
            <div class="right-area">
                <p class="selected-item" v-if="$store.getters.selected_range!='不限'">
                    {{$store.getters.selected_range}} 
                    <span class="clear-selected" @click="clearRange">x</span>
                </p>
                <p class="selected-item" v-if="$store.getters.selected_area!='不限'">
                    {{$store.getters.selected_area}} 
                    <span class="clear-selected" @click="clearArea">x</span>
                </p>
            </div>
        </div>
        <div class="condations-box clear">
            <div class="major-range clear">
                <div class="left-title">专业层次：</div>
                <div class="right-area"></div>
            </div>
            <school-range :school-range-list="school_range_obj">{{selected_range_item}}</school-range>
            <school-area :school-area-list="school_area_obj">{{selected_area_item}}</school-area>
        </div>
    </div>
</template>

<script>
    import school_range from '../components/school-range';
    import school_area from '../components/school-area';
    export default {
        name:'overall',
        data:function(){
            return {
                selected_range_item:false,
                selected_area_item:false,
                school_range_obj:[],
                school_area_obj:[],
                school_range:["不限", "一流大学", "一流学科", "985工程", "211工程", "普通本科（公办）", "普通本科（民办)", "高职专科"],
                school_area:["不限", "安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西"]
            }
        },
        created:function(){
            this.school_range_obj = this.school_range.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
            })
            this.school_area_obj = this.school_area.map((value,index)=>{
                return index==0?{value:value,selected:true}:{value:value,selected:false}
            })
            this.$store.commit('update_school_range',this.school_range_obj);
            this.$store.commit('update_school_area',this.school_area_obj);
        },
        methods:{
            clearRange:function(){
                this.$store.commit('clear_range');
            },
            clearArea:function(){
                this.$store.commit('clear_area');
            }
        },
        components:{
            "school-range":school_range,
            "school-area":school_area
        }
    }
</script>

<style>
    .filter-box{
        width: 100%;
    }
    .left-title,.right-area{
        float: left;
        box-sizing: border-box;
    }
    .left-title{
        margin: 5px 0;
        text-indent: 10px;
        width: 10%;
    }
    .right-area{
        width: 90%;
    }
    .selected-condations{
        padding: 10px;
        line-height: 35px;
    }
    .selected-item{
        height: 24px;
        display: inline-block;
        border: 1px solid #ccc;
        padding: 5px;
        line-height: 24px;
        position: relative;
        padding-right:20px; 
    }
    .selected-item span{
        position: absolute;
        right: 5px;top:0px;
        cursor:pointer;
    }
    .condations-box{
        border: 1px solid #ccc;
        padding: 5px 10px;
        line-height: 35px;
    }
    .filter-item{
        display: inline-block;
        min-width: 70px;
        padding: 0 5px;
        height: 35px;
        color: #333333;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        margin: 5px 0;
    }
    .filter-item:hover{
        background: rgba(0, 160, 92, 1);
        color: #fff;
    }
</style>

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        school_range_obj:[],
        school_area_obj:[]
    },
    mutations:{
        update_school_range:function(state,list){
            state.school_range_obj = list;
        },
        update_school_area:function(state,list){
            state.school_area_obj = list;
        },
        reset_school_range:function(state,item){
            let arr = state.school_range_obj.map((value,index)=>{
                value.selected = false;
                if(item.index == index){
                    value.selected = item.selected;
                }
                return value;
            })
            let selected_none = true;
            arr.forEach(value=>{
                if(value.selected){
                    selected_none = false;
                }
            })
            if(selected_none){
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        reset_school_area:function(state,item){

            state.school_area_obj[0].selected = false;
            if(item.index == 0){
                state.school_area_obj.map((value,index)=>{
                    value.selected = (index==0);
                    return value;
                })
                return;
            }

            let arr = state.school_area_obj.map((value,index)=>{
                if(index == item.index){
                    value.selected = item.selected;
                }
                return value;
            })

            let selected_none = true;
            arr.forEach(value=>{
                if(value.selected){
                    selected_none = false;
                }
            })
            if(selected_none){
                arr[0].selected = true;
            }
            state.school_area_obj = arr;
        },
        clear_range:function(state){
            state.school_range_obj.forEach((value,index)=>{
                if(index==0){
                    value.selected = true;
                }else{
                    value.selected = false;
                }
            })
        },
        clear_area:function(state){
            state.school_area_obj.forEach((value,index)=>{
                if(index==0){
                    value.selected = true;
                }else{
                    value.selected = false;
                }
            })
        }
    },
    getters:{
        selected_range:function(state){
            let str = '';
            state.school_range_obj.map(item=>{
                if(item.selected){
                    str+=item.value;
                }
            })
            return str;
        },
        selected_area:function(state){
            let arr = [];
            state.school_area_obj.map(item=>{
                if(item.selected){
                    arr.push(item.value);
                }
            })
            return arr.join(',');
        }
    }
})

export default store;
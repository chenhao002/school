import overall from '../pages/overall.vue';
var routes = [
    //重定向
    { path: '', redirect: {name:'overall'}},
    {
        name:'overall',
        path:'/overall',
        component:overall
    },
    {
        name:'college',
        path:'/college',
        component:{
            template:'<h1>高校</h1>'
        }
    },
    {
        name:'major',
        path:'/major',
        component:{
            template:'<h1>专业</h1>'
        }
    }
]
export default routes
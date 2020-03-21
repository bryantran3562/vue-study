import addBlog from '../components/addBlog.vue';
import showBlogs from '../components/showBlogs.vue';
import listBlogs from '../components/listBlogs.vue';
import singleBlog from '../components/singleBlog.vue';

export default [
    { path: '/', component: showBlogs},
    { path: '/add', component: addBlog},
    { path: '/list', component: listBlogs},
    //###############################################################
    //BT - Route param: Step 1: Add in your route with the :id
    //###############################################################
    { path: '/blog/:id', component: singleBlog}
]
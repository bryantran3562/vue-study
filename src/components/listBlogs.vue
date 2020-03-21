<template>

    <div id="show-blogs">
        <h1>List Blog Articles</h1>
        <!-- BT - Setup a search box -->
        <input type="text" v-model="search" placeholder="search blogs" />
        <!-- BT - Replace blogs with filterBlogs. This function will return only those are matched the user search. -->
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <!-- BT - The blog.title is the value and it will pass into our filter. See main.js -->
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
 
        </div>
    </div>
</template>

<script>

//BT - Mixin - Import your mixin file here. Then register it under the mixins property.

import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            // BT - Variable to received input from user
            search: ''
        }
    },
    methods: {
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    computed: {
        //#######################################################################################
        //BT - Mixins: The idea is that - we want to factor out this computed property to a
        //             a separate file called mixins. This is so that other component can use it.
        //Step 1: Create a folder /mixins/ and a file called: searchMixin.js
        //        This file will contained a common code. See searchMixin.js
        //#######################################################################################
        //BT - The logic here is that: This filtereeBlogs function will run and it takes
        //      the blogs array to run a filter method and this filter method will passed in
        //      each item in the blogs array and use a match method to check the title to see
        //      if it matches with what the user input. If so, it will return true and the filter
        //      function will stored it back to array. Otherwise, it will not. The final result
        //      is that you would have an array with all the item that matched with what the user
        //      is seraching for.
        // filteredBlogs: function(){
        //     return this.blogs.filter((blog) => {
        //         return blog.title.match(this.search);
        //     });
        // }
    },
    //##########################################################################################
    //BT - Filters - Directive - register - locally.
    //Notes: If you put them in the main.js - it will become globally then any component would
    //       be able to use it. See main.js
    //       Otherwise, register here only for locall use.
    //       VERY IMPORTANT: Filter needs to pass in function.
    //                       Filter is not changing any data. It only change the look for output.
    //                       For example, in the case of search, if your data is coming in with
    //                       lower case, and you used filter to display it as a Upper case. When
    //                       you search for Upper case, it will not find since the original data
    //                       is at lower cases.
    //###########################################################################################
    filters:{
        'to-uppercase':function(value){
            return value.toUpperCase();
        },
        'snippet': function(value){
            return value.slice(0,100) + "...";
        }
    },

    directives:{
        //###################################################################
        //BT - VERY IMPORTANT: This is not a function. It is an object.
        //###################################################################
        'rainbow':{

            bind(el, binding ,vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2,8);
                binding;
                vnode;
                console.log(typeof(el));
            }


        }
    },
    //BT - Mixin: Register your mixin file here

    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
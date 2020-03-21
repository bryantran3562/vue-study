<template>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <!-- BT - Setup a search box -->
        <input type="text" v-model="search" placeholder="search blogs" />
        <!-- BT - Replace blogs with filterBlogs. This function will return only those are matched the user search. -->
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <!-- BT - The blog.title is the value and it will pass into our filter. See main.js -->
            <h2>{{ blog.title | to-uppercase }}</h2>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
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
        //BT - The logic here is that: This filtereeBlogs function will run and it takes
        //      the blogs array to run a filter method and this filter method will passed in
        //      each item in the blogs array and use a match method to check the title to see
        //      if it matches with what the user input. If so, it will return true and the filter
        //      function will stored it back to array. Otherwise, it will not. The final result
        //      is that you would have an array with all the item that matched with what the user
        //      is seraching for.
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    }
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
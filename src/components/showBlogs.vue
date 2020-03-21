<template>
    <!-- BT - For this custom directive, you need to pass in a string. However, it can be
              an object..etc.
              ##############################################################################
              Notes: after the colon is called args where after a an equal sign is a value
              ##############################################################################
     -->
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" :key="blog.id" class="single-blog">
            <!-- BT - Custom directive - Step 2: -->
            <h2 v-rainbow>{{ blog.title }}</h2>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: []
        }
    },
    methods: {
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
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
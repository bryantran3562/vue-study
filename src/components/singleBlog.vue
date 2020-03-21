  
<template>
    <div id="single-blog">
        <!-- BT - Route param: Step 4 - Access it and output to the browser -->
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
        
    </div>
</template>

<script>

export default {
    data () {
        return {
            //BT - Routing Param: Step 2:
            //a. We need to know what id is on the url so that we can know which record the user wants to see.
            //b. Also, need an blog object to store our record.
            //c. this.$route.params.id <--Allow us to get the id value from the url in the browser.
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        //BT - Route Params Step 3:
        //All we have to do is do a get with id to get the record we want.
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            // console.log(data);
            //BT - Then store them in our blog object. Then we can now acces it in the template and display them.
            this.blog = data.body;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
// BT - We need to export it and then put in the common code.
//      Then we also need to import this file to each component that use it.
//      And register it under the mixins property. See showBlogs.vue

export default {
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search.toLowerCase());
                
            });
        }
    }
};
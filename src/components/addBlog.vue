<template>
<!-- BT - All of your new component consisted of 3 main part:
          a. <template></template> This is where your html part is at
          b. <script></script> This is where you can control the data from here to your template html
          c. <style></style> This is where you can do your style css
 -->
 <!-- BT - You can only have a single <div></div> in your template. All other must be nested inside this root <div></div> -->

  <div id="add-blog">

        <h2>Add a New Blog Post</h2>
        <!-- BT - Create some input to get user input -->
        <form>
            <label>Blog Title:</label>
            <!-- BT - Read input using v-mddel 
                      lazy: modifier that will display the user input in the preview area until we move to
                            a different fields in the form
            -->
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
        </form>
        <!-- BT - Create some preview to see what we have received the user input -->
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <!-- BT - You can make a new line by using a <p> tag -->
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
        </div>


  </div>
</template>

<script>
export default {

  data(){
    return {
      blog:{
        title: '',
        content: ''
      }
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>

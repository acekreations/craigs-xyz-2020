<template>
  <div id="app">
    <Masthead />
    <div class="content">
      <Card
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :featureImage="post.featureImage.url"
        :color="post.color"
        :publishDate="post.publishDate"
      />
    </div>
  </div>
</template>

<script>
import Masthead from "./components/Masthead.vue";
import Card from "./components/Card.vue";
const axios = require("axios");

export default {
  name: "app",
  data: function() {
    return {
      posts: null
    };
  },
  components: {
    Masthead,
    Card
  },
  mounted: function() {
    axios({
      url:
        "https://api-us-west-2.graphcms.com/v2/cka0sbwsg0crf01wb3it92do4/master",
      method: "post",
      headers: {
        "gcms-stage": "PUBLISHED"
      },
      data: {
        query: `
      {
        blogs(orderBy: publishedAt_ASC, first: 10) {
          id
          title
          description
          publishDate
          featureImage {
            url
          }
          body {
            html
          }
          color {
            hex
            rgba {
              r
              g
              b
              a
            }
          }
        }
      }
      `
      }
    }).then(result => {
      this.posts = result.data.data.blogs;
    });
  }
};
</script>

<style>
body {
  margin: 0px;
  background: #fff7f1;
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Abril Fatface", cursive;
  letter-spacing: 0.03em;
}

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}

p,
a,
ul,
li {
  font-family: "Open Sans", sans-serif;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1086px;
  margin: 0 auto;
}

@media only screen and (min-width: 700px) {
  .content {
    justify-content: flex-start;
  }
}
</style>

<template>
  <div id="home">
    <Masthead />
    <div class="content">
      <Card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
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
import Masthead from "./Masthead.vue";
import Card from "./Card.vue";
const axios = require("axios");

export default {
  name: "Home",
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

<style scoped></style>

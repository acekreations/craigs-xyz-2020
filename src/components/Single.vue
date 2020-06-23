<template>
  <div id="single">
    <Masthead />
    <div v-if="post" class="content">
      <div :style="bgImg" id="featureImg">
        <div class="date">
          <h3>{{ date.month }}/{{ date.day }} <br />{{ date.year }}</h3>
        </div>
        <h1>{{ post.title }}</h1>
      </div>
      <div id="postBody" :style="color" v-html="post.body.html">
        {{ post.body.html }}
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from "./Masthead.vue";
const axios = require("axios");

export default {
  name: "Single",
  data: function() {
    return {
      post: null
    };
  },
  computed: {
    bgImg: function() {
      return `background-image: url(" ${this.post.featureImage.url} "); box-shadow: 0px 4px 12px rgba(${this.post.color.rgba.r}, ${this.post.color.rgba.g}, ${this.post.color.rgba.b}, 0.6);`;
    },
    color: function() {
      return `background-color: ${this.post.color.hex}; box-shadow: 0px 4px 12px rgba(${this.post.color.rgba.r}, ${this.post.color.rgba.g}, ${this.post.color.rgba.b}, 0.6);`;
    },
    date: function() {
      return {
        day: this.post.publishDate.split("-")[2],
        month: this.post.publishDate.split("-")[1],
        year: this.post.publishDate.split("-")[0]
      };
    }
  },
  components: {
    Masthead
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
        blog(where: {id: "${this.$attrs.id}"}){
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
      this.post = result.data.data.blog;
    });
  }
};
</script>

<style scoped>
#featureImg {
  width: 100%;
  min-height: 230px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 4px 12px rgba(70, 54, 38, 0.3);
  background-position: center;
  background-size: cover;
  margin: 0px 16px;
  box-sizing: border-box;
  padding: 50px 80px 30px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

#featureImg h1 {
  color: #fff;
}

.date {
  position: absolute;
  text-align: right;
  top: 16px;
  right: 18px;
  color: #fff;
}

.date h3 {
  margin: 0px;
  text-shadow: 0px 0px 40px rgbba(0, 0, 0, 0.26);
}

#postBody {
  width: 100%;
  min-height: 300px;
  margin: 0px 16px 80px 16px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff7f1;
  box-shadow: 0px 4px 12px rgba(70, 54, 38, 0.2);
  padding: 30px 80px;
  z-index: 2;
  color: #fff;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1086px;
  margin: 0 auto;
  animation: fadeIn ease 0.5s;
}

@media only screen and (max-width: 700px) {
  #postBody {
    padding: 10px 30px;
  }

  #featureImg {
    padding: 50px 25px 20px 25px;
  }
}
</style>

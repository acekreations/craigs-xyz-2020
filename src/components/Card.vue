<template>
  <div class="card" :style="cardColor">
    <router-link :to="post.id">
      <div class="featureImage" :style="bgImg">
        <div class="date">
          <h3>{{ date.month }}/{{ date.day }} <br />{{ date.year }}</h3>
        </div>
      </div>

      <div class="cardBody">
        <h2>{{ title }}</h2>
        <p>{{ description }}..</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: String,
    title: String,
    description: String,
    featureImage: String,
    color: Object,
    publishDate: String
  },
  data: function() {
    return {
      bgImg: {
        "background-image": "url(" + this.featureImage + ")"
      },
      cardColor: {
        "background-color": this.color.hex,
        "box-shadow": `0px 4px 12px rgba(${this.color.rgba.r}, ${this.color.rgba.g}, ${this.color.rgba.b}, 0.6)`
      },
      date: {
        day: this.publishDate.split("-")[2],
        month: this.publishDate.split("-")[1],
        year: this.publishDate.split("-")[0]
      },
      post: {
        id: "/posts/" + this.id
      }
    };
  }
};
</script>

<style scoped>
h2,
p {
  margin-top: 0px;
  margin-bottom: 8px;
}
.card {
  max-width: 330px;
  border-radius: 10px;
  margin: 0px 16px 32px 16px;
  color: #fff;
  animation: fadeIn ease 0.5s;
}

a {
  color: #fff;
  text-decoration: none;
}

.featureImage {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 170px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.date {
  text-align: right;
  padding-top: 14px;
  padding-right: 14px;
}

.date h3 {
  margin: 0px;
  text-shadow: 0px 0px 40px rgbba(0, 0, 0, 0.26);
}

.cardBody {
  padding: 12px;
}
</style>

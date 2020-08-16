<template>
  <div id="container">
    <div id="header-color"></div>
    <header>
      <nuxt-link to="/" id="name">Ethan Printz</nuxt-link>
    </header>
    <main>
      <div id="post-header">
        <h1 id="post-header">{{ post.title }}</h1>
      </div>
      <div id="post-content" v-html="post.html" />
    </main>
  </div>
</template>

<script>
import { getSinglePost } from "../api/posts";

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  }
};
</script>

<style lang="scss">
#container {
  background-color: $secondary-background;
  color: $primary-text;
  width: 100vw;
  min-height: 100vh;
  font-family: $sans;
  #header-color {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 40vmin;
    background-color: $primary-background;
  }
  header {
    #name {
      position: absolute;
      z-index: 3;
      top: 3vmin;
      left: 10vw;
      font-size: 1.6rem;
      color: $secondary-text;
      font-weight: 700;
      text-decoration: none;
      transition: 0.1s;
      &:hover {
        color: $primary-text;
      }
    }
  }
  main {
    position: relative;
    z-index: 2;
    background-color: #e7e7e7;
    color: $primary-background;
    width: 80vw;
    margin: 8vmin 10vw 0 10vw;
    padding: 6vmin;
    border-radius: 0.5rem;
    #post-header {
      text-align: center;
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 4vh;
    }
    /* Normal Text */
    p {
      line-height: 1.4;
      margin: 0.8rem 0 2rem;
      width: 84%;
      font-size: 1.165rem;
    }
    h2,
    h3 {
      font-size: 1.4rem;
      margin-top: 1rem;
    }
    /* Images */
    figure.kg-image-card {
      img {
        width: 64%;
        margin-left: 18%;
        border-radius: 0.6em;
      }
    }
    /* Image Captions */
    figcaption {
      text-align: center;
      color: #797979;
      font-weight: 400;
      font-style: italic;
    }
    /* Image Galleries */
    .kg-gallery-container {
      display: flex;
      flex-direction: column;
      .kg-gallery-row {
        display: flex;
        flex-direction: row;
        width: calc(80vw - (2 * 6vmin));
        .kg-gallery-image {
          flex: 1;
          img {
            object-fit: cover;
            width: 94%;
            margin: 3%;
            height: 20vw;
            border-radius: 0.5em;
          }
        }
      }
    }
  }
}
</style>

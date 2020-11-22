<template>
  <div id="container">
    <div
      id="header-color"
      v-bind:style="{
        'background-image':
          'url( http://64.227.21.239' + post.heroImage.url + ')'
      }"
    ></div>
    <header>
      <nuxt-link to="/" id="name">Ethan Printz</nuxt-link>
    </header>
    <main>
      <div id="post-header">
        <h1 id="post-header">{{ post.title }}</h1>
      </div>
      <div id="post-content" v-html="$md.render(post.content)" />
    </main>
  </div>
</template>

<script>
import { getPostFromSlug } from "../../../api/posts";

export default {
  async asyncData({ params }) {
    // Get post info as object
    const post = await getPostFromSlug("experiment", params.slug);
    // Return information to dom
    console.log(post);
    return { post };
  }
};
</script>

<style scoped lang="scss">
#container {
  background-color: $primary-background;
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
    height: 50vmin;
    background-color: $secondary-background;
    background-size: cover;
    background-position: center center;
  }
  header {
    #name {
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;
      width: 100vw;
      height: 5vh;
      padding: 0 4vmin;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.6rem;
      color: $secondary-background;
      font-weight: 700;
      text-decoration: none;
      transition: 0.1s;
      font-family: $sans;
      &:hover {
        color: $primary-background;
      }
    }
  }
  main {
    position: relative;
    z-index: 2;
    color: $primary-text;
    width: 80vw;
    margin: -14vmin 10vw 0 10vw;
    padding: 6vmin;
    border-radius: 0.5rem;
    #post-header {
      text-align: center;
      font-weight: 700;
      font-size: 2.3rem;
      font-family: $sans;
    }
  }
}
</style>

<style lang="scss">
#post-content {
  width: 100vw;
  padding: 4vh 32vmin;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-family: $sans;
  h2 {
    font-weight: 700;
    padding: 1.5rem 0 0 0;
    font-family: $sans;
  }
  p{
    margin: 1.5rem 0;
  }
  img {
    width: 80%;
    margin: 0.7em 10%;
    border-radius: 0.5rem;
  }
  pre{
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #2c2c2c;
    color:rgb(235, 235, 235);
    margin: 2rem 0;
    text-overflow: scroll;
  }
  code{
    font-family: $mono;
  }
}
</style>

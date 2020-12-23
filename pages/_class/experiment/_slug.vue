<template>
  <div id="container">
    <div
      id="header-color"
      v-bind:style="{
        'background-image':
        `linear-gradient(to bottom, transparent, #e6e6e6),
          url( https://ethanprintz.dev${post.heroImage.url})`
      }"
    ></div>
    <header id="experiment-header">
      <nuxt-link to="/" id="name">Ethan Printz</nuxt-link>
    </header>
    <main id="experiment-main">
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
    return { post };
  },
  head(){
    return {
      title: `Ethan Printz | ${this.post.title}`
    }
  }
};
</script>

<style scoped lang="scss">
#container {
  background-color: #e6e6e6;
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
  #experiment-header {
    width: 100vw;
    height: 43vmin;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding: 10vmin;
    position: relative;
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
  #experiment-main {
    position: relative;
    z-index: 2;
    color: $primary-text;
    border-radius: 0.5rem;
    background-color: $secondary-background;
    min-height: 60vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Mobile */
    @media only screen and (max-aspect-ratio: 4/5){  
      width: 92vw;
      margin: -10vmin 2vw 0 2vw;
      padding: 2vmin;
      #post-header {
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        font-family: $sans;
      }
    }
    /* Tablet + Desktop */
    @media only screen and (min-aspect-ratio: 4/5){
      width: 80vw;
      margin: -14vmin 10vw 0 10vw;
      padding: 6vmin;
      #post-header {
        text-align: center;
        font-weight: 700;
        font-size: 2.3rem;
        font-family: $sans;
      }
    }
  }
}
</style>

<style lang="scss">
#experimentMain {
  #post-content {
    width: 100vw;
    line-height: 1.8rem;
    font-family: $sans;
    /* Mobile */
    @media only screen and (max-aspect-ratio: 4/5){  
      padding: 3vh 10vmin;
      font-size: 1.1rem;
      h2{
        text-align: center;
      }
    }
    /* Mid */
    @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
      padding: 2vh 20vmin;
      font-size: 1.15rem;
    }
    /* Desktop */
    @media only screen and (min-aspect-ratio: 3/2){
      padding: 2vh 32vmin;
      font-size: 1.2rem;
    }
    h2 {
      font-weight: 700;
      padding: 1.5rem 0 0 0;
      font-family: $sans;
    }
    p{
      @media only screen and (max-aspect-ratio: 4/5){  
      margin: 1rem 0;
      }
      /* Tablet + Desktop */
      @media only screen and (min-aspect-ratio: 4/5){
      margin: 1.5rem 0;
      }
    }
    img {
      border-radius: 0.5rem;
      @media only screen and (max-aspect-ratio: 4/5){  
        margin: 1em 0;
        width: 100%;
      }
      /* Tablet + Desktop */
      @media only screen and (min-aspect-ratio: 4/5){
        margin: 0.7em 9%;
        width: 82%;
      }
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
    .embed-responsive{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>

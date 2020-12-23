<template>
  <div id="container">
    <div
      id="header-color"
      v-bind:style="{
        'background-image':
          `linear-gradient(to bottom, rgba(0,0,0,0.7), #e6e6e6),
          url( https://ethanprintz.dev${post.heroImage.url})`
      }"
    ></div>
    <header id="project-header">
      <nuxt-link to="/" id="name">Ethan Printz</nuxt-link>
    </header>
    <main id="project-main">
      <div id="post-header">
        <div id="post-title">{{post.title}}</div>
        <div id="post-summary">
            {{post.overview}}
        </div>
      </div>
      <div id="post-overview">
        <div id="post-overview-title">
          Overview
        </div>
        <div class="overviewShort">
            <div class="overviewShortLabel">Course</div>
            <div class="overviewShortText">{{post.classes[0].name}}</div>
        </div>
        <div class="overviewShort">
          <div class="overviewShortLabel">Term</div>
          <div class="overviewShortText">{{terms[post.classes[0].term].name}}</div>
        </div>
        <div class="overviewShort" v-if="post.github">
          <div class="overviewShortLabel">Github</div>
          <div class="overviewShortText">
            <a class="link" :href="post.github" target="_blank">
              <span :data-content="post.github">
                {{post.github}}
              </span>
            </a>
          </div>
        </div>
        <div class="overviewShort" v-if="post.glitch">
          <div class="overviewShortLabel">Glitch</div>
          <div class="overviewShortText">
            <a class="link" :href="post.glitch" target="_blank">
              <span :data-content="post.glitch">
                {{post.glitch}}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div id="post-content" v-html="$md.render(post.content)" />
    </main>
  </div>
</template>

<script>
import { getPostFromSlug, getAllTerms } from "../../../api/posts";

export default {
  async asyncData({ params }) {
    // Get post info as object
    const post = await getPostFromSlug("project", params.slug);
    const terms = await getAllTerms();
    // Return information to dom
    return { post, terms };
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
    height: 60vh;
    background-color: $secondary-background;
    background-size: cover;
    background-position: center center;
  }
  #project-header {
    width: 100vw;
    height: 43vmin;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding: 10vmin;
    position: relative;
    /* Mobile */
    @media only screen and (max-aspect-ratio: 4/5){  
      height: 74vmin;
    }
    /* Mid */
    @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
      height: 58vmin;
    }
    #name {
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;
      height: 5vh;
      padding: 0 4vmin;
      /* background-color: rgba(0, 0, 0, 0.3); */
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
  #project-main {
    position: relative;
    z-index: 2;
    color: $primary-text;
    border-radius: 0.5rem;
    background-color: #f3f3f3;
    min-height: 60vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Mobile */
    @media only screen and (max-aspect-ratio: 4/5){  
      width: 96vw;
      margin: -10vmin 2vw 0 2vw;
      padding: 2vmin;
    }
    /* Tablet + Desktop */
    @media only screen and (min-aspect-ratio: 4/5){
      width: 80vw;
      margin: -14vmin 10vw 0 10vw;
      padding: 6vmin;
    }
    #post-header{
      position: absolute;
      color: white;
      left: 0;
      /* Desktop */
      @media only screen and (min-aspect-ratio: 3/2){
        top: -10rem;
        padding-left: 10vmin;
      }
      /* Mid */
      @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
        top: -13rem;
        padding-left: 5vmin;
      }
      /* Mobile */
      @media only screen and (max-aspect-ratio: 4/5){  
        top: -14rem;
        padding-left: 2vmin;
        text-align: center;
      }
      #post-title{
        font-size: 3rem;
        font-weight: bold;
      }
      #post-summary{
        /* Desktop */
        @media only screen and (min-aspect-ratio: 3/2){
          font-size: 1.32rem;
          max-width: 80%;
        }
        /* Mid */
        @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
          font-size: 1.26rem;
          max-width: 84%;
        }
        /* Mobile */
        @media only screen and (max-aspect-ratio: 4/5){  
          max-width: 95%;
          font-size: 1.18rem;
        }
      }
    }
    #post-overview{
      text-align: left;
      width: 100vw;
      margin-bottom: -2.2rem;
      position: relative;
      /* Mobile */
      @media only screen and (max-aspect-ratio: 4/5){  
        padding: 0 8vmin;
      }
      /* Mid */
      @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
        padding: 0 20vmin;
      }
      /* Desktop */
      @media only screen and (min-aspect-ratio: 3/2){
        padding: 0 38vmin;
      }
      #post-overview-title{
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .overviewShort{
        margin-top: 0.2rem;
        font-size: 1.15rem;
        display: block;
        .overviewShortLabel{
          display: inline-block;
          width: 5rem;
          color: #636366;
          font-weight: bold;
        }
        .overviewShortText{
          display: inline-block;
          color: #454547;
        }
        /* Adapted from https://codepen.io/kathykato/pen/zYYRGRQ */
        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
          font-style: italic;
        }
        .link {
          position: relative;
          transition: clip-path 300ms ease;
          &:hover span::before, &:focus span::before {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          span {
            position: relative;
            display: inline-block;
            color: #6161b9;
            &::before {
              position: absolute;
              content: attr(data-content);
              color: #5858a1;
              text-decoration: underline;
              text-decoration-color: #5858a1;
              clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
              transition: clip-path 300ms ease;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
#post-content {
  width: 100vw;
  line-height: 1.7rem;
  font-family: $sans;
  font-weight: 400;
  /* Mobile */
  @media only screen and (max-aspect-ratio: 4/5){  
    padding: 3vh 8vmin;
    font-size: 1.22rem;
    h1,h2{
      text-align: center;
    }
  }
  /* Mid */
  @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
    padding: 2vh 20vmin;
    font-size: 1.17rem;
  }
  /* Desktop */
  @media only screen and (min-aspect-ratio: 3/2){
    padding: 2vh 38vmin;
    font-size: 1.12rem;
  }
  h1{
    font-size: 1.25rem;
    color: #666668;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 4rem;
    border-top: 1px solid #dadada;
    padding-top: 3rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0.6rem 0 0 0;
    font-family: $sans;
  }
  p{
    margin: 0.5rem 0 1.5rem 0;
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
    overflow-x: scroll;
    @media only screen and (max-aspect-ratio: 4/5){  
      font-size: 0.84rem;
    }
    /* Tablet + Desktop */
    @media only screen and (min-aspect-ratio: 4/5){
      font-size: 1rem;
    }
  }
  code{
    font-family: $mono;
  }
  .toolbar{
    .toolbar-item button{
      background-color: transparent;
      font-family: $sans;
      color: #aaaaaa;
      box-shadow: 0 0 0 0 transparent;
      cursor: pointer;
    }
    .toolbar-item button:hover{
      color: #cecece;
    }
    .toolbar-item span{
      background-color: transparent;
      box-shadow: 0 0 0 0 transparent;
      font-family: $sans;
      color: #aaaaaa;
      font-weight: bold;
    }
  }
  .embed-responsive{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
}
</style>

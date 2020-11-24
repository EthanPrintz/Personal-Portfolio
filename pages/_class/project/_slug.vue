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
        <div id="post-header-left">
          <div id="post-title">{{ post.title }}</div>
          <div id="post-overview">{{post.overview}}</div>
        </div>
        <div id="post-header-right">
          <div id="post-class">
            <div class="label">CLASS</div>
            <div id="class">{{post.classes[0].name}}</div>
          </div>
          <div id="post-term">
            <div class="label">TERM</div>
            <div id="term">{{terms.find(term => term.id === post.classes[0].term).name}}</div>
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
      font-family: $sans;
      padding: 0 6vmin;
      border-bottom: 1px solid #dadada;
      padding-bottom: 1rem;
      #post-header-left{
        width: 70%;
        float: left;

        #post-title{
          font-weight: 700;
          font-size: 2.3rem;
        }
        #post-overview{
          padding: 0.5rem 1rem 1.5rem 0;
          font-size: 1.1rem;
          font-style: italic;;
        }
      }
      #post-header-right{
        width: 30%;
        float: right;
        padding-left: 2rem;
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-top: 1vmin;

        #post-class, #post-term{
          margin: 0.8vmin 0;
        }
        .label{
          font-size: 0.8rem;
          color: $secondary-text;
        }
        #class, #term{
          font-weight: bold;
        }
      }
    }
  }
}
</style>

<style lang="scss">
#post-content {
  width: 100vw;
  padding: 2vh 32vmin;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-family: $sans;
  font-weight: 400;
  h2 {
    font-weight: 700;
    padding: 1.5rem 0 0 0;
    font-family: $sans;
  }
  p{
    margin: 1.5rem 0;
  }
  img {
    width: 82%;
    margin: 0.7em 9%;
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
    font-size: 1.1rem;
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

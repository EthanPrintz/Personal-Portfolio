<template>
  <div id="container">
    <!-- Header -->
    <header id="main-header">
      <div id="bio-container">
        <h1 id="header-name">Ethan Printz</h1>
        <h3 id="header-major">Junior at NYU IMA/ITP</h3>
        <h3 id="header-role">UI/UX and Computer Science</h3>
      </div>
      <img :src="require(`@/assets/img/nyc-skyline.png`)" alt id="skyline" />
      <nuxt-link to="/contact">
        <div id="contact">
          About + Contact
        </div>
      </nuxt-link>
    </header>
    <!-- Content -->
    <main id="indexMain">
      <!-- <div class="title" id="projects-title">Projects</div> -->
      <div id="project-container" class="content-container">
        <nuxt-link
          :to="{ path: `/${post.classes[0].slug}/project/${post.slug}` }"
          v-for="(post, index) in projects"
          :key="index"
        >
          <div class="project-card content-card" v-if="post.visible == true">
            <img
              :src="$config.STRAPI_URL + post.cardImage.url"
              :alt="`Illustration of ${post.title}`"
              class="project-image"
            />
            <div class="project-title">{{ post.title }}</div>
            <div class="project-description">{{ post.classes.term }}</div>
            <div class="project-term">{{ terms.find(term => term.id === post.classes[0].term).name.toUpperCase()}}</div>
          </div>
        </nuxt-link>
      </div>
      <div class="title" id="experiments-title">Experiments</div>
      <div id="experiment-container" class="content-container">
        <nuxt-link
          :to="{ path: `/${post.classes[0].slug}/experiment/${post.slug}` }"
          v-for="(post, index) in experiments"
          :key="index"
        >
          <div
            class="experiment-card content-card"
            :style="`background-color: `"
             v-if="post.visible == true"
          >
            <div class="experiment-emoji">{{ post.emoji }}</div>
            <div class="experiment-title">{{ post.title }}</div>
          </div>
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
import { getAllPostsOfType, getAllClasses, getAllTerms } from "../api/posts";
export default {
  asyncComputed: {
    
  },
  async asyncData() {
    const terms = await getAllTerms();
    const projects = await getAllPostsOfType("project");
    projects.forEach(post => post.date = new Date(post.date));
    projects.sort((a, b) => b.date - a.date);
    const experiments = await getAllPostsOfType("experiment");
    experiments.forEach(post => post.date = new Date(post.date));
    experiments.sort((a, b) => b.date - a.date);
    const classes = await getAllClasses();
    return { projects, experiments, classes, terms };
  },
  head(){
    return {
      title: `Ethan Printz | Portfolio`
    }
  }
};
</script>

<style lang="scss">
#container {
  background-color: #e0e0e0;
  color: $primary-text;
  width: 100vw;
  min-height: 100vh;
  font-family: $sans;
}

/* Header Styling */
#main-header {
  width: 100vw;
  height: 40vmin;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 10vmin;
  position: relative;
  /* Biographical Info - Name, Major, Role */
  #bio-container {
    position: relative;
    z-index: 2;
    #header-name {
      font-weight: 700;
      font-family: $sans;
    }
    #header-major,
    #header-role {
      font-weight: 700;
      color: $secondary-text;
      font-size: 1.2rem;
      font-family: $sans;
    }
  }
  #skyline {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    width: 130vmin;
  }
  #contact{
    position: absolute;
    z-index: 1;
    top: 1.2rem;
    right: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: grey!important;
  }
  #contact:hover{
    border-bottom: 2px solid grey;
  }
}

/* Content Styling */
#indexMain {
  background-color: $secondary-background;
  min-height: 60vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    align-self: flex-start;
    margin: 2.8vmin 0 0 5vmax;
    font-size: 1.75rem;
    font-weight: 700;
    font-family: $sans;
    color: $primary-text;
  }
  .content-container {
    width: 100vw;
    margin: 2vmin;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    a {
      text-decoration: none;
    }
    &#project-container {
      /* Mobile */
      @media only screen and (max-aspect-ratio: 4/5){  
        padding-top: 4vh;
      }
      .content-card {
        width: 30vh;
        margin: 0 3vmin 3vmin;
        padding: 1vh 0;
        @media only screen and (max-aspect-ratio: 4/5){  
          width: 70vw;
        }
        /* Mobile */
        @media only screen and (max-aspect-ratio: 0.67){  
          /* width: 30vh;
          margin: 0 3vmin 3vmin;
          padding: 1vh 0; */
        }
        /* Tablet + Desktop */
        @media only screen and (min-aspect-ratio: 0.67){
        }
        .project-image {
          width: 100%;
          border-radius: 0.4rem;
        }
        .project-title {
          color: $primary-text;
          font-weight: 700;
          margin-top: 1vh;
          font-size: 1.3rem;
          line-height: 1.5rem;
        }
        .project-description {
          color: $secondary-text;
          font-family: $sans;
          font-weight: 700;
          margin-top: 0.5vmin;
        }
        .project-term {
          color: $tertiary-text;
          font-family: $sans;
          font-weight: 500;
          font-size: 0.9rem;
          margin-top: 0.5vmin;
        }
      }
    }
    &#experiment-container {
      justify-content: flex-start;
      padding: 0 5vmax;
      .content-card {
        font-weight: 700;
        margin: 0 0.5rem 3.2rem;
        .experiment-emoji {
          font-size: 1.8rem;
          float: left;
          background-color: white;
          border-top-left-radius: 0.6rem;
          border-bottom-left-radius: 0.6rem;
          padding: 0 0.6rem;
        }
        .experiment-title {
          color: $primary-text;
          float: left;
          font-size: 1.2rem;
          padding: 0.44rem 0.5rem 0.44rem 0;
          background-color: white;
          border-top-right-radius: 0.6rem;
          border-bottom-right-radius: 0.6rem;
        }
      }
    }
  }
}
</style>

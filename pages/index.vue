<template>
  <div id="container">
    <!-- Header -->
    <header>
      <div id="bio-container">
        <h1 id="header-name">Ethan Printz</h1>
        <h3 id="header-major">Junior at NYU IMA/ITP</h3>
        <h3 id="header-role">Interaction Design and Computer Science</h3>
      </div>
      <img :src="require(`@/assets/img/nyc-skyline.png`)" alt id="skyline" />
    </header>
    <!-- Content -->
    <main>
      <div class="title" id="projects-title">Projects</div>
      <div id="project-container" class="content-container">
        <nuxt-link :to="{ path: post.slug }" v-for="(post, index) in projects" :key="index">
          <div class="project-card content-card">
            <img
              :src="post.feature_image"
              :alt="`Illustration of ${post.title}`"
              class="project-image"
            />
            <div class="project-title">{{ post.title }}</div>
            <div class="project-description">{{ post.excerpt }}</div>
          </div>
        </nuxt-link>
      </div>
      <div class="title" id="experiments-title">Experiments</div>
      <div id="experiment-container" class="content-container">
        <div class="experiment-card content-card" v-for="(post, index) in experiments" :key="index">
          <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
        </div>
      </div>
      <div class="title" id="post-title">Posts</div>
      <div id="post-container" class="content-container">
        <div class="experiment-card content-card" v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getSomePostsWithTag } from "../api/posts";

export default {
  async asyncData() {
    const projects = await getSomePostsWithTag("projects", 5);
    const experiments = await getSomePostsWithTag("experiments", 8);
    const posts = await getSomePostsWithTag("posts", 8);
    return { projects, experiments, posts };
  }
};
</script>

<style lang="scss">
#container {
  background-color: $primary-background;
  color: $primary-text;
  width: 100vw;
  min-height: 100vh;
  font-family: $sans;
}

/* Header Styling */
header {
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
    }
    #header-major,
    #header-role {
      font-weight: 500;
      color: $secondary-text;
      font-size: 1.2rem;
    }
  }
  #skyline {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
    width: 130vmin;
  }
}

/* Content Styling */
main {
  background-color: $secondary-background;
  min-height: 60vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    align-self: flex-start;
    margin: 2.8vmin 0 0 5vmax;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .content-container {
    width: 100vw;
    margin: 2vmin;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
      text-decoration: none;
    }
    &#project-container {
      min-height: 34vh;
      .content-card {
        height: 34vh;
        width: 34vh;
        margin: 0 4vmin;
        .project-image {
          width: 100%;
          border-radius: 0.4rem;
        }
        .project-title {
          color: $primary-text;
          font-weight: 500;
          margin-top: 1vh;
          font-size: 1.3rem;
        }
        .project-description {
          color: $secondary-text;
          font-family: $sans;
          font-weight: 400;
          margin-top: 0.5vmin;
        }
      }
    }
  }
}
</style>

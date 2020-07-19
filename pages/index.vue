<template>
  <div class="container">
    <!-- Header -->
    <header>
      <div id="bio-container">
        <h1 id="header-name">Ethan Printz</h1>
        <h3 id="header-major">Junior at NYU IMA/ITP</h3>
        <h3 id="header-role">Interaction Design and Computer Science</h3>
      </div>
    </header>
    <!-- Content -->
    <main>
      <div id="project-container" class="content-container">
        <ul>
          <li v-for="(post, index) in projects" :key="index">
            <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div id="experiment-container" class="content-container"></div>
      <div id="post-container" class="content-container"></div>
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
    return { projects };
  }
};
</script>

<style lang="scss">
.container {
  background-color: $primary-background;
  color: $primary-text;
  width: 100vw;
  min-height: 100vh;
  font-family: $sans-font;
}

/* Header Styling */
header {
  width: 100vw;
  height: 40vmin;
  /* Biographical Info - Name, Major, Role */
  #bio-container {
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
}

/* Content Styling */
</style>

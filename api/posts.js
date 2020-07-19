import GhostConentAPI from "@tryghost/content-api";

const api = new GhostConentAPI({
  url: process.env.CONTENT_URL,
  key: process.env.CONTENT_KEY,
  version: "v3"
});

// Get all posts
export async function getAllPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

// Get some posts
export async function getSomePosts(numPosts) {
  return await api.posts
    .browse({
      limit: numPosts
    })
    .catch(err => {
      console.error(err);
    });
}

// Get all posts with specified tag
export async function getAllPostsWithTag(tagName) {
  return await api.posts
    .browse({
      filter: `tag:${tagName}`,
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

// Get some posts with specified tag
export async function getSomePostsWithTag(tagName, numPosts) {
  return await api.posts
    .browse({
      filter: `tag:${tagName}`,
      limit: numPosts
    })
    .catch(err => {
      console.error(err);
    });
}

// Get all information from a single post
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}

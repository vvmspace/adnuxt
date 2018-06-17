<template>
  <section id="posts">
  <PostPreview
    v-for="post in l"
    :key="post.id"
    :id="post.slug"
    :title="post.title"
    :thumbnailImage="post.thumbnailUrl"
    :excerpt="post.previewText"
  ></PostPreview>
  </section>
</template>

<script>

  import PostPreview from "@/components/PostPreview/PostPreview";
  const Post = require('@/../app/Models/Post');

  export default {
    components: {PostPreview},
    data() {
      return {
        posts: [
          {
            title: "A New Beginning",
            previewText: "A New Beginning of previewText",
            thumbnailUrl: "/biggl.jpg",
            id: 'a-new-beginning'
          },
          {
            title: "A Second Beginning",
            previewText: "A Second Beginning of previewText",
            thumbnailUrl: "/biggl.jpg",
            id: 'a-second-beginning'
          },
        ]
      }
    },
    async asyncData() {
      let psts = await Post.all();
      return {
        l: JSON.parse(JSON.stringify(psts))
      }
    }
  }
</script>

<style>
  #posts{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 35rem) {
    #posts{
      flex-direction: row;
    }
  }
</style>

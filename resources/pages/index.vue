<template>
  <section id="posts">
  <PostPreview
    v-for="post in posts"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :thumbnailImage="post.thumbnailUrl"
    :excerpt="post.previewText"
  ></PostPreview>
  </section>
</template>

<script>

  import PostPreview from "@/components/PostPreview/PostPreview";

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

<template>
  <div>
    <h1>글쓰기</h1>
    <form @submit.prevent="POST_create">
        <select v-model="tag_pk" >
          <option :value="1">자유주제</option>
          <option :value="2">영화후기</option>
          <option :value="3">모임모집</option>
          <option :value="4">모임후기</option>
        </select>
        <div>
          <label for="new-article-title">제목: </label>
          <input type="text" id="new-article-title" placeholder="제목" v-model="title">
        </div>
        <div>
          <label for="new-article-conent">내용: </label>
          <input type="text" id="new-article-conent" placeholder="내용" v-model="content">
          <input type="file" accept="image/*" @change="fileChange" />
        </div>
        <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateArticleView",
  data(){
    return {
      title: '',
      content: '',
      tag_pk: 1,
      profile_image: null,
    }
  },
  methods: {
    fileChange: function(e) {
      const file = e.target.files;
    let validation = true;
    let message = '';

    if (file.length > 1) {
        validation= false;
        message = `파일은 한개만 등록 가능합니다.`
    }

    if (file[0].size > 1024 * 1024 * 2) {
        message = `${message}, 파일은 용량은 2MB 이하만 가능합니다.`;
        validation = false;
    }

    if (file[0].type.indexOf('image') < 0) {
        message = `${message}, 이미지 파일만 업로드 가능합니다.`;
        validation = false;
    }

    if (validation) {
        this.profile_image = file
    }else {
        this.profile_image = '';
        alert(message);
    }
    console.log(this.profile_image)
    },
    async POST_create(){
      // {title, content, tag_pk, by, key}
      // await this.$store.dispatch("POST_create", {title: "자유 영화", content: "내용", tag_pk: 1, by:"id", key:502356})
      const {title, content, tag_pk, profile_image} = this
      const {by, key} = this.$route.params
      const {id} = await this.$store.dispatch("POST_create", {title, content, tag_pk, by, key})
      const res = await this.$store.dispatch("POST_image", {profile_image})
      console.log(res)
      this.$router.push({ name: 'articleDetail', params: {articlePk:id} })
    }
  }

}
</script>

<style>

</style>
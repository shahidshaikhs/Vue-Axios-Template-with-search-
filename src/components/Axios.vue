<template>
  <div>
    <nav class="container mx-auto flex items-center justify-between flex-wrap bg-green-500 p-6 shadow">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Axios</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
          >Docs</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
          >Examples</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white"
          >Blog</a>
        </div>
      </div>
    </nav>
    <div class="container mx-auto pt-2 relative mx-auto text-gray-600 text-center mt-6 ">
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
        type="text"
        name="text"
        placeholder="Search posts.."
        v-model="searchTerm"
      />
    </div>
    <main>
      <div class="container mx-auto grid grid-cols-3 gap-4 mt-8">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
          <div class="px-6 py-6">
            <div class="font-bold text-xl mb-2 text-gray-700 capitalize">{{post.title | snippet}}</div>
            <p class="text-gray-700 text-base text-gray-500 capitalize">{{post.body}}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AxiosTemplate",
  data() {
    return {
      posts: [],
      searchTerm: ""
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.posts = response.data;
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

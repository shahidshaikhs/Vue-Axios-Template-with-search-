<template>
  <div id="app" class="bg-gray-100">
    <AxiosTemp />
  </div>
</template>

<script>
import AxiosTemp from "./components/Axios.vue";

export default {
  name: "App",
  components: {
    AxiosTemp
  }
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>

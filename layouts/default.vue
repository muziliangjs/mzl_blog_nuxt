<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    MyHeader: Header,
    MyFooter: Footer
  }
};
</script>

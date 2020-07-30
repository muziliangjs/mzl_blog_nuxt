<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
    <scroll-top />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ScrollTop from "~/components/ScrollTop.vue";

export default {
  components: {
    MyHeader: Header,
    MyFooter: Footer,
    ScrollTop
  }
};
</script>

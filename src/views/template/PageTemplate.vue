<template>
  <div>
    <!-- Page Header -->
    <slot name="header"></slot>

    <!-- Main Content -->
    <slot name="main"></slot>

    <hr />

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<style lang="css" scoped></style>

<script>
import Footer from "./Footer";

export default {
  name: "PageTemplate",
  components: {
    Footer
  }
};
</script>

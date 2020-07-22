<template>
  <div>
    <h5>{{ msg }}</h5>
    <b-table
      :busy="isBusyGet"
      :current-page="currentPage"
      :items="BOOKS"
      :per-page="perPage"
      hover
      id="listbook"
      show-empty
      sort-icon-left
      striped
    >
    </b-table>
    <b-pagination
      :per-page="perPage"
      :total-rows="BOOKS.length"
      align="center"
      aria-controls="listbook"
      v-model="currentPage"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListBook",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["BOOKS", "ERRORS"])
  },
  data() {
    return {
      error: "",
      currentPage: 1,
      perPage: 5,
      sortDesc: false,
      isBusyGet: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

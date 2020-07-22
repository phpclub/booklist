<template>
  <div class="home">
    <PageTemplate>
      <template #header>
        <PageHeader bg-image="img/home-bg.jpg">
          <template #header>
            Booklist
          </template>
          <template #subheader>
            My library
          </template>
        </PageHeader>
      </template>

      <template #main>
        <ListBook msg="Collection" />
      </template>
    </PageTemplate>
  </div>
</template>

<script>
// @ is an alias to /src
import ListBook from "@/components/ListBook.vue";
import PageTemplate from "@/views/template/PageTemplate";
import PageHeader from "@/views/template/PageHeader";

export default {
  name: "Home",
  books: [],
  components: {
    PageTemplate,
    PageHeader,
    ListBook
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store
        .dispatch("init", {})
        .then(() => {
          // console.log(this.books);
          //this.$router.push({ name: 'Home' }).catch(err => {console.log(err)})
        })
        .catch(err => {
          this.error = "Нет связи с API";
          console.log(err);
        });
    }
  }
};
</script>

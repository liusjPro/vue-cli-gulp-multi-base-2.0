<template>
  <div id="demo">
    <div class="content">
      <p>Tada!!!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  components: {},
  methods: {},
};
</script>

<style>
#demo {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.content {
  justify-content: center;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

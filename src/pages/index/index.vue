<template>
  <div id="app">
    <div class="content">
      <HelloWorld msg="Hello World" />
      <button @click="openDetail()">Open Detail</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue"

export default {
  name: "app",
  components: {
    HelloWorld,
  },
  methods: {
    openDetail() {
      window.location.href = "detail.html?key=test_value"
    }
  },
};
</script>

<style>
body {
  height: 100vh;
  overflow: hidden;
}
#app {
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
p {
  padding-bottom: 20px;
}
</style>

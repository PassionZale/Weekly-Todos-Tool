<template>
  <c-head>
  </c-head>
  
  <div class="mdui-container mdui-m-t-3">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import cHead from './components/Head.vue'
export default {
  components: {
    cHead
  },
  replace: false
}
</script>
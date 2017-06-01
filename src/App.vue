<template>
  <c-head>
  </c-head>
  
  <div class="mdui-container mdui-m-t-3">
    <!--<div class="mdui-chip">
      <span class="mdui-chip-icon mdui-color-blue">
        <i class="mdui-icon material-icons">&#xe87c;</i>
      </span>
      <span class="mdui-chip-title">Example Chip</span>
    </div>-->
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
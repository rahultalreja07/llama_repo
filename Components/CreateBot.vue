<template>
  <div>
    <h1 class="page-title">{{ toolName.replace(/-/g, ' ') }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    toolName: String
  },
  components: {
  },

  methods: {
  }
}
</script>

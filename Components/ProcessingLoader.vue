<template>
  <div v-if="loaderVisible" class="loader-overlay">
    <span class="loader"></span>
  </div>
</template>
  
<script>
export default {
  props: {
    loaderVisible: Boolean
  }
}
</script>

<style>
.loader-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(128, 128, 128, 0.5); /* gray background with opacity */
    z-index: 1000; /* Ensure this is higher than the popup's z-index */
}

.loader {
    animation: spin 1s linear infinite;
    height: 40px;
    width: 40px;
    border-top: 4px solid transparent;
    border-right: 4px solid white;
    border-bottom: 4px solid white;
    border-left: 4px solid white;
    border-radius: 50%;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
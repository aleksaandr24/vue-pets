<template>
  <Transition name="base-loader-fade" mode="out-in">
    <div class="base-loader">
      <div class="base-loader__wrapper">
        <div class="base-loader__pet"></div>
        <div class="base-loader__pet"></div>
        <div class="base-loader__pet"></div>
        <div class="base-loader__pet"></div>
        <div class="base-loader__pet"></div>
        <div class="base-loader__pet"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'BaseLoader'
}
</script>
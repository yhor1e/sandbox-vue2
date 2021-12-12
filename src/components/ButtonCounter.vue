<template>
  <div>
    <div>
      <button v-on:click="increment">
        increment data.count.count (reactive) : {{ count.count }} times
      </button>
    </div>
    <div>
      <button v-on:click="incrementg">
        increment window.count.count (non reactive) : {{ getWindowCount }} times
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonCounter',
  mounted() {
    this.mountedCount = { count: 0 };
  },
  computed: {
    getWindowCount() {
      return window.count.count;
    },
    getMountedCount() {
      return this.mounted.count;
    },
  },
  optionCount: { count: 0 },
  data() {
    return {
      count: { count: 0 },
    };
  },
  methods: {
    increment() {
      this.count.count++;
      this.mountedCount.count++;
      //      this.$option.count++;
      window.count.count++;
      this.getState();
    },
    incrementg() {
      this.count.count++;
      this.mountedCount.count++;
      //      this.$option.count++;
      window.count.count++;
      this.getState();
    },
    getState() {
      console.log('------------------------------------------');
      console.log('this.count', this.count);
      console.log('this.mountedCount', this.mountedCount);
      //      console.log('this.$option.optionCount', this.$option.count);
      console.log('window.count', window.count);
    },
  },
};
</script>

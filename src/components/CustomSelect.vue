<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                required: true,
            },
            default: {
                type: String,
                required: false,
                default: null,
            },
            tabindex: {
                type: Number,
                required: false,
                default: 0,
            },
        },
        data() {
            return {
                selected: this.default
                    ? this.default
                    : this.options.length > 0
                    ? this.options[0]
                    : null,
                open: false,
            };
        },
        mounted() {
            this.$emit("input", this.selected);
        },
    }
</script>

<style lang="css" scoped>
.custom-select {
    position: relative;
    height: 1.9vw;
    width: 14.5vw;
    border: 1px solid #E8E8E8;
    float: right;
    line-height: 1.9vw;
    font-family: "scDream4";
    font-size: 0.75vw;
}
.custom-select .selected {
    background-color: white;
    border: 1px solid #E8E8E8;
    color: #333333;
    padding-left: 1vw;
    cursor: pointer;
    user-select: none;
}
.custom-select .selected:after {
    position: absolute;
    content: "";
    background-image: url(../images/dropdown-arrow.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 0.8vw;
    height: 1.3vw;
    top: 0.75vw;
    right: 1vw;
}
.custom-select .items {
    color: #333333;
    overflow: hidden;
    position: absolute;
    background-color: white;
    border: 1px solid #E8E8E8;
    left: 0;
    right: 0;
    z-index: 1;
}
.custom-select .items div {
    color: #333333;
    padding-left: 1vw;
    cursor: pointer;
    user-select: none;
}
.selectHide {
    display: none;
}
</style>
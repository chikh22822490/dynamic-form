<template>
  <teleport to="body">
    <!-- <button @click="open">Open</button> -->
    <div
      v-if="show"
      @click="tryClose"
      class="absolute top-0 left-0 bg-black opacity-75 z-10 h-screen w-screen"
    ></div>
    <transition name="dialog">
      <dialog
        open
        v-if="show"
        class="z-50 absolute m-0 p-0 w-[80%] h-[80%] left-[10%] bg-purple-900"
      >
        <section>
          <slot name="header">
            <div class="flex justify-end pt-2 pr-2 h-1/6">
                <button @click="tryClose" class="rounded-full text-xl p-4 hover:bg-gray-900 transition-colors hover:ease-in-out duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    style="fill: #ffffff"
                  >
                    <path
                      d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                    ></path>
                  </svg>
                </button>
            </div>
          </slot>
        </section>
        <section
          class="p-4 h-4/6 items-center flex justify-center text-center"
        >
          <slot></slot>
        </section>

        <section class="p-4 bottom-0 right-0 absolute text-white">
          <slot name="actions">
            <div class="flex justify-around gap-1">
              <button @click="previous" :disabled="!previousActive" class="rounded-full text-xl p-4 hover:bg-gray-900 transition-colors hover:ease-in-out duration-300 disabled:bg-slate-500 disabled:opacity-70">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </button>
              <button @click="next" :disabled="!nextActive" class="rounded-full text-xl p-4 hover:bg-gray-900 transition-colors hover:ease-in-out duration-300 disabled:bg-slate-500 disabled:opacity-70">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </slot>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
    transitionName: {
      type: String,
      required: true,
      default: "next",
    },
    nextActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    previousActive: {
      type: Boolean,
      required: true,
      default: false,
    }
  },

  emits: ["close", "next", "previous"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
    loginPage() {
      this.$router.replace("/auth");
    },
    next() {
      if(this.nextActive){
        this.$emit("next");
      }
    },
    previous() {
      if(this.previousActive){
        this.$emit("previous");
      }
    },
  },
};
</script>

<style scoped>
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>

<template>
  <section class="w-full">
    <button @click="open" type="button" class="bg-purple-700 rounded-md p-4 text-xl text-white">Open</button>
    <form-container
      :show="show"
      :transitionName="transitionName"
      :nextActive="nextActive"
      :previousActive="previousActive"
      title="'form'"
      @next="next"
      @previous="previous"
      @close="close"
    >
      <div>
        <transition :name="transitionName" mode="out-in">
          <div :key="slides[currentSlide].label">
            <form-item
              :type="slides[currentSlide].type"
              :label="slides[currentSlide].label"
              :value="slides[currentSlide].value"
              :help="slides[currentSlide].help"
            ></form-item>
          </div>
        </transition>
      </div>
    </form-container>
  </section>
</template>

<script>
import FormContainer from "./components/FormContainer.vue";
import FormItem from "./components/FormItem.vue";

export default {
  name: "App",
  components: {
    FormContainer,
    FormItem,
  },
  data() {
    return {
      show: false,
      transitionName: "next",
      nextActive: true,
      previousActive: false,
      currentSlide: 0,
      slides: [
        {
          type: "text",
          label: "Your username",
          value: "calypso",
          help: "Pick a username people will remember!",
        },
        {
          type: "email",
          label: "Your email",
          value: "test@mail.com",
          help: "Put your E-mail adress!",
        },
        {
          type: "number",
          label: "Your phone number",
          value: "22822490",
          help: "Put your phone number!",
        },
      ],
    };
  },
  watch: {
    currentSlide() {
      if (this.currentSlide + 1 === this.slides.length) {
        this.nextActive = false;
      } else {
        this.nextActive = true;
      }
      if (this.currentSlide !== 0) {
        this.previousActive = true;
      } else {
        this.previousActive = false;
      }
    },
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    next() {
      this.transitionName = "next";
      this.currentSlide++;
    },
    previous() {
      this.transitionName = "previous";
      this.currentSlide--;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}

.next-enter-from,
.previous-leave-to {
  transform: translateY(100%);
  opacity: 0%;
}

.next-enter-to,
.next-leave-from,
.previous-enter-to,
.previous-leave-from {
  transform: translateY(0%);
  opacity: 100%;
}

.next-enter-active,
.next-leave-active,
.previous-enter-active,
.previous-leave-active {
  transition: all 0.3s ease-in-out;
}

.previous-enter-from,
.next-leave-to {
  transform: translateY(-100%);
  opacity: 0%;
}
</style>

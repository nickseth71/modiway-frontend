<template>
  <div class="absolute inset-0 flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-[450px] p-6 bg-[#FFFFFF] rounded shadow-md relative">
      <div class="flex justify-center mb-6">
        <div class="h-[24px] w-[24px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            @click="toggleTab"
          >
            <circle
              cx="12"
              cy="8"
              r="4.75"
              stroke="black"
              stroke-opacity="0.45"
              stroke-width="1.5"
            />
            <path
              d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
              stroke="black"
              stroke-opacity="0.45"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <h2 class="text-2xl font-semibold text-center text-gray-700 mb-6">
        Sign in
      </h2>
      <div class="flex items-center justify-center space-x-6 mb-6">
        <button
          :class="tab === 'ma' ? 'text-black font-semibold' : 'text-black/85'"
          @click="setTab('ma')"
          class="focus:outline-none bg-white border-none"
        >
          MA No.
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="70"
          viewBox="0 0 94 70"
          class="transition-all duration-300 cursor-pointer"
          fill="none"
          @click="toggleTab"
        >
          <path
            :d="isToggled ? toggledPath : defaultPath"
            fill="white"
            stroke="black"
            stroke-opacity="0.85"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            :cx="tab === 'mobile' ? '66' : '50'" 
            cy="35"
            r="6"
            fill="black"
            fill-opacity="0.85"
          />
        </svg>

        <button
          :class="tab === 'mobile' ? 'text-black font-semibold' : 'text-black/85'"
          @click="setTab('mobile')"
          class="focus:outline-none bg-white border-none"
        >
          Mobile No.
        </button>
      </div>
      <form @submit.prevent="login">
        <div v-if="tab === 'ma'">
          <label for="maNumber" class="sr-only">MA No.</label>
          <input
            v-model="form.maNumber"
            id="maNumber"
            type="text"
            class="w-full px-4 py-2 border bg-[#F2F2F2] text-black/85 focus:outline-none placeholder:text-[12px]"
            placeholder="MA No: *"
            required
          />
          <label for="password" class="sr-only">Password</label>
        <input
          v-model="form.password"
          id="password"
          type="password"
          class="w-full px-4 py-2 mt-4 border bg-[#F2F2F2] text-black/85 focus:outline-none placeholder:text-[12px]"
          placeholder="Password: *"
          required
        />
        </div>
        <div v-if="tab === 'mobile'">
          <label for="mobile" class="sr-only">Mobile No.</label>
          <input
            v-model="form.mobile"
            id="mobile"
            type="text"
            class="w-full px-4 py-2 border bg-[#F2F2F2] text-black/85 focus:outline-none placeholder:text-[12px]"
            placeholder="Mobile No: *"
            required
          />
          <input
          v-model="form.password"
          id="password"
          type="password"
          class="w-full px-4 py-2 mt-4 border bg-[#F2F2F2] text-black/85 focus:outline-none placeholder:text-[12px]"
          placeholder="OTP: *"
          required
        />
          <button
            v-if="!otpSent"
            @click.prevent="sendOTP"
            class="mt-4 w-full bg-black/85 text-white py-2 rounded hover:bg-gray-800"
          >
            Send OTP
          </button>
          <div v-if="otpSent" class="mt-2 text-center">
            <p>Resend OTP in: {{ remainingTime }} seconds</p>
            <button
              v-if="remainingTime === 0"
              @click.prevent="sendOTP"
              class="mt-2 w-full bg-black/85 text-white py-2 rounded"
            >
              Resend OTP
            </button>
          </div>
        </div>
        
        <button
          style="line-height: normal"
          type="submit"
          class="w-full flex justify-center font-outfit font-normal px-4 py-2 mt-6 text-black/85 text-[13px] underline underline-offset-4"
        >
          Sign in
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            class="mt-[6px] ml-[7px]"
          >
            <path
              d="M0.904459 10L0 9.1125L4.19108 5L0 0.8875L0.904459 0L6 5L0.904459 10Z"
              fill="black"
              fill-opacity="0.85"
            />
          </svg>
        </button>
      </form>
      <div class="flex flex-col justify-center items-center mt-[8px] text-center">
        <button
          href="#"
          class="text-[13px] font-normal font-outfit text-black/85 hover:text-gray-700"
        >
          Forgot Password?
        </button>
        <p class="mt-[20px] text-[13px] font-normal font-outfit text-[#000000]">
          Not an Advisor?
          <button
            @click="navigateToRegister"
            class="w-full mt-[10px] flex justify-center font-outfit font-normal text-black/85 text-[13px] underline underline-offset-4"
          >
            Register Now
          </button>
        </p>
      </div>
      <button class="absolute top-4 right-4 focus:outline-none">
        <svg
          class="h-6 w-6 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      tab: "ma",
      form: {
        maNumber: "",
        mobile: "",
        password: "",
      },
      isToggled: false,
      defaultPath: "M64.3333 23H51.6667C48.3073 23 45.0854 24.317 42.71 26.6612C40.3345 29.0054 39 32.1848 39 35.5C39 38.8152 40.3345 41.9946 42.71 44.3388C45.0854 46.683 48.3073 48 51.6667 48H64.3333C67.6927 48 70.9146 46.683 73.29 44.3388C75.6655 41.9946 77 38.8152 77 35.5C77 32.1848 75.6655 29.0054 73.29 26.6612C70.9146 24.317 67.6927 23 64.3333 23Z",
      toggledPath: "M64.3333 23H51.6667C48.3073 23 45.0854 24.317 42.71 26.6612C40.3345 29.0054 39 32.1848 39 35.5C39 38.8152 40.3345 41.9946 42.71 44.3388C45.0854 46.683 48.3073 48 51.6667 48H64.3333C67.6927 48 70.9146 46.683 73.29 44.3388C75.6655 41.9946 77 38.8152 77 35.5C77 32.1848 75.6655 29.0054 73.29 26.6612C70.9146 24.317 67.6927 23 64.3333 23Z",
      otpSent: false,
      remainingTime: 60,
      timer: null,
    };
  },
  methods: {
    login() {
      const { maNumber, mobile, password } = this.form;
      if ((maNumber || mobile) && password) {
        localStorage.setItem("loggedIn", "true");
        this.$router.push("/");
      } else {
        alert("Please fill in all fields");
      }
    },
    sendOTP() {
      this.otpSent = true;
      this.startTimer();
      // Your logic to send the OTP goes here.
    },
    startTimer() {
      this.remainingTime = 60;
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.otpSent = false; // Allow resending OTP
        }
      }, 1000);
    },
    setTab(selectedTab) {
      this.tab = selectedTab;
      this.isToggled = selectedTab === "mobile"; 
    },
    toggleTab() {
      this.tab = this.tab === "ma" ? "mobile" : "ma";
      this.isToggled = !this.isToggled; 
    },
    navigateToRegister() {
      this.$router.push('/register'); 
    },
  },
};
</script>

<style scoped>
button {
  transition: all 0.3s;
}
</style>

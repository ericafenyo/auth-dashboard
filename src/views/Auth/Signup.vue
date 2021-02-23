<template>
  <div class="bg-blue-600 h-screen">
    <div class="flex flex-row h-full">
      <div class="w-120">
        <div class="h-full flex flex-col">
          <div class="flex p-6 text-white">
            <svg
              class="flex-none w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <h1 class="m-0 ml-2 font-normal text-2xl text-white">Auth<span>Dashboard</span></h1>
          </div>

          <div class="flex flex-col flex-auto">
            <div class="px-6 flex-auto ">
              <h2 class="font-normal text-3xl text-white">
                Get free secure access for your applications.No credit card required.
              </h2>
              <div class="text-white">
                <p class="font-medium">Features</p>
                <div>
                  <ul>
                    <li class="my-2">Basic email-password and JWT authentication</li>
                    <li class="my-2">Manage users and applications</li>
                    <li class="my-2">Customize the generated JWT code</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="w-40 p-6 text-white opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white flex-auto border ">
        <div class="flex items-center  justify-end my-4 mx-12">
          <p class="mr-2">Don’t have an account?</p>
          <Link text="Sign in" />
        </div>

        <div class="p-4 max-w-xl my-0 mx-auto">
          <div class="container">
            <h2>Sign up</h2>
            <form action="">
              <div class="mb-6">
                <Input placeholder="Enter your company name" label="Company" />
              </div>
              <div class="mb-6">
                <Input placeholder="Enter your email" label="Email" />
              </div>
              <div class="mb-6">
                <Input placeholder="Enter your first name" label="First Name" />
              </div>
              <div class="mb-6">
                <Input placeholder="Enter your last name" label="Last Name" />
              </div>

              <div class="mt-12">
                <Button block text="Sign up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import Link from "@/components/Link.vue";

@Component({
  components: {
    Button,
    Link,
    Input,
  },
})
export default class Signup extends Vue {}
</script>

<style lang="sass" scoped>
@import "@/scss/_mixins.scss";
</style>

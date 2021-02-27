<template>
  <div class="bg-white h-screen">
    <div>
      <div class="flex justify-between">
        <div class="flex p-6">
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
          <h1 class="m-0 ml-2 font-normal text-2xl">Auth Dashboard</h1>
        </div>
        <div class="flex items-center  justify-end my-4 mx-12">
          <p class="mr-2">Don’t have an account?</p>
          <Link text="Sign in" />
        </div>
      </div>

      <div class="p-4 max-w-xl my-0 mx-auto">
        <div class="container">
          <h2>Sign up</h2>
          <form>
            <div class="mb-6">
              <Input placeholder="Enter your company name" label="Company" v-model="company" />
            </div>
            <div class="mb-6">
              <Input placeholder="Enter your email" label="Email" v-model="email" />
            </div>
            <div class="mb-6">
              <Input placeholder="Enter your first name" label="First Name" v-model="firstName" />
            </div>
            <div class="mb-6">
              <Input placeholder="Enter your last name" label="Last Name" v-model="lastName" />
            </div>
            <div class="mb-6">
              <Input
                type="password"
                placeholder="Enter your password"
                label="Password"
                v-model="password"
              />
            </div>
            <div class="mb-6">
              <Input
                type="password"
                placeholder="Enter your password again"
                label="Confirm password"
                v-model="confirmPassword"
              />
            </div>
            <div class="mt-12">
              <Button type="button" block text="Sign up" @click.prevent.native="onSubmit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SIGN_UP } from "@/graphql/mutations";

@Component
export default class Signup extends Vue {
  company = "Unicef";
  email = "name@example";
  firstName = "User";
  lastName = "Mame";
  password = "Passw0rd";
  confirmPassword = "Passw0rd";

  onSubmit() {
    this.$apollo
      .mutate({
        mutation: SIGN_UP,
        variables: {
          input: {
            name: this.company,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          },
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="sass" scoped>
@import "@/scss/_mixins.scss";
</style>

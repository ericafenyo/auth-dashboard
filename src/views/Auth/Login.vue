<template>
  <section class="h-screen">
    <div class="wrapper">
      <div class="sign-in">
        <h2 class="headline-2 m-0 mb-6 font-normal">Login To Your Account</h2>
        <Alert
          :visible="options.visible"
          :title="options.title"
          :type="options.type"
          :closable="options.closable"
          :message="options.message"
          @dismiss="showAlert({ visible: false })"
        />
        <form @submit.prevent="onSubmit" novalidate="true">
          <div class="mb-5">
            <Input
              type="text"
              name="email"
              placeholder="name@example.com"
              label="Email"
              :className="[{ 'input-error': $v.email.$error }]"
              :value="email"
              v-model="email"
            />
          </div>
          <div class="mb-5">
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter 8 or more characters"
              :className="[{ 'input-error': $v.password.$error }]"
              v-model="password"
            />
          </div>
          <Button block text="Login" class="mt-6" :loading="isLoading" />
          <div class="mt-3 text-center">
            <span class="text-body mr-2">Don't have an account?</span>
            <Link text="Sign up" to="/auth/sign-up" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Validations } from "vuelidate-property-decorators";
import { required } from "vuelidate/lib/validators";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Link from "@/components/Link.vue";
import Alert from "@/components/Notification/Alert.vue";
import { NotificationOptions } from "@/components/Notification";

@Component({ components: { Input, Button, Link, Alert } })
export default class Login extends Vue {
  isLoading = false;
  options: NotificationOptions = {};

  email = "";
  password = "";

  @Validations()
  validations = {
    email: { required },
    password: { required },
  };

  @Prop({ type: String, default: "" })
  readonly notificationKey!: string;

  @Prop({ type: String, default: "" })
  readonly username!: string;

  showAlert(options: NotificationOptions = { visible: false }) {
    this.options = options;
  }

  resetForm() {
    this.email = "";
    this.password = "";
  }

  onSubmit() {
    const { $invalid } = this.$v;
    if (!$invalid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.showAlert({
          type: "error",
          title: "Oops!",
          message: "Login not yet implemented",
          visible: true,
        });
      }, 3000);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

.wrapper {
  height: 100%;
  @include phablet {
    height: initial;
    padding-top: 3rem;
  }
}
.sign-in {
  max-width: 360px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-radius: $border-radius;
  background-color: $white;

  @include phone {
    padding: 2rem 1.5rem;
  }
  @include phablet {
    height: initial;
  }
}
</style>

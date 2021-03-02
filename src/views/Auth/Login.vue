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
          <div class="mb-6">
            <Input
              type="text"
              name="email"
              placeholder="name@example.com"
              label="Email"
              :error="$v.email.$error"
              hasHint
              errorMessage="Email field is required"
              v-model="email"
            />
          </div>
          <div class="mb-5">
            <Input
              v-model="password"
              label="Password"
              type="password"
              name="password"
              hasHint
              errorMessage="Email field is required"
              placeholder="Enter 8 or more characters"
              :error="$v.password.$error"
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
import { required, email } from "vuelidate/lib/validators";
import { NotificationOptions } from "@/components/Notification";
import { Action } from "@/store/actions";
import { Result } from "../../data/Result";

@Component
export default class Login extends Vue {
  isLoading = false;
  options: NotificationOptions = {};

  email = "bon@transway.fr";
  password = "Azerty1234";

  @Validations()
  validations = {
    email: { required, email },
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

  async onSubmit() {
    this.isLoading = true;
    this.$v.$touch();

    const { $invalid } = this.$v;
    if (!$invalid) {
      const result: Result = await this.$store.dispatch(Action.AUTHENTICATE, {
        email: this.email,
        password: this.password,
      });
      if (!result.succeeded) {
        this.handleError(result.succeeded);
      } else {
        this.$router.replace("/");
      }
    }
    this.isLoading = false;
  }
  handleError(error: any) {
    console.log(error);
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
  max-width: 400px;
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

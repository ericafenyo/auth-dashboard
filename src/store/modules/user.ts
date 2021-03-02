/**
 * @license
 * Copyright (c) 2021 Eric Afenyo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @file
 * Vuex module for the `auth` namespace. It is used to manager the state of user authentication.
 */

import { State, Credentials } from "../state";
import { User } from "@/data/services/Injector";

export default {
  namespaced: true,
  state: {
    credentials: {},
  },

  mutations: {
    saveCredentials(state: State, credentials: Credentials) {
      state.credentials = credentials;
    },

    invalidateToken(state: State) {
      state.credentials = {};
    },
  },

  getters: {
    accessToken(state: State): string | undefined {
      return state.credentials.accessToken;
    },
  },

  actions: {
    async authenticate({ commit }: any, payload: any) {
      const result = await User.authenticate(payload.email, payload.password);
      if (result.succeeded()) {
        commit("saveCredentials", result.data);
      }
      return result;
    },
  },
};

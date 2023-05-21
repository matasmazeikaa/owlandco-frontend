import * as dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

export default defineNuxtPlugin((nuxtApp) => {
	dayjs.extend(advancedFormat);
	nuxtApp.provide('dayjs', dayjs);
});

declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    dayjs(): dayjs.Dayjs
  }
}

export {};

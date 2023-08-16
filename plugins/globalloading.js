export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", (e) => {
    console.log("app:mounted");
  });
  nuxtApp.hook("page:start", (e) => {
    console.log("page:start");
  });
  nuxtApp.hook("page:finish", (e) => {
    console.log("page:finish");
  });
  nuxtApp.hook("app:error", (e) => {
    console.log("app:error");
  });
});

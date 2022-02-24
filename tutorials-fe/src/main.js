import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(router);
app.config.errorHandler = (err) => {
  console.log(err);
};

app.mount("#app");

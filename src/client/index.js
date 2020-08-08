import { handleSubmit, updateUI } from "./js/formHandler";

//import scss files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/form.scss";

document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    handleSubmit(event);
  });

if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

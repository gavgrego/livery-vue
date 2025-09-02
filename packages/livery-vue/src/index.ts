// Auto-import styles - users don't need to manually import CSS
import "./index.css";

export { default as ExampleComponent } from "./components/ExampleComponent.vue";
export { default as MyPanel } from "./components/MyPanel.vue";
export { default as MyPanelSection } from "./components/MyPanelSection.vue";
export { default as Button } from "./components/ui/button/Button.vue";

if (__DEV__) {
  console.log("[@gavgrego/livery-vue] dev mode");
}

import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Divider from "primevue/divider";

import "primevue/resources/themes/saga-blue/theme.css"; // or any other theme
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("Divider", Divider);
});

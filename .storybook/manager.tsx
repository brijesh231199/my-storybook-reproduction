import { addons } from "@storybook/manager-api";
import { DOCS_PREPARED } from "@storybook/core-events";

addons.setConfig({
  panelPosition: "right",
  sidebar: {
    showRoots: true,
  },
});

addons.register("MyAddon", (api) => {
  api.on(DOCS_PREPARED, () => {
    const storyData = api.getCurrentStoryData();
    console.log("path", storyData.importPath);
    api.setAddonContext("myAddon", storyData.importPath);
  });
});

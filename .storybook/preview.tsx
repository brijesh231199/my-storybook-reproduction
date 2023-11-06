import React from "react";
import { Preview } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";
import { useAddonState, useStorybookApi } from "@storybook/manager-api";

const preview: Preview = {
  parameters: {
    docs: {
      page: () => {
        // I want to get story path here so I can import each module CHANGELOG file
        //when i use useAddonState give me error getAddonState undefined
        const [myAddonState] = useAddonState("myAddon");
        console.log("addon", myAddonState);

        // When i use direct storybook api give me getCurrentStoryData undefined error

        // const api = useStorybookApi();
        // const storyData = api.getCurrentStoryData();
        // console.log("story path", storyData);

        return (
          <>
            <DocBlock.Title />
            <DocBlock.Description />
            <DocBlock.Primary />
            <DocBlock.Controls />
            <DocBlock.Stories />
          </>
        );
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

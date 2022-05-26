module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)", '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  features: {
    previewMdx2: true
  },
};

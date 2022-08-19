module.exports = function (eleventyConfig) {
  //include CSS
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");
  //include assets/images
  eleventyConfig.addPassthroughCopy("src/assets/");
  //netlify cms
  eleventyConfig.addPassthroughCopy("./src/admin");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};

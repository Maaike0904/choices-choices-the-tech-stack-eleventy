// INPUT EN OUTPUT INSTELLEN
module.exports = function (eleventyConfig) {
  // CSS, images en admin WORDEN HIER GEKOPPELD
  eleventyConfig.addPassthroughCopy("src/css/global.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

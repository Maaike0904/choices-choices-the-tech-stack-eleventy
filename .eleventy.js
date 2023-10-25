// INPUT EN OUTPUT INSTELLEN
module.exports = function (eleventyConfig) {
// CSS WORD HIER GEKOPPELD
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

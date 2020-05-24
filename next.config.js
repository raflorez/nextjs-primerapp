module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => {
    const paths = {
      "/": { page: "/" },
      "/blog": { page: "/blog" },
    };
    return paths;
  },
};

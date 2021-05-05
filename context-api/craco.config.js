const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@ui": path.resolve(__dirname, "src/ui/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@const": path.resolve(__dirname, "src/const/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@images": path.resolve(__dirname, "src/images/"),
    },
  },
};

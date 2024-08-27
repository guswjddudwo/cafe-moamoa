const importAll = (requireContext) => {
  return requireContext.keys().reduce((images, item) => {
    const key = item.replace("./", "").replace(/\.[^/.]+$/, "");
    images[key] = requireContext(item);
    return images;
  }, {});
};

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

export default images;

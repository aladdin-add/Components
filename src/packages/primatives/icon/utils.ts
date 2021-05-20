import lazy from "react-lazy-named";

export const getIcon = (config, name) => {
  if (config.iconDir) {
    switch (config.iconDir) {
      case "feather":
      default:
        return lazy(() => import("react-feather"), name);
    }
  }

  throw new Error("Unknown icon lib");
};

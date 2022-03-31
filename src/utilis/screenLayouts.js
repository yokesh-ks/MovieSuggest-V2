export const ScreenTypes = {
  desktop: "desktop",
  tablet: "tablet",
  mobile: "mobile",
};

export const getScreenType = (width) => {
  if (width > 950) {
    return ScreenTypes.desktop;
  }
  if (width > 600) {
    return ScreenTypes.tablet;
  }
  return ScreenTypes.mobile;
};

export const isWeb = (width) => {
  if (
    [ScreenTypes.desktop, ScreenTypes.tablet].indexOf(getScreenType(width)) !==
    -1
  )
    return true;
  return false;
};

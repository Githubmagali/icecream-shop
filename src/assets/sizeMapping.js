import data from "@/assets/slider.json";

const qIceCream = data.quantityIceCream;

export const sizeMapping = {
  small: qIceCream.find((item) => item.size === "1/4kg"),
  medium: qIceCream.find((item) => item.size === "1/2kg"),
  large: qIceCream.find((item) => item.size === "1kg"),
};

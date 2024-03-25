import data from "@/assets/slider.json";
const qIceCream = data.quantityIceCream;

export const sizeMapping = {
  small: {
    size: qIceCream.find((item) => item.id === 1).size,
    price: qIceCream.find((item) => item.id === 1).price,
    img: qIceCream.find((item) => item.id === 1).img,
  },
  medium: {
    size: qIceCream.find((item) => item.id === 2).size,
    price: qIceCream.find((item) => item.id === 2).price,
    img: qIceCream.find((item) => item.id === 2).img,
  },
  large: {
    size: qIceCream.find((item) => item.id === 3).size,
    price: qIceCream.find((item) => item.id === 3).price,
    img: qIceCream.find((item) => item.id === 3).img,
  },
};

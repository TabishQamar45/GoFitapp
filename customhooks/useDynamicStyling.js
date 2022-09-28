import { useWindowDimensions } from "react-native";

const STANDARD_HEIGHT = 667;

const useDynamicStyling = () => {
  const { height } = useWindowDimensions();
  const DynamicStyles = (size) => {
    const returnSize = (height / STANDARD_HEIGHT) * size;
    return returnSize;
  };
  return {
    DynamicStyles,
  };
};
export default useDynamicStyling;

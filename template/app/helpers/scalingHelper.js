import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// guideline sizes are based on iPhone 11 scale (Better to use the scale which UIs are designed)
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;

export { horizontalScale, verticalScale };

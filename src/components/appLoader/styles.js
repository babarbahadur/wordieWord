import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

export const styles = ScaledSheet.create({
  container: {
    height: '150@ms',
    height: '120@ms',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20@ms'
  },
  backgroundView: {
    // position: 'absolute',
    // width,
    // height,
    backgroundColor: 'transparent',
  },
  loader: {
    width: '150@ms',
    height: '150@ms'
  }
});

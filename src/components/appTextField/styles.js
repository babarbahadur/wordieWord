import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils';

export const styles = ScaledSheet.create({
  textFieldContainer: {
    borderRadius: 8,
    marginRight: '20@ms',
    marginLeft: '20@ms',
    height: '48@ms',
    backgroundColor: '#fff',
  },
  textField: {
    fontSize: '14@ms0.3',
    paddingLeft: '15@ms0.3',
    paddingRight: '20@ms0.3',
    color: '#000',
  },
  rightIcon: {
    fontSize: '30@ms0.3',
    color: colors.green
  }
});

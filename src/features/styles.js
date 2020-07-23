import { ScaledSheet } from "react-native-size-matters";
import { colors } from '../utils'

export const styles = ScaledSheet.create({
  topView: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    height: '200@ms',
    width: '100%',
    position: 'absolute',
    bottom: 0    
  },
  loader: {
    width: '100%',
    height: '400@ms',
    position: 'absolute',
    bottom: 0,
  },
  buttonsView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    height: '44@ms',
    marginTop: '20@ms',
    width: '35%',
    borderRadius: 25,
    marginHorizontal: '20@ms',
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: 'white'
  },
  heading: {
    fontSize: '40@ms',
    fontWeight: 'bold',
    marginTop: '100@ms',
    alignSelf: 'center',
    color: colors.green
  },
  subHeading: {
    fontSize: '18@ms',
    marginTop: '30@ms',
    alignSelf: 'center',
    marginHorizontal: '20@ms',
    marginBottom: '10@ms',
    textAlign: 'center',
    color: colors.green
  }
})
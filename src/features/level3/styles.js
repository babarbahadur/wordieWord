import { ScaledSheet } from "react-native-size-matters";
import { colors } from '../../utils'

export const styles = ScaledSheet.create({
  topView: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  mainView: {
    margin: '20@ms'
  },
  heading: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    marginTop: '20@ms',
    marginBottom: '20@ms',
    color: colors.green,
    alignSelf: 'center',
    textAlign: 'center'
  },
  heading2: {
    fontSize: '16@ms',
    marginHorizontal: '15@ms',
    marginTop: '10@ms',
    marginBottom: '10@ms',
    color: colors.green,
    alignSelf: 'center'
  },
  heading3: {
    fontSize: '16@ms',
    marginHorizontal: '15@ms',
    marginBottom: '20@ms',
    color: colors.green,
    alignSelf: 'center'
  },
  levelImage: {
    height: '60@ms',
    width: '60@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '20@ms'
  },
  statsView: {
    justifyContent: 'center',
  },
  statsSubView: {
    height: '30@ms',
    width: '120@ms',
    borderRadius: '5@ms',
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5@ms'
  },
  level: {
    fontSize: '14@ms',
    color: 'white',
    fontWeight: 'bold'
  },
  levelImage: {
    height: '100@ms',
    width: '100@ms'
  },
  levelHeading: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    marginHorizontal: '20@ms',
    marginTop: '-20@ms'
  },
  levelView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionMainView: {
    flexDirection: 'row',
    marginTop: '20@ms',
    justifyContent: 'center'
  },
  answerSubView: {
    height: '50@ms',
    width: '50@ms',
    borderRadius: '50@ms',
    backgroundColor: '#F7f7',
  },
  questionView: {
    marginHorizontal: '20@ms'
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15@ms'
  },
  letter: {
    fontSize: '30@ms',
    fontWeight: 'bold',
    color: 'white'
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
    width: '250@ms',
    height: '250@ms',
    position: 'absolute',
    bottom: 0
  },
  answerMainView: {
    marginHorizontal: '20@ms'
  },
  statsMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20@ms'
  },
  boxesView: {
    height: '270@ms',
    width: '300@ms',
    alignSelf: 'center'
  },
  boxesView2: {
    height: '180@ms',
    width: '300@ms',
    alignSelf: 'center'
  },
  subBoxView: {
    height: '60@ms',
    width: '100@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.green
  },
  subBoxView2: {
    height: '40@ms',
    width: '100@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.green
  },
  diceImage: {
    height: '100%',
    width: '100%',
  },
  buttonView: {
    height: '44@ms',
    marginTop: '20@ms',
    borderRadius: 25,
    marginHorizontal: '20@ms',
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: 'white'
  }
});

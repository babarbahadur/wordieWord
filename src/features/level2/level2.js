import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import { styles } from "./styles"; 
import { colors, words } from '../../utils';
import { AppHeader, AppLoader, AppTextField } from '../../components'
import LottieView from 'lottie-react-native';
import animatedLoader from '../../assets/animation/typing.json';
import { showToast } from '../../utils/showAlert';

const Level2 = (props) => {
  console.disableYellowBox = true;

  const [question] = useState([
    { 
      one: words.word61 , two: words.word66 , 
      three: words.word62, four: words.word67, 
      five: words.word63 , six: words.word68,
      seven: words.word64, eight: words.word69, 
      nine: words.word65, ten: words.word70, 
      eleven: words.word71, twelve: words.word76
    },
    { 
      one: words.word72 , two: words.word77 , 
      three: words.word73, four: words.word78 , 
      five: words.word74 , six: words.word79,
      seven: words.word75, eight: words.word80, 
      nine: words.word81, ten: words.word86, 
      eleven: words.word82, twelve: words.word87
    }, 
    { 
      one: words.word83 , two: words.word88 , 
      three: words.word84, four: words.word89, 
      five: words.word85 , six: words.word90,
      seven: words.word91, eight: words.word96, 
      nine: words.word92, ten: words.word97, 
      eleven: words.word93, twelve: words.word98
    }, 
    { 
      one: words.word94 , two: words.word99, 
      three: words.word95, four: words.word100 , 
      five: words.word101 , six: words.word106,
      seven: words.word102, eight: words.word107, 
      nine: words.word103, ten: words.word108, 
      eleven: words.word104, twelve: words.word109
    }, 
    { 
      one: words.word105 , two: words.word110, 
      three: words.word111, four: words.word116 , 
      five: words.word112 , six: words.word117,
      seven: words.word113, eight: words.word118, 
      nine: words.word114, ten: words.word119, 
      eleven: words.word115, twelve: words.word120
    } 
  ])

  const [answer, setAnswer] = useState([])
  const [newWord, setNewWord] = useState('')
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [displayOptions, setDisplayOptions] = useState(false)

  useEffect(() => {
    setLoading(true)
    setDisplayOptions(false)
    setTimeout(function(){
      setLoading(false)
      setDisplayOptions(true)
    }, 5000);
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      retry()
    });

    return unsubscribe;
  }, [props.navigation]);

  const checkAnswer = () => {
    if (question[currentQuizIndex].one == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].two == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].three == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].four == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].five == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].six == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].seven == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].eight == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].nine == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].ten == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].eleven == newWord ) {
      correctAnswer(newWord)
    } else if (question[currentQuizIndex].twelve == newWord ) {
      correctAnswer(newWord)
    } else {
      showToast(`${newWord} does not exists!`, 'danger')
    }

    setNewWord('')
  }

  const correctAnswer = (word) => {
    var alreadyExist = false
    answer.map( (item) => {
      if(word == item) {
        showToast('Already exists!', 'warning')
        alreadyExist = true
      }
    })

    if(!alreadyExist) {
      answer.push(word)
      setScore(score+1)
    }
    
  }

  const nextQuestion = () => {
    if(currentQuizIndex > 3) {
      if(score > 25) {
        Alert.alert(
          "Congratulations",
          "You have successfully passed level 2. Do you want to play next level",
          [
            {
              text: "Retry",
              onPress: () => retry(),
              style: "cancel"
            },
            { text: "Okay",
              onPress: () => props.navigation.navigate('Level3')
            }
          ],
          { cancelable: false }
      );
      } else {
        Alert.alert(
          "Alert",
          "Unfortunately you could not clear level 2. Do you want to play again?",
          [
            {
              text: "Okay",
              onPress: () => retry()
            },
          ],
          { cancelable: false }
        );
      }
    } else {
      setAnswer([])
      setNewWord('')
      setCurrentQuizIndex(currentQuizIndex+1)
      setLoading(true)
      setDisplayOptions(false)
      setTimeout(function(){
        setLoading(false)
        setDisplayOptions(true)
      }, 5000);
    }
  }

  const retry = () => {
    setAnswer([])
    setNewWord('')
    setCurrentQuizIndex(0)
    setScore(0)
    setLoading(true)
    setDisplayOptions(false)
    setTimeout(function(){
      setLoading(false)
      setDisplayOptions(true)
    }, 5000);
  }

  const renderStats = () => {
    return(
      <View style={styles.statsMainView}>
        <View style={styles.levelView}>
          <Image source={require('../../assets/images/2.png')} style={styles.levelImage} resizeMode='contain'/>
          <Text style={styles.levelHeading}>Level</Text>
        </View>

        <View style={styles.statsView}>
          <View style={styles.statsSubView}>
            <Text style={styles.level}>{currentQuizIndex + 1} / 5</Text>
          </View>

          <View style={styles.statsSubView}>
            <Text style={styles.level}>Score: {score}</Text>
          </View>
        </View>
      </View> 
    )
  }

  const renderQuestion = () => {
    return(
      <View style={styles.questionView}>
        <AppLoader />
        <Text style={styles.heading}>Try to remember all of these words!</Text>

        <View style={styles.boxesView}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].one}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].two}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].three}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].four}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].five}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].six}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].seven}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].eight}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].nine}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].ten}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].eleven}</Text>
            </View>
            <View style={styles.subBoxView}>
              <Text>{question[currentQuizIndex].twelve}</Text>
            </View>
          </View>

        </View>
      </View>
    )
  }

  const renderThinking = () => {
    return(
      <View style={styles.container}>
        <LottieView
          source={animatedLoader}
          autoPlay
          loop
          style={styles.loader}
        />
      </View>
    )
  }

  const renderAnswerOptions = () => {
    return(
      <View style={styles.answerMainView}>
        <Text style={styles.heading2}>Fill the blocks by entering the words that you remember.</Text>
        <View style={styles.boxesView2}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView2}>
              <Text>{answer[0] ? answer[0] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[1] ? answer[1] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[2] ? answer[2] : '?'}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView2}>
              <Text>{answer[3] ? answer[3] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[4] ? answer[4] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[5] ? answer[5] : '?'}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView2}>
              <Text>{answer[6] ? answer[6] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[7] ? answer[7] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[8] ? answer[8] : '?'}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.subBoxView2}>
              <Text>{answer[9] ? answer[9] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[10] ? answer[10] : '?'}</Text>
            </View>
            <View style={styles.subBoxView2}>
              <Text>{answer[11] ? answer[11] : '?'}</Text>
            </View>
          </View>
        </View>
      
        <Text style={styles.heading3}>Please type the words below and press the tick button.</Text>
        <AppTextField
          placeholder="Please type here..."
          rightIcon='check-circle'
          rightIconType='MaterialCommunityIcons'
          onPressRightIcon={checkAnswer}
          textFieldProps={{
            value: newWord,
            onChangeText: (word) => setNewWord(word),
            // onBlur: this.onBlurInstitution,
            // onFocus: this.onFocusInstitution
          }}
         />

         <TouchableOpacity style={styles.buttonView} activeOpacity={0.7} onPress={nextQuestion}>
           <Text style={styles.buttonText}>That's all I remember. Proceed to next!</Text>
         </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.topView}>
      <SafeAreaView backgroundColor={colors.green} opacity={0.95}/>
      <AppHeader title="WordieWord" subTitle="Level 2"/>
      { loading ? renderQuestion() : renderStats()}
      { !loading && renderThinking()}
      { displayOptions ? renderAnswerOptions() : null}
    </View>
  )
}

export default Level2;
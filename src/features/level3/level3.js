import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import { styles } from "./styles"; 
import { colors, words } from '../../utils';
import { AppHeader, AppLoader, AppTextField } from '../../components'
import LottieView from 'lottie-react-native';
import animatedLoader from '../../assets/animation/typing.json';
import { showToast } from '../../utils/showAlert';

const Level3 = (props) => {
  console.disableYellowBox = true;

  const [question] = useState([
    { 
      one: words.word121 , two: words.word126 , 
      three: words.word122, four: words.word127, 
      five: words.word123 , six: words.word128,
      seven: words.word124, eight: words.word129, 
      nine: words.word125, ten: words.word130, 
      eleven: words.word131, twelve: words.word136
    },
    { 
      one: words.word132 , two: words.word137 , 
      three: words.word133, four: words.word138 , 
      five: words.word134 , six: words.word139,
      seven: words.word135, eight: words.word140, 
      nine: words.word141, ten: words.word146, 
      eleven: words.word142, twelve: words.word147
    }, 
    { 
      one: words.word143 , two: words.word148 , 
      three: words.word144, four: words.word149, 
      five: words.word145 , six: words.word150,
      seven: words.word151, eight: words.word156, 
      nine: words.word152, ten: words.word157, 
      eleven: words.word153, twelve: words.word158
    }, 
    { 
      one: words.word154 , two: words.word159, 
      three: words.word155, four: words.word160 , 
      five: words.word161 , six: words.word166,
      seven: words.word162, eight: words.word167, 
      nine: words.word163, ten: words.word168, 
      eleven: words.word164, twelve: words.word169
    }, 
    { 
      one: words.word165 , two: words.word170, 
      three: words.word171, four: words.word176, 
      five: words.word172 , six: words.word177,
      seven: words.word173, eight: words.word178, 
      nine: words.word174, ten: words.word179, 
      eleven: words.word175, twelve: words.word180
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
          "You have successfully passed level 3. Do you want to play again?",
          [
            { text: "Okay",
              onPress: () => props.navigation.navigate('Level1')
            }
          ],
          { cancelable: false }
      );
      } else {
        Alert.alert(
          "Alert",
          "Unfortunately you could not clear level 3. Do you want to play again?",
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
          <Image source={require('../../assets/images/3.png')} style={styles.levelImage} resizeMode='contain'/>
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
      <AppHeader title="WordieWord" subTitle="Level 3"/>
      { loading ? renderQuestion() : renderStats()}
      { !loading && renderThinking()}
      { displayOptions ? renderAnswerOptions() : null}
    </View>
  )
}

export default Level3;
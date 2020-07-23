import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import { styles } from "./styles"; 
import { colors, words } from '../../utils';
import { AppHeader, AppLoader, AppTextField } from '../../components'
import LottieView from 'lottie-react-native';
import animatedLoader from '../../assets/animation/typing.json';
import { showToast } from '../../utils/showAlert';

const Level1 = (props) => {
  console.disableYellowBox = true;

  const [question] = useState([
    { 
      one: words.word1 , two: words.word6 , three: words.word11,
      four: words.word16 , five: words.word21 , six: words.word26,
      seven: words.word31, eight: words.word36, nine: words.word41,
      ten: words.word46, eleven: words.word51, twelve: words.word56
    },
    { 
      one: words.word2 , two: words.word7 , three: words.word12,
      four: words.word17 , five: words.word22 , six: words.word27,
      seven: words.word32, eight: words.word37, nine: words.word42,
      ten: words.word47, eleven: words.word52, twelve: words.word57
    }, 
    { 
      one: words.word3 , two: words.word8 , three: words.word13,
      four: words.word18 , five: words.word23 , six: words.word28,
      seven: words.word33, eight: words.word38, nine: words.word43,
      ten: words.word48, eleven: words.word53, twelve: words.word58
    }, 
    { 
      one: words.word4 , two: words.word9, three: words.word14,
      four: words.word19 , five: words.word24 , six: words.word29,
      seven: words.word34, eight: words.word39, nine: words.word44,
      ten: words.word49, eleven: words.word54, twelve: words.word59
    }, 
    { 
      one: words.word5 , two: words.word10 , three: words.word15,
      four: words.word20 , five: words.word25 , six: words.word30,
      seven: words.word35, eight: words.word40, nine: words.word45,
      ten: words.word50, eleven: words.word55, twelve: words.word60
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
      if(score > 0) {
        props.navigation.navigate('Success', {
          screen: 'Level1',
          success: true,
          next: 'Level2'
        })
      //   Alert.alert(
      //     "Congratulations",
      //     "You have successfully passed level 1. Do you want to play next level",
      //     [
      //       {
      //         text: "Retry",
      //         onPress: () => retry(),
      //         style: "cancel"
      //       },
      //       { text: "Okay",
      //         onPress: () => props.navigation.navigate('Level2')
      //       }
      //     ],
      //     { cancelable: false }
      // );
      } else {
        Alert.alert(
          "Alert",
          "Unfortunately you could not clear level 1. Do you want to play again?",
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
          <Image source={require('../../assets/images/1.png')} style={styles.levelImage} resizeMode='contain'/>
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
      <AppHeader title="WordieWord" subTitle="Level 1"/>
      { loading ? renderQuestion() : renderStats()}
      { !loading && renderThinking()}
      { displayOptions ? renderAnswerOptions() : null}
    </View>
  )
}

export default Level1;
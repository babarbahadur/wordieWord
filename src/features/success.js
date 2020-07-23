import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from "./styles"; 
import { colors, words } from '../utils';
import LottieView from 'lottie-react-native';
import animatedLoader from '../assets/animation/winner.json';
import { showToast } from '../utils/showAlert';

export default function success(props) {
    const renderSuccess = () => {
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

    return (
        <View style={styles.topView}>
            <Text style={styles.heading}>Congratulations</Text>
            <Text style={styles.subHeading}>You have cleared Level 1. Do you want to play next Level?</Text>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.buttonView} activeOpacity={0.7} onPress={() => props.navigation.goBack()}>
                    <Text style={styles.buttonText}>Try Again!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonView} activeOpacity={0.7} onPress={() => props.navigation.navigate(props.navigation.route.params.next)}>
                    <Text style={styles.buttonText}>Okay!</Text>
                </TouchableOpacity>
            </View>
            
            { renderSuccess() }
        </View>
    )
}


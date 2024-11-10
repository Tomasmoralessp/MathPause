import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableOpacityComponent } from 'react-native'
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg'
import { LinearGradient } from 'expo-linear-gradient'
import ConfettiCannon from 'react-native-confetti-cannon'

const SUCCESS_MESSAGE = '✅ Correct! You can access the app.'
const ERROR_MESSAGE = '❌ Incorrect. Try again.'

export default function MathProblem () {
  // Number of states needed:
  // TODO: 1. Problem description
  // TODO: 2. Problem math expression
  // TODO: 3. Problem answer
  // TODO: 4. Answer given by the user
  // TODO: 5. isCorrect to handle if correct or not
  const [probdescription, setProblemDescription] = useState('Evaluate the limit:')
  const [expression, setExpression] = useState('\\int x^2 \\, dx')
  const [solution, setSolution] = useState('1')

  const [userAnswer, setUserAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  // TODO: Fetch the math problem and store it to render it afterwards, handle errors too
  const getMathExpression = () => {
    fetch('http:// of my api goes here')
      .then(response => response.json())
      .then(data => setExpression(data.expression))
  }

  const getMathProblemDescription = () => {
    fetch('http:// of my api here')
      .then(response => response.json())
      .then(data => setProblemDescription(data.instructions))
  }

  const getProblemSolution = () => {
    fetch('http://your-api-url-goes-here')
      .then(response => response.json())
      .then(data => setSolution(data.solution))
  }

  const mathProblem = '\\lim_{x \\to 0} \\frac{\\sin x}{x}'

  // TODO: Check if the answer provided by the user is correct
  const handleSubmit = () => {
    const correct = userAnswer === solution
    setIsCorrect(correct)
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.probDescription}> {probdescription} </Text>
        <MathJaxSvg
        color='white'
        fontSize={18}
        style={styles.mathContainer}
        >
          {`$$${mathProblem}$$`}
        </MathJaxSvg>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Your answer'
          placeholderTextColor="#666"
          value={userAnswer}
          onChangeText={setUserAnswer}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={['#8B5CF6', '#EC4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Submit </Text>
          </LinearGradient>
        </TouchableOpacity>
        {isCorrect !== null && (
          <Text style={[styles.resultText, isCorrect ? styles.correct : styles.incorrect]}>
            {isCorrect ? SUCCESS_MESSAGE : ERROR_MESSAGE}
          </Text>
        )}
         {isCorrect && (
          <ConfettiCannon count={100} origin={{ x: 200, y: 0 }} fadeOut />
         )}
      </View>

  </View>
  )
}

// TODO: Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    gap: 15,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: 'white'
  },

  probDescription: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'

  },
  mathContainer: {
    color: 'white'
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#4B5563',
    color: '#F3F4F6',
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
    width: '100%'
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  correct: {
    color: '#10B981'
  },
  incorrect: {
    color: '#EF4444'
  }

})

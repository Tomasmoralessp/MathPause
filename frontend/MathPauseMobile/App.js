import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg'

export default function MathPauseScreen () {
  // Number of states needed:
  // TODO: 1. Problem description
  // TODO: 2. Problem math expression
  // TODO: 3. Problem answer
  // TODO: 4. Answer given by the user
  // TODO: 5. isCorrect to handle if correct or not
  // TODO: 6. showCursor: to make a blinking animation
  const [probdescription, setProblemDescription] = useState('Evaluate the limit:')
  const [expression, setExpression] = useState('\\int x^2 \\, dx')
  const [solution, setSolution] = useState('\\frac{1}{3} x^3 + C')

  const [userAnswer, setUserAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)
  const [showCursor, setShowCursor] = useState(true)

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
    setIsCorrect(true)
  }

  // TODO: Effect to make a blinking animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiamos de true a false cada 500 ms
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.probDescription}> {probdescription} </Text>
        <MathJaxSvg
        color='white'
        fontSize={30}
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
        {userAnswer === '' && (
          <Text style={[styles.cursor, showCursor ? styles.visible : styles.hidden]}> | </Text>
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
    width: '80%'
  },

  probDescription: {
    fontSize: 25,
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
  cursor: {
    position: 'absolute',
    fontSize: 18,
    color: '#6B7280'
  },
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }

})

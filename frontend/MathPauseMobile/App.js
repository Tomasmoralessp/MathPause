import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg'
import { LinearGradient } from 'expo-linear-gradient'
import ConfettiCannon from 'react-native-confetti-cannon'

const SUCCESS_MESSAGE = '✅ Correct! You can access the app.'
const ERROR_MESSAGE = '❌ Incorrect. Try again.'
const API_URL = 'http://192.168.176.66:1234'

export default function MathPauseScreen () {
  const [problem, setProblem] = useState({
    id: '276d1f6d-b315-466b-b832-2b2c5f5b88c2',
    instructions: 'Evaluate the limit.',
    expression: '\\lim_{x \\to 0} \\frac{\\sin(x)}{x}',
    gradeLevel: 'undergraduate',
    topic: 'calculus',
    problemType: 'limits',
    created: '2024-10-28',
    updated: '2024-10-28',
    solution: '1'
  })

  const [userAnswer, setUserAnswer] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)
  const [newProblemCounter, setNewProblemCounter] = useState(0)

  const fetchNewProblem = () => {
    fetch(`${API_URL}/problems/random`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setProblem(data))
      .catch(error => {
        console.error('Error fetching problem data:', error)
      })
  }

  useEffect(() => {
    fetchNewProblem()
    setUserAnswer('')
    setIsCorrect(null)
    setNewProblemCounter(0)
  }, [])

  const handleSubmit = () => {
    const correct = userAnswer === problem.solution
    setIsCorrect(correct)
    if (correct) {
      newProblemCounter((prevCounter) => {
        const newCounter = 0
        return newCounter
      })
    }
  }

  const handleNewProblem = () => {
    setNewProblemCounter((prevCounter) => {
      const newCounter = prevCounter + 1
      if (newCounter <= 3) {
        setIsCorrect(null)
        setUserAnswer('')
        fetchNewProblem()
      } else {
        console.log('Te quedaste sin problemas bro')
      }
      return newCounter
    }
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tagsContainer}>
        <Text style={styles.tag} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
          #{problem.topic}
        </Text>
        <Text style={styles.tag} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
          #{problem.problemType}
        </Text>
        <Text style={styles.tag} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
          #{problem.gradeLevel}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.probDescription}>{problem.instructions}</Text>
        <MathJaxSvg
          color='white'
          fontSize={25}
          style={styles.mathContainer}
        >
          {`$$${problem.expression}$$`}
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit}>
            <LinearGradient
              colors={['#8B5CF6', '#EC4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNewProblem} style={styles.newProblemButton}>
            <Text style={styles.newProblemButtonText}>{newProblemCounter < 3 ? '🔁' : '⛔️'}</Text>
          </TouchableOpacity>
        </View>
        {isCorrect !== null && (
          <Text style={[styles.resultText, isCorrect ? styles.correct : styles.incorrect]}>
            {isCorrect ? SUCCESS_MESSAGE : ERROR_MESSAGE}
          </Text>
        )}
        {isCorrect && (
          <ConfettiCannon count={100} origin={{ x: 200, y: 0 }} fadeOut />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  tag: {
    backgroundColor: '#374151',
    color: '#D1D5DB',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    marginRight: 8,
    marginBottom: 8,
    flexShrink: 1
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
    // You can add specific styles for the math container if needed
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
    width: '100%',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
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
  newProblemButton: {
    marginLeft: 10,
    padding: 10
  },
  newProblemButtonText: {
    fontSize: 24
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

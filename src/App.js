import {Component} from 'react'

import PrimeFilter from './context/PrimeFilter'

import PrimeVideo from './components/PrimeVideo'

import './App.css'

class App extends Component {
  state = {activeLanguage: 'All'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <PrimeFilter.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <PrimeVideo />
      </PrimeFilter.Provider>
    )
  }
}

export default App

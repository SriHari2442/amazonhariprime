import React from 'react'

const PrimeFilter = React.createContext({
  activeLanguage: 'All',
  changeLanguage: () => {},
})

export default PrimeFilter

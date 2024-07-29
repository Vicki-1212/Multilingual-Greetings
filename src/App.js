import {Component} from 'react'
import TabList from './components/TabList'
import LanguageItem from './components/LanguageItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  updateTabId = id => {
    this.setState({activeTab: id})
  }

  getFilteredProjects = () => {
    const {activeTab} = this.state
    const filteredProjects = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTab,
    )
    return filteredProjects
  }

  render() {
    const {activeTab} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(eachTab => (
            <TabList
              key={eachTab.id}
              tabDetails={eachTab}
              updateTabId={this.updateTabId}
              isActive={activeTab === eachTab.id}
            />
          ))}
        </ul>
        {filteredProjects.map(eachItem => (
          <LanguageItem key={eachItem.id} languageDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default App

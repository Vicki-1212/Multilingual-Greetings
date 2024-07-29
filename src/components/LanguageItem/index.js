import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <div className="image-container">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </div>
  )
}

export default LanguageItem

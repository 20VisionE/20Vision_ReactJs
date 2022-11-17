import PropTypes from 'prop-types'
import Button from '../Button/Button'


const Header = ({title}) => {
  
  return (
        <header className='header'>
            <h1>{title}</h1>
           <Button  color='green' text='Hello'/>
        </header>
  )
} 



Header.defaultProps={
    title:'Task Tracker',
  }

Header.propsType={
    title:PropTypes.string
}
export default Header

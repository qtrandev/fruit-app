import { connect } from 'react-redux'
import { enableFruit } from './actions'
import React from 'react'
import PropTypes from 'prop-types'

const ItemList = ({ fruits, enableFruit }) => (
  <ul>
    {fruits.map(fruit =>
      <li 
        className={fruit.enabled? `fruit-toggle-enabled`:`fruit-toggle`} 
        key={fruit.desc}
        onClick= {(e) => {
          enableFruit(fruit.id);
        }}>
          {fruit.name}<br/><img src={fruit.image} alt={fruit.desc}/>
      </li>
    )}
  </ul>
)

ItemList.propTypes = {
  fruits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selection: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      enabled: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  fruits: state.fruits
})

const mapDispatchToProps = dispatch => ({
  enableFruit: id => dispatch(enableFruit(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
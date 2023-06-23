import './index.css'

const AlertButton = (props) => {
    return (
        <button 
        className='btn' 
        onClick={() => alert(`A label desse botão é "${props.label}"`)}>
            Discover my label
        </button>
    )
}

AlertButton.defaultProps = {
    label: 'Clique aqui'
}

export default AlertButton
import './button.css'

const showAlert = (label) => {
    alert(`A label desse botão é "${label}"`)
}

const Button = (props) => {
    return (
        <button 
        className='btn' 
        onClick={()=>showAlert(props.label)}>
            Discover my label
        </button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button
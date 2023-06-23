import './index.css'

const StyledParagraph = ({children,color,textTransform}) => {
    return(
        <p 
        className='text' 
        style={{
                color: color,
                textTransform: textTransform
            }}>
        {children}
       </p>
    )
}

StyledParagraph.defaultProps = {
    color: '#ff5252',
    textTransform: 'uppercase'
}

export default StyledParagraph
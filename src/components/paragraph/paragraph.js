import './paragraph.css'

const Paragraph = ({children,color,textTransform}) => {
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

Paragraph.defaultProps = {
    color: '#ff5252',
    textTransform: 'uppercase'
}

export default Paragraph
import Paragraph  from './components/paragraph/paragraph';
import Button from './components/button/button'

function App() {
  return (
    <>
      <Paragraph>
      "A inteligência artificial (IA) é uma área da ciência da computação que se concentra em criar sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana. Através de algoritmos e aprendizado de máquina, a IA permite que os computadores processem dados, reconheçam padrões e tomem decisões.  
      </Paragraph>

      <Paragraph color='#fff'>
        Com aplicações em diversos setores, como assistentes virtuais, carros autônomos e diagnósticos médicos, a IA está transformando a maneira como interagimos com a tecnologia e impulsionando avanços significativos em diversas áreas."
      </Paragraph>

      <Button label='Estive te esperando 😛'/>
    </>
  );
}

export default App;

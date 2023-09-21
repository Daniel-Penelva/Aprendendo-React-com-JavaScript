## O que é JSX no React?

JSX é uma extensão de sintaxe para JavaScript que é comumente usada no React, uma biblioteca JavaScript para construir interfaces de usuário (UI) interativas e reativas. JSX permite que você escreva código que se parece muito com HTML dentro do JavaScript, facilitando a criação de componentes de UI no React.

### Características importantes do JSX:

1. **Sintaxe semelhante ao HTML**: Você pode escrever tags HTML diretamente no código JavaScript, o que torna o código mais legível e familiar para desenvolvedores que estão acostumados a trabalhar com HTML.

   Exemplo de JSX:
   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

2. **Expressões JavaScript**: Você pode incorporar expressões JavaScript dentro de elementos JSX usando chaves `{}`. Isso permite que você insira lógica dinâmica no seu código.

   Exemplo de expressão JavaScript em JSX:
   ```jsx
   const name = "John";
   const element = <h1>Hello, {name}!</h1>;
   ```

3. **Componentes JSX**: Você pode criar componentes JSX personalizados, que são como tags HTML personalizadas. Isso permite que você reutilize e componha partes da interface do usuário.

   Exemplo de componente JSX:
   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>;
   }
   const element = <Greeting name="John" />;
   ```

4. **Transpilação**: O código JSX não é entendido diretamente pelos navegadores. Portanto, é necessário usar uma ferramenta de transpilação, como o Babel, para converter o código JSX em JavaScript puro que os navegadores possam entender.

O uso de JSX no React torna mais fácil e intuitiva a criação de interfaces de usuário complexas, tornando o código mais legível e manutenível. No entanto, é importante lembrar que, embora JSX se assemelhe a HTML, ele é processado como JavaScript e, portanto, pode conter lógica dinâmica e interações com dados do aplicativo.

## Uso de `className` no React

Ao trabalhar com componentes React e JSX, a maneira correta de definir classes CSS em elementos HTML é usando o atributo `className`, em vez de `class`. Isso ocorre porque o React usa o JavaScript e JSX, e `class` é uma palavra-chave reservada em JavaScript para definir classes.

### Sintaxe correta:

```jsx
const MyComponent = () => {
  return <div className="my-class">Conteúdo do componente</div>;
};
```

No exemplo acima, estamos definindo uma classe CSS chamada "my-class" para o elemento `div` dentro do componente `MyComponent`. Usamos `className` em vez de `class` para evitar conflitos com a sintaxe JavaScript.

### Como definir várias classes:

Se você deseja atribuir várias classes a um elemento, você pode usar uma string que contenha todas as classes desejadas, separadas por espaços:

```jsx
const MyComponent = () => {
  return <div className="class1 class2 class3">Conteúdo do componente</div>;
};
```

### Expressões JavaScript no `className`:

Você também pode usar expressões JavaScript dentro do atributo `className` se precisar de classes dinâmicas com base em lógica:

```jsx
const isActive = true;
const myClass = isActive ? "active" : "inactive";

const MyComponent = () => {
  return <div className={myClass}>Conteúdo do componente</div>;
};
```

Nesse exemplo, a classe CSS será "active" se `isActive` for `true` e "inactive" se `isActive` for `false`.

Lembre-se de que o React usa o atributo `className` para definir classes CSS em elementos JSX, garantindo a integração adequada entre JavaScript e HTML, sem conflitos de nomes de palavras-chave.

## Componentes no React

### O que são componentes?

Em React, os componentes são blocos de construção fundamentais para a construção de interfaces de usuário (UI) reutilizáveis e compostas. Eles representam partes isoladas e autônomas de uma interface de usuário, cada um com sua própria lógica e funcionalidade. Os componentes podem variar de pequenos elementos, como botões ou ícones, a componentes maiores, como formulários ou barras laterais de navegação.

### Características principais dos componentes:

1. **Reutilização**: Os componentes são altamente reutilizáveis. Você pode criar um componente uma vez e usá-lo em várias partes do seu aplicativo.

2. **Composição**: Você pode criar interfaces de usuário complexas compondo componentes menores em componentes maiores. Isso facilita a organização e a manutenção do código.

3. **Encapsulamento**: Cada componente encapsula seu próprio estado (se necessário) e comportamento. Isso ajuda a manter a separação de preocupações e a prevenir vazamentos de estado.

4. **Estado**: Os componentes podem ter estado interno que é gerenciado pelo React. Isso permite que os componentes reajam às mudanças de dados e re-renderizem automaticamente quando o estado é atualizado.

5. **Props (Propriedades)**: Os componentes podem receber dados externos por meio de propriedades (props). As props são passadas de pai para filho e são usadas para personalizar o comportamento e a aparência dos componentes.

### Como criar um componente no React:

Criar um componente no React é bastante simples. Você pode criar componentes funcionais ou componentes de classe, dependendo das necessidades do seu aplicativo.

#### Componentes Funcionais:

Os componentes funcionais são funções JavaScript que retornam elementos JSX. Aqui está um exemplo:

```jsx
import React from 'react';

function MeuComponente(props) {
  return <div>{props.texto}</div>;
}

export default MeuComponente;
```

#### Componentes de Classe:

Os componentes de classe são classes JavaScript que estendem a classe `React.Component` e implementam um método `render()`. Aqui está um exemplo:

```jsx
import React, { Component } from 'react';

class MeuComponente extends Component {
  render() {
    return <div>{this.props.texto}</div>;
  }
}

export default MeuComponente;
```

### Como usar um componente:

Depois de criar um componente, você pode usá-lo em outros lugares do seu aplicativo. Basta importá-lo e usá-lo como uma tag JSX.

```jsx
import React from 'react';
import MeuComponente from './MeuComponente';

function App() {
  return (
    <div>
      <h1>Meu Aplicativo React</h1>
      <MeuComponente texto="Olá, Mundo!" />
    </div>
  );
}

export default App;
```

Neste exemplo, o componente `MeuComponente` é usado dentro do componente `App`.

Essas são as noções básicas sobre componentes no React. Eles desempenham um papel fundamental na criação de interfaces de usuário dinâmicas e reutilizáveis em aplicativos React. À medida que você se aprofunda no React, pode explorar mais recursos, como estados, ciclos de vida dos componentes e hooks para criar componentes mais avançados e interativos.

## Props no React

As props (abreviação de "propriedades") são um conceito fundamental no React. Elas são usadas para passar dados de um componente pai para um componente filho. As props permitem que você configure e personalize componentes filhos e tornem sua interface mais flexível e reutilizável. Aqui estão as principais características e como usar props no React:

## Características das Props no React:

1. **Passagem de Dados**: As props permitem que você passe dados de um componente pai para um componente filho. Isso é fundamental para compartilhar informações entre diferentes partes da sua aplicação.

2. **Somente Leitura**: As props são somente leitura (read-only) dentro do componente filho. Isso significa que o componente filho não pode modificar as props que recebe do pai. Elas são consideradas imutáveis no contexto do componente filho.

3. **Personalização**: As props são usadas para personalizar a renderização e o comportamento do componente filho com base nas necessidades do componente pai. Isso torna os componentes mais flexíveis e reutilizáveis.

## Como passar props para um componente:

Aqui está um exemplo de como passar props para um componente React:

```jsx
// Componente pai
import React from 'react';
import MeuComponente from './MeuComponente';

function App() {
  return (
    <div>
      <h1>Meu Aplicativo React</h1>
      <MeuComponente texto="Olá, Mundo!" />
    </div>
  );
}

export default App;
```

No exemplo acima, o componente `App` está passando uma prop chamada `texto` para o componente `MeuComponente`.

## Como acessar props dentro de um componente:

Dentro do componente filho (`MeuComponente`, no exemplo acima), você pode acessar as props usando o objeto `props`. Por exemplo:

```jsx
import React from 'react';

function MeuComponente(props) {
  return <div>{props.texto}</div>;
}

export default MeuComponente;
```

No componente filho, estamos acessando a prop `texto` usando `props.texto` e renderizando seu valor.

## Passando múltiplas props:

Você pode passar quantas props forem necessárias para um componente. Basta adicioná-las como atributos quando você utiliza o componente:

```jsx
<MeuComponente texto="Olá, Mundo!" cor="azul" tamanho={16} />
```

No exemplo acima, estamos passando três props diferentes: `texto`, `cor`, e `tamanho`.

## Props padrão (Default Props):

Você também pode definir valores padrão para props usando a propriedade `defaultProps`. Isso é útil quando você deseja que um componente funcione corretamente, mesmo se algumas props não forem fornecidas:

```jsx
import React from 'react';

function MeuComponente(props) {
  return (
    <div>
      <p>{props.texto}</p>
      <p>Cor: {props.cor}</p>
      <p>Tamanho: {props.tamanho}</p>
    </div>
  );
}

MeuComponente.defaultProps = {
  cor: 'preto',
  tamanho: 12,
};

export default MeuComponente;
```

Neste exemplo, definimos valores padrão para as props `cor` e `tamanho`, para que sejam usadas se não forem fornecidas.

As props são um dos conceitos fundamentais do React e desempenham um papel crucial na criação de componentes reutilizáveis e flexíveis, permitindo a personalização da interface do usuário com base nos dados fornecidos pelo componente pai.

## CSS Modules
O CSS Modules é uma abordagem para escrever estilos CSS em aplicativos React (e em outros tipos de projetos JavaScript) que permite o escopo local de estilos, tornando mais fácil evitar conflitos de nomes de classe e facilitando a manutenção de estilos em projetos grandes. Ele é especialmente útil quando você deseja que os estilos de um componente não afetem inadvertidamente outros componentes.

Características e como usar o CSS Modules em React:

## Características do CSS Modules:

1. **Escopo local**: Os estilos definidos em um arquivo CSS Module são automaticamente escopados para o componente ou módulo em que são importados. Isso significa que os nomes de classe definidos em um módulo não entram em conflito com os nomes de classe de outros módulos ou componentes.

2. **Isolamento de estilos**: O CSS Modules permite que você isole os estilos de cada componente, facilitando a manutenção e evitando vazamentos de estilos para outros componentes.

3. **Uso semântico de nomes de classe**: Você pode usar nomes de classe significativos e semânticos em seus estilos, em vez de se preocupar com a colisão de nomes de classe globalmente.

4. **Autogeração de nomes de classe exclusivos**: O CSS Modules normalmente gera automaticamente nomes de classe únicos para cada estilo definido, o que elimina a necessidade de criar nomes de classe manualmente.

## Como usar o CSS Modules em React:

1. **Configuração**: Para começar a usar o CSS Modules em um projeto React, você deve configurar sua ferramenta de construção (como Webpack ou Create React App) para processar arquivos CSS com a extensão `.module.css`. Isso geralmente é configurado automaticamente em muitas configurações modernas de projetos React.

2. **Criando um arquivo CSS Module**: Crie um arquivo CSS com a extensão `.module.css` que contenha os estilos específicos para o seu componente. Por exemplo, `MeuComponente.module.css`:

   ```css
   /* MeuComponente.module.css */
   .container {
     background-color: #f0f0f0;
     padding: 16px;
   }
   .title {
     font-size: 24px;
   }
   ```

3. **Importando estilos em um componente**: No seu componente React, você pode importar os estilos diretamente e usar as classes definidas no arquivo CSS Module:

   ```jsx
   import React from 'react';
   import styles from './MeuComponente.module.css';

   function MeuComponente() {
     return (
       <div className={styles.container}>
         <h1 className={styles.title}>Meu Componente</h1>
       </div>
     );
   }

   export default MeuComponente;
   ```

4. **Uso das classes CSS**: Dentro do componente, você pode usar as classes importadas `styles` como qualquer outra classe CSS.

Dessa forma, os estilos definidos no arquivo CSS Module são aplicados apenas ao componente `MeuComponente` e não afetam outros componentes. Isso ajuda a manter a organização e o isolamento de estilos em projetos React maiores, tornando mais fácil a manutenção e evitando conflitos de nomes de classe globais.
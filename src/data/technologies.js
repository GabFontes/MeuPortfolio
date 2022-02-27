import html5 from '../images/html.png';
import css3 from '../images/css.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import docker from '../images/docker.png';
import git from '../images/github.png';
import redux from '../images/redux.png';
import jest from '../images/jest.png';
import mysql from '../images/mysql.png';

const dataSpecialties = [
  {
    name: 'HTML',
    description: 'O Html é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.',
    image: html5,
    knowmore: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
  },
  {
    name: 'CSS',
    description: 'Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.',
    image: css3,
    knowmore: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  {
    name: 'JAVASCRIPT',
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
    image: javascript,
    knowmore: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  {
    name: 'REACT',
    description: 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    image: react,
    knowmore: 'https://pt-br.reactjs.org/',
  },
  {
    name: 'DOCKER',
    description: 'Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.',
    image: docker,
    knowmore: 'https://www.docker.com/',
  },
  {
    name: 'GITHUB',
    description: 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.',
    image: git,
    knowmore: 'https://github.com/',
  },
  {
    name: 'REDUX',
    description: 'Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário.',
    image: redux,
    knowmore: 'https://redux.js.org/',
  },
  {
    name: 'JEST',
    description: 'Jest é uma estrutura de teste JavaScript mantida pela Meta com foco na simplicidade e suporte para grandes aplicativos da web.',
    image: jest,
    knowmore: 'https://jestjs.io/pt-BR/',
  },
  {
    name: 'MYSQL',
    description: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation',
    image: mysql,
    knowmore: 'https://jestjs.io/pt-BR/',
  },
];

export default dataSpecialties;
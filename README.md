# 🌴 Paraty Explorer App - Demo de Navegação 🛳️

Bem-vindo ao Paraty Explorer App! Este é um projeto React Native simples, criado com **Expo**, para demonstrar de forma clara e objetiva o uso do **React Navigation com Stack Navigator** e uma boa **componentização** de telas.

Se você está aprendendo React Native ou quer um exemplo prático de como estruturar a navegação em pilha, este projeto é um ótimo ponto de partida!

## ✨ O que você vai encontrar aqui?

* **Navegação Fluida**: Transição suave entre telas usando o Stack Navigator.
* **Componentes Organizados**: Cada tela (`TelaInicial`, `TelaRestaurantes`, `TelaPasseios`, `TelaHospedagem`) é um componente individual, facilitando a manutenção e o entendimento.
* **Interface Temática**: Uma pequena amostra de como seria um app para explorar a cidade de Paraty.
* **Código Claro**: Foco em demonstrar os conceitos de navegação sem complexidade extra.

## 📍 Telas da Aplicação

O app possui as seguintes telas:

1.  `TelaInicial`:
    * Apresenta a cidade de Paraty.
    * Oferece opções para explorar: Restaurantes, Passeios e Hospedagem.
    * Ponto de entrada da navegação.

2.  `TelaRestaurantes`:
    * Destinada a listar ou mostrar informações sobre restaurantes. 

3.  `TelaPasseios`:
    * Destinada a listar ou mostrar informações sobre passeios turísticos. 

4.  `TelaHospedagem`:
    * Destinada a listar ou mostrar informações sobre opções de hospedagem. 

## 🚀 Como Executar o Projeto

Para rodar este projeto em sua máquina:

1.  **Pré-requisitos:**
    * [Node.js](https://nodejs.org/) (versão LTS recomendada)
    * [Yarn](https://classic.yarnpkg.com/en/docs/install) ou NPM (já vem com o Node.js)
    * [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`

2.  **Clone este repositório:**
    ```bash
    git clone https://github.com/MatheusArruda200/paraty
    cd paraty
    ```

3.  **Instale as dependências:**
    ```bash
    yarn install
    # ou
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento Expo:**
    ```bash
    expo start
    ```
    Isso abrirá o Metro Bundler no seu navegador. Você poderá então:
    * Escanear o QR code com o app Expo Go (Android) ou Câmera (iOS) para rodar no seu dispositivo físico.
    * Ou rodar em um emulador/simulador (pressionando `a` para Android ou `i` para iOS no terminal).

## 🛠️ Tecnologias Utilizadas

* **React Native**: Framework para criar apps nativos com JavaScript e React.
* **Expo**: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento React Native.
* **React Navigation (`@react-navigation/stack`)**: Para a navegação em pilha entre as telas.
* **JavaScript** (mas facilmente adaptável para TypeScript, se preferir para projetos futuros!)

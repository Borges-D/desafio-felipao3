// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para exibir informações sobre o herói
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
    }
  
    // Método para o herói atacar
    atacar() {
      let ataque;
  
      // Definindo o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando uma instância da classe Heroi
  const meuHeroi = new Heroi("Aragorn", 30, "guerreiro");
  
  // Utilizando a instância
  meuHeroi.exibirInformacoes(); // Saída: Nome: Aragorn, Idade: 30, Tipo: guerreiro
  meuHeroi.atacar();            // Saída: O guerreiro atacou usando espada
  
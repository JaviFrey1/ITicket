class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
  
      const lowercase = message.toLowerCase();
      if (!lowercase) {
        this.actionProvider.vacio();
      }
      if (lowercase.includes("tukiteck")) {
        this.actionProvider.hacerChangas();
      }
      if (lowercase.includes("hi")) {
        this.actionProvider.saludar();
      }
      if (lowercase.includes("hola")) {
        this.actionProvider.saludar();
      }
      if (lowercase.includes("buenas")) {
        this.actionProvider.saludar();
      }
      if (lowercase.includes("buenos")) {
        this.actionProvider.saludar();
      }
      if (lowercase.includes("sale")) {
        this.actionProvider.ayudaPublicarNecesidad();
      }
      if (lowercase.includes("ticket")) {
        this.actionProvider.ayudaPublicarNecesidad();
      }
      if (lowercase.includes("public")) {
        this.actionProvider.ayudaPublicarOfrecer();
      }
      if (lowercase.includes("posteo")) {
        this.actionProvider.ayudaPublicarOfrecer();
      }
      if (lowercase.includes("aviso")) {
        this.actionProvider.ayudaPublicarOfrecer();
      }
      if (lowercase.includes("registr")) {
        this.actionProvider.registro();
      }
      if (lowercase.includes("gracias")) {
        this.actionProvider.palabrasGracias();
      }
      if (lowercase.includes("listo")) {
        this.actionProvider.palabrasGracias2();
      }
      if (lowercase.includes("puto")) {
        this.actionProvider.palabrasInsultos();
      }
      if (lowercase.includes("gil")) {
        this.actionProvider.palabrasInsultos();
      }
      if (lowercase.includes("forro")) {
        this.actionProvider.palabrasBroma();
      }
      if (lowercase.includes("duda")) {
        this.actionProvider.guiaLinks();
      }
      if (lowercase.includes("henry")) {
        this.actionProvider.plusHenry();
      }
      if (lowercase.includes("ayuda")) {
        this.actionProvider.ayudaOfrecer();
      }
      if (lowercase.includes("ayuda")) {
        this.actionProvider.ayudaOfrecer1();
      }
      if (lowercase.includes("ayuda")) {
        this.actionProvider.ayudaOfrecer2();
      }
      if (lowercase.includes("ayuda")) {
        this.actionProvider.ayudaOfrecer3();
      }
      if (lowercase.includes("vender")) {
        this.actionProvider.promocionar();
      }
    }
  }
  
  export default MessageParser;
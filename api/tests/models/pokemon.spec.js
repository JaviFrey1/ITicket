const { Pokemon, conn } = require("../../src/db.js");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se pudo conectar a la base de datos", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    describe("Name", () => {
      it("arroja un error si name es null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("Funciona si el name es valido", () => {
        Pokemon.create({ name: "Pikachu" })
      });
    });
  });

  describe("STATS", () => {
    it("La vida debe ser un numero", (done) => {
      Pokemon.create({ name: "Pikachu", hp: "asd" })
        .then(() => done(new Error("Vida no es un numero")))
        .catch(() => done());
    });

    it("La fuerza debe ser un numero", (done) => {
      Pokemon.create({ name: "Pikachu", attack: "asd" })
        .then(() => done(new Error("Fuerza no es un numero")))
        .catch(() => done());
    });

    it("La defensa debe ser un numero", (done) => {
      Pokemon.create({ name: "Pikachu", defense: "asd" })
        .then(() => done(new Error("Defensa no es un numero")))
        .catch(() => done());
    });

    it("La velocidad debe ser un numero", (done) => {
      Pokemon.create({ name: "Pikachu", speed: "asd" })
        .then(() => done(new Error("Velocidad no es un numero")))
        .catch(() => done());
    });

    it("La altura debe ser un numero", (done) => {
      Pokemon.create({ name: "Pikachu", height: "asd" })
        .then(() => done(new Error("Altura no es un numero")))
        .catch(() => done());
    });

    it("El peso debe ser un numero", (done) => {
      Pokemon.create({ name: "Pikachu", weight: "asd" })
        .then(() => done(new Error("Peso no es un numero")))
        .catch(() => done());
    });

    it("Funciona si no se pasa un valor algun valor", () => {
      Pokemon.create({ name: "Pikachu" });
      Pokemon.create({ name: "Pikachu", hp: 100});
      Pokemon.create({ name: "Pikachu", defense: 100 });
      Pokemon.create({ name: "Pikachu", speed: 100 });
      Pokemon.create({ name: "Pikachu", height: 100 });
    });

  });
});




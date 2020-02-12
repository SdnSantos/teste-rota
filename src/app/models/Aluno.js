import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        nasc: Sequelize.DATE,
        nome_mae: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
export default Aluno;

import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    if (!req.isAdmin) {
      return res.status(400).json({ error: 'You must be admin' });
    }

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.number().required(),
      altura: Yup.number().required(),
      peso: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, nome, idade, email, altura, peso } = await Student.create(
      req.body
    );

    return res.json({ id, nome, idade, email, altura, peso });
  }

  async update(req, res) {
    if (!req.isAdmin) {
      return res.status(400).json({ error: 'You must be admin' });
    }

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      idade: Yup.number().required(),
      altura: Yup.number().required(),
      peso: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const student = await Student.findByPk(req.params.id);

    const { id, nome, idade, email, altura, peso } = student.update(req.body);

    return res.json({ id, nome, idade, email, altura, peso });
  }
}

export default new StudentController();

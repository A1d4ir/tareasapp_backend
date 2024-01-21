import Tarea from "../models/Tarea.js"

const save = async (req, res) => {

  const { titulo, descripcion, fechaVencimiento } = req.body;

  try {
    const tareaGuardada = await Tarea.create({
      titulo,
      descripcion,
      fechaVencimiento
    });

    await tareaGuardada.save();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

  res.status(201).send();

};

const tareas = async(req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.send(tareas);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const updateTarea = async (req, res) => {
  const { titulo, descripcion, fechaVencimiento} = req.body;
  const id = req.params['id'];
  try {
    const tareaActualizada = await Tarea.findByPk(id);
    tareaActualizada.titulo = titulo ? titulo : tareaActualizada.titulo;
    tareaActualizada.descripcion = descripcion ? descripcion : tareaActualizada.descripcion;
    tareaActualizada.fechaVencimiento = fechaVencimiento ? fechaVencimiento : tareaActualizada.fechaVencimiento;
    await tareaActualizada.save();
    res.send(tareaActualizada);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const deleteTarea = async (req, res) => {
  const id = req.params["id"];
  const tareaEliminada = await Tarea.findByPk(id);
  if(tareaEliminada) {
    try {
      await tareaEliminada.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  } else {
    res.status(404).send();
  }
}

export {
  save,
  tareas,
  updateTarea,
  deleteTarea
};
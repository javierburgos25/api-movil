const cn = require("../../db");

class Store {
  async Obtener_cargos() {
    let poll = await cn.connectioMssql();
    return await poll.query(
      `SELECT IdCargo, Codigo, Nombre, ActividadId FROM Cargos WHERE IdEmpresa = 2 AND ActividadId is not Null;`
    );
  }
}

export default new Store();

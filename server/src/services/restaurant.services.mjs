import db from '../config/db.mjs'


const showRealizan = async ()=>{
    const sql = `SELECT cliente.nombre as clienteNombre, cliente.telefono, fecha , mesa, Npersonas, empleados.nombre as empleadoNombre FROM realizan
    INNER JOIN reservas ON reservas.idReserva = realizan.idReserva
    INNER JOIN cliente ON cliente.idCliente = realizan.idCliente
    INNER JOIN empleados ON empleados.idEmpleado = realizan.idEmpleado;`
    
    const [result] = await db.query(sql)
    return result
    
}

const showTable = async (nameTable) =>{
    const sql = 'SELECT * FROM '+nameTable

    const [result] = await db.query(sql)

    return result
}

const insertCliente = async (name, lastName, telephone) =>{
    const sql = 'INSERT INTO cliente (nombre,apellidos,telefono) VALUE (?,?,?);'
    
    const [result] = await db.query(sql,[name, lastName,telephone])

    return result
}

const insertEmpleado = async (name, lastName,salary, ocupation, telephone) =>{
    const sql = 'INSERT INTO empleados (nombre,apellido,salario,ocupacion,telefono) VALUES (?,?,?,?,?);'
    
    const [result] = await db.query(sql,[name, lastName,salary,ocupation,telephone])

    return result
}

const insertReserva = async(date, table,numPerson) =>{
    const sql = 'INSERT INTO reservas (fecha,mesa,Npersonas) VALUES (?,?,?);'
    
    const [result] = await db.query(sql,[date, table,numPerson])

    return result
}

const insertRealizar = async(employe, booking, client) =>{
    const sql = "INSERT INTO realizan (idEmpleado,idReserva,idCliente) VALUES(?,?,?);"

    const [result] = await db.query(sql,[employe,booking,client])

    return result
}

const mostselter = async  (limit) =>{
    console.log(limit)
    const sql = `SELECT platos.nombre as platillos, count(platos.nombre) AS cuenta FROM pide 
    INNER JOIN cliente
    ON pide.idCliente= cliente.idCliente
    INNER JOIN platos
    ON pide.idPlato = platos.idPlato
    GROUP BY platillos
    ORDER BY cuenta DESC
    LIMIT 0,`+limit+`;`

    const [result] = await db.query(sql)
    return result
}

const allergens = async (plato) =>{
    const sql =`SELECT platos.nombre AS platillo, alergenos FROM compuesto_por
    INNER JOIN platos
    ON compuesto_por.idPlato = platos.idPlato
    INNER JOIN productos
    ON productos.idProducto = compuesto_por.idProducto
    WHERE platos.nombre = ?
    group by alergenos;`

    console.log(plato)
    const [result] = await db.query(sql,[plato])

    

    return result


}

const insertFood = async (nombre, precio) =>{
    const sql ="INSERT INTO platos (nombre, precio) VALUE(?,?);"
    const [result] = await db.query(sql,[nombre,precio])

    return result
}

const insertCompuesto = async (plato, producto) =>{
    const sql = "INSERT INTO compuesto_por VALUES(?,?);"
    const[result] = await db.query(sql,[plato, producto])

    return result
}

const deletePlato = async (id) =>{
    const sql = "DELETE FROM platos WHERE idPlato=?;"
    const[result] = await db.query(sql,[id])

    return result
}

const deleCompuesto = async (id) =>{
    const sql = "DELETE FROM compuesto_por WHERE idPlato=?;"
    const[result] = await db.query(sql,[id])

    return result
}

const updateEmployee = async (nombre,apellido,salario,ocupacion,telefono, id) =>{
    const sql ="UPDATE empleados SET nombre = ?, apellido = ?, salario = ? , ocupacion = ? ,telefono = ? WHERE idEmpleado = ?;"

    const [result] = await db.query(sql,[nombre,apellido,salario,ocupacion,telefono, id])

    return result
}

const deleteEmployee = async (id) =>{
    const sql ="DELETE FROM empleados WHERE idEmpleado = ?;"

    const [result] = await db.query(sql,[id])

    return result
}

const getEmployeById = async(id) =>{
    const sql = "SELECT * FROM empleados WHERE idEmpleado = ?;"

    const [result] = await db.query(sql,[id])
    
    return result
}

const getEmployeByName = async(name) =>{
    const sql = "SELECT * FROM empleados WHERE nombre = ?;"

    const [result] = await db.query(sql,[name])
    
    return result
}

const insertProduct = async(nombre,alergenos,coste,proveedores)=>{
    const sql ="INSERT INTO productos (nombre, alergenos, coste, idProveedores) VALUES (?,?,?,?);"

    const [result] = await db.query(sql,[nombre, alergenos,coste,proveedores])

    return result
}
const insertProveedor = async(nombre,correo,direccion)=>{
    const sql ="INSERT INTO proveedores (nombre,correo,direccion) VALUES(?,?,?);"

    const[result] = await db.query(sql,[nombre,correo, direccion])

    return result
}
const getProductProvedor = async()=>{
    const sql = "SELECT idProducto,productos.nombre as producto,alergenos,coste,proveedores.nombre as proveedor, correo, direccion FROM productos LEFT JOIN proveedores on productos.idProducto = proveedores.idProveedores;"

    const [result] =await db.query(sql)

    return result
}
export default {
    showRealizan,
    showTable,
    insertCliente,
    insertEmpleado,
    insertReserva,
    insertRealizar,
    mostselter,
    allergens,
    insertFood,
    insertCompuesto,
    deletePlato,
    deleCompuesto,
    updateEmployee,
    deleteEmployee,
    getEmployeById,
    getEmployeByName,
    insertProduct,
    insertProveedor,
    getProductProvedor
    
    
}
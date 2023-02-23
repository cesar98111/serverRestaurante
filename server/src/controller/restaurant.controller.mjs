import Services from '../services/restaurant.services.mjs'
import httpCodes from '../error/httpCodes.js'


const showAllRelation = async(req, res) =>{
    
    try{
        const data = await Services.showRealizan()
        res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
        res.send({
            statusCode:
            !data || data.length === 0
            ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 
            !data || data.length === 0
            ? "not found": "ok",
            message:
            !data || data.length === 0
            ? "datos encontrado con exito":"datos no encontrados",
            data
        })
        
    }catch(err){
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
        res.send({
            statusCode:httpCodes.INTERNAL_SERVER_ERROR,
            statusMessage: "internal server error",
            message:"error del servidor fallo interno"
        })
    }
}

const showTable = async(req, res) =>{
    
    const {name} = req.params
    if(!name){
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode:httpCodes.BAD_REQUEST,
            statusMessage:"bad request",
            message:"parametros requeridos"
        })
    }else{
        try{
            const data = await Services.showTable(name)
            res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
            res.send({
                statusCode:
                !data || data.length === 0
                ? httpCodes.NOT_FOUND : httpCodes.OK,
                statusMessage: 
                !data || data.length === 0
                ? "not found": "ok",
                message:
                !data || data.length === 0
                ? "datos encontrado con exito":"datos no encontrados",
                data
            })
            
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }
    
}
const insertClient = async (req, res)=>{
    const {name, lastName, telephone} = req.body
    console.log(name)
    if (!name || !lastName || !telephone){
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }else{
        try{
            const data = await Services.insertCliente(name,lastName,telephone)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
            
        }
    }
}

const insertEmploye = async (req, res) =>{
    const {name, lastName, salary ,ocupation, telephone} = req.body
    console.log(name)
    console.log(lastName)
    if (!name || !lastName || !salary || !ocupation || !telephone){
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }else{
        try{
            const data = await Services.insertEmpleado(name,lastName, salary ,ocupation, telephone)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
            
        }
    }
}

const insertReservas = async (req, res) =>{
    const {date, table, numPerson} = req.body
    if (!date || !table || !numPerson){
        
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }else{
        try{
            const data = await Services.insertReserva(date, table, numPerson)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
            
        }
    }
}

const insertDo = async (req, res)=>{
    const {employe, booking, client} = req.body
    if (!employe || !booking || !client){
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }else{
        try{
            const data = await Services.insertRealizar(employe, booking, client)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
            
        }
    }
}
const alergenos = async(req, res)=>{
    console.log("hola")
    const {nombre} = req.params
    if(nombre){
        try{
            const data = await Services.allergens(nombre)
            res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
            res.send({
                statusCode:
                !data || data.length === 0
                ? httpCodes.NOT_FOUND : httpCodes.OK,
                statusMessage: 
                !data || data.length === 0
                ? "not found": "ok",
                message:
                !data || data.length === 0
                ? "datos encontrado con exito":"datos no encontrados",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
            res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
            })
    }
}

    


const productMost = async(req, res) =>{
    console.log("hola")
    const {limit} = req.params
    if(limit){
        try{
            const data = await Services.mostselter(limit)
            res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
            res.send({
            statusCode:
            !data || data.length === 0
            ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 
            !data || data.length === 0
            ? "not found": "ok",
            message:
            !data || data.length === 0
            ? "datos encontrado con exito":"datos no encontrados",
            data
        })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
    
}

const pushFood = async(req, res) =>{
    const{nombre, precio} =req.body
    console.log(nombre, precio)
    if(nombre || precio){
        try{
            const data = await Services.insertFood(nombre,precio)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }

}


const Compuesto = async (req, res) =>{
    const{plato,producto} = req.body
    if(plato || producto){
        try{
            const data = await Services.insertCompuesto(plato,producto)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }


}

const DropFood = async(req, res) =>{
    const {id} = req.params

    if(id){
        try{
            const data = await Services.deletePlato(id)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
}

const DropCompuesto = async(req, res) =>{
    const {id} = req.params

    if(id){
        try{
            const data = await Services.deleCompuesto(id)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
}

const updateControllerEmploye = async (req, res) =>{
    const {nombre, apellido,salario,ocupation,telefono} = req.body
    const {id} = req.params
    console.log("caca")
    if(nombre || apellido || salario || ocupation || telefono || id){
        try{
            const data =await Services.updateEmployee(nombre, apellido, salario, ocupation, telefono, id)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
}
const deleteControllerEmploye = async (req, res) =>{
    const {id} = req.params
    
    if(id){
        try{
            
            const data = await Services.deleteEmployee(id)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            })  
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
}

const getEmployeByIdController = async (req, res) =>{
    const {id} = req.params
    console.log(id)
    if(id){
        try{
            const data = await Services.getEmployeById(id)
            console.log(data)
            res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
            res.send({
                statusCode:
                !data || data.length === 0
                ? httpCodes.NOT_FOUND : httpCodes.OK,
                statusMessage: 
                !data || data.length === 0
                ? "not found": "ok",
                message:
                !data || data.length === 0
                ? "datos encontrado con exito":"datos no encontrados",
                data
            })
            
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            }) 
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
}

const getEmployeByNameController = async(req, res) =>{
    const {name} = req.params
    if(name){
        try{
            const data = await Services.getEmployeByName(name)
            console.log(data)
            res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
            res.send({
                statusCode:
                !data || data.length === 0
                ? httpCodes.NOT_FOUND : httpCodes.OK,
                statusMessage: 
                !data || data.length === 0
                ? "not found": "ok",
                message:
                !data || data.length === 0
                ? "datos encontrado con exito":"datos no encontrados",
                data
            })
            
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            }) 
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }

    
}

const insertProductController = async(req, res)=>{
    const {nombre, alergeno,coste,proveedor} = req.body
    if(nombre || alergeno || coste || proveedor){
        try{
            const data = Services.insertProduct(nombre,alergeno,coste,proveedor)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            }) 
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }

}

const insertProveedorController = async(req,res)=>{
    const {nombre, correo, direccion} = req.body

    if(nombre|| correo || direccion){
        try{
            const data = await Services.insertProveedor(nombre, correo, direccion)
            res.status(httpCodes.OK)
            res.send({
                statusCode: httpCodes.OK,
                statusMessage:"ok",
                message:"dato insertado correctamente",
                data
            })
        }catch(err){
            res.status(httpCodes.INTERNAL_SERVER_ERROR)
            res.send({
                statusCode:httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: "internal server error",
                message:"error del servidor fallo interno"
            }) 
        }
    }else{
        res.status(httpCodes.BAD_REQUEST)
        res.send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage :"bad request",
            message:"parametros requeridos"
        })
    }
}

const getProductProvController = async(req, res) =>{
    try{
        const data = await Services.getProductProvedor()
        res.status( !data || data.length === 0 ? httpCodes.NOT_FOUND : httpCodes.OK)
        res.send({
            statusCode:
            !data || data.length === 0
            ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 
            !data || data.length === 0
            ? "not found": "ok",
            message:
            !data || data.length === 0
            ? "datos encontrado con exito":"datos no encontrados",
            data
        })
        
    }catch(err){
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
        res.send({
            statusCode:httpCodes.INTERNAL_SERVER_ERROR,
            statusMessage: "internal server error",
            message:"error del servidor fallo interno"
        })
    }
}

export default{
    showAllRelation,
    showTable,
    insertClient,
    insertEmploye,
    insertReservas,
    insertDo,
    productMost,
    alergenos,
    pushFood,
    Compuesto,
    DropFood,
    DropCompuesto, 
    updateControllerEmploye,
    deleteControllerEmploye,
    getEmployeByIdController,
    getEmployeByNameController,
    insertProductController,
    insertProveedorController,
    getProductProvController
    
}
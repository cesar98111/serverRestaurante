import {Router} from 'express'
import control from '../controller/restaurant.controller.mjs'


const router = Router()


router.route('/relation').get(control.showAllRelation)

router.route('/table/:name').get(control.showTable)

router.route('/insert/cliente').post(control.insertClient)

router.route('/insert/employe').post(control.insertEmploye)

router.route('/insert/reserva').post(control.insertReservas)

router.route('/insert/realizan').post(control.insertDo)

router.route('/mostSeld/:limit').get(control.productMost)

router.route('/alergen/:nombre').get(control.alergenos)

router.route('/insert/plato').post(control.pushFood)

router.route('/insert/compuesto').post(control.Compuesto)

router.route('/delete/employe/:id').delete(control.deleteControllerEmploye)

router.route('/delete/plato/:id').delete(control.DropFood)

router.route('/delete/compuesto/:id').delete(control.DropCompuesto)

router.route('/update/employe/:id').put(control.updateControllerEmploye)

router.route('/employe/:id').get(control.getEmployeByIdController)

router.route('/employe/name/:name').get(control.getEmployeByNameController)

router.route('/insert/product').post(control.insertProductController)

router.route('/insert/proveedor').post(control.insertProveedorController)

router.route('/relation/provedor').get(control.getProductProvController)






export default router
import {Router} from 'express';
import {
    createUSer, getAllUsers,updateUser,deleteUser
} from '../controller/user.controller'

const router: Router = Router();

// api call to create a new user
router.post('/',createUSer); 

// call to get details of all users
router.get('/',getAllUsers);

// update user by ID
router.put('/:id', updateUser);

// Delete user by ID
router.delete('/:id',deleteUser);


export default router;
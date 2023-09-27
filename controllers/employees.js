const { prisma } = require('../prisma/prisma-client')

// find all users
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees) 
    } catch (err) {
        res.status(500).json({message: 'не удалось получить сотрудника'})
    }
}

// add user

const add = async(req, res) => {
    try {
        const data = req.body;

        if(!data.firstName && !data.lastName && !data.address && !data.age){
            return res.status(400).json({message: 'Все поля обязательные'})
        }

       const employee =  await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        })

        return res.status(201).json({employee})

    } catch(err)  {
        console.log(err);
        return res.status(500).json({message: 'somthing went wrong'})
    }

}

// delete user
const removeUser = async (req, res) => {
    const { id } = req.body
    try {
        await prisma.employee.delete({
            where: {
                id: id
            }
        });

        res.status(204).json('OK');
    } catch (err) {
        console.log(err, {message: 'are you sure'});
        return res.status(500).json({message: 'Не удалось удалить сотрудника'})
    }
}


const editUser = async (req, res) => {
    const { id } = req.body;
    const data = data.id;

    try {
        await prisma.employee.update({
            where: {
                id: id,

            },
            data: data
        })

        res.status(204).json('Пользователь изменен');
    } catch (err) {
        res.status(500).json({message: ' Не удалось отредактировать сотрудника'})
    }
}

const getEmployee = async (req, res) => {

    const { id } = req.params;

    try {

        const getEmployee = await prisma.employee.findUnique({
            where: {
                id: id,
            }
        })

        res.status(204).json(getEmployee, 'Пользователь найден');
    } catch (err) {
        res.status(500).json({message: ' Не удалось найти соьрудника'})
    }
}





module.exports = {
    all,
    add,
    removeUser,
    editUser,
    getEmployee
}
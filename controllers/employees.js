const { prisma } = require('../prisma/prisma-client')

const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees) 
    } catch (err) {
        res.status(400).json({message: 'не удалось получить сотрудника'})
    }
}
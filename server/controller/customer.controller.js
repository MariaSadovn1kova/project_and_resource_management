const db = require('../db')

class CustomerController{
    async createCustomer(req, res){
        const {name, phone_number, mail, comment} = req.body
        const newCustomer = await db.query(`INSERT INTO "Customer" (name, phone_number, mail, comment) VALUES ($1, $2, $3, $4) RETURNING *`, [name, phone_number, mail, comment])

        res.json(newCustomer.rows[0])
    }

    async getCustomers(req, res){
        const customers = await db.query(`SELECT * FROM "Customer"`)

        res.json(customers.rows)
    }
 
    async getOneCustomer(req, res){
        const id = req.params.id
        const customer = await db.query(`SELECT * FROM "Customer" WHERE id = $1`, [id])

        res.json(customer.rows[0])
    }

    async updateCustomer(req, res){
        const {id, name, phone_number, mail, comment} = req.body
        const customer = await db.query(
            `UPDATE "Project" set name = $1, phone_number = $2, mail = $3, comment = $4 where id = $5 RETURNING *`, 
            [name, phone_number, mail, comment, id]
        )

        res.json(customer.rows[0])
    }

    async deleteCustomer(req, res){
        const id = req.params.id
        const customer = await db.query(`DELETE FROM "Customer" WHERE id = $1`, [id])

        res.json(customer.rows[0])
    }
}

module.exports = new CustomerController()
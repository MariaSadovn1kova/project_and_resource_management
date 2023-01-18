const db = require('../db')
class ProjectController{
    async createProject(req, res){
        const {id_customer, status} = req.body
        const newProject = await db.query(`INSERT INTO "Project" (id_customer, status) VALUES ($1, $2) RETURNING *`, [id_customer, status])

        res.json(newProject.rows[0])
    }

    async getProjects(req, res){
        const projects = await db.query(`SELECT * FROM "Project"`)

        res.json(projects.rows)
    }
 
    async getOneProject(req, res){
        const id = req.params.id
        const project = await db.query(`SELECT * FROM "Project" WHERE id = $1`, [id])

        res.json(project.rows[0])
    }

    async updateProject(req, res){
        const {id, id_customer, status} = req.body
        const project = await db.query(
            `UPDATE "Project" set id_customer = $1, status = $2 where id = $3 RETURNING *`, 
            [id_customer, status, id]
        )

        res.json(project.rows[0])
    }

    async deleteProject(req, res){
        const id = req.params.id
        const project = await db.query(`DELETE FROM "Project" WHERE id = $1`, [id])

        res.json(project.rows[0])
    }
}

module.exports = new ProjectController()
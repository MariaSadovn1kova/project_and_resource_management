const db = require('../db')
class ProjectController{
    async createProject(req, res){
        const {id_customer, status} = req.body
        const newProject = await db.query(`INSERT INTO "Project" (id_customer, status) VALUES ($1, $2) RETURNING *`, [id_customer, status])

        res.json(newProject)
    }

    async getProject(req, res){

    }
 
    async getOneProject(req, res){
        
    }

    async updateProject(req, res){

    }

    async deleteProject(req, res){

    }
}

module.exports = new ProjectController()
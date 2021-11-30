const express = require('express')
const router = express.Router()

const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()


// get a blog
router.get('/byId/:id', async (req, res) => {
    try {
    const {id} = req.params
    const blog = await prisma.blog.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(blog)
    } catch (error) {
        console.log(error)
    }
})

// get all blogs
router.get('/all', async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany()
        res.json(blogs)
    } catch (error) {
        console.log(error)
    }
})

// create a blog
router.post('/create', async (req, res) => {
    try {
        const {title, content} = req.body
        await prisma.blog.create({
            data: {
                title: title,
                content: content
            }
        })
        res.json('blog created!')
    } catch (error) {
        console.log(error)
    }
})

// delete a blog
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        await prisma.blog.delete({
          where: { id: Number(id) },
        })
        res.json('blog deleted!')
    } catch (error) {
        console.log(error)
    }
})


module.exports = router
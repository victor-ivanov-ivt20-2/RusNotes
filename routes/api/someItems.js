const { Router } = require('express');
const someItem = require('../../models/someItem');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const someItems = await someItem.find()
        if(!someItems) throw new Error('no items')
        const sorted = someItems.sort((a, b) => {
            return new Date(a.date).getTime()
        })
        res.status(200).json(sorted)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async(req, res) => {
    const newSomeItem = new someItem(req.body)

    try {
        const someitem = await newSomeItem.save()
        if(!someitem) throw Error('smth went wrong')
        res.status(200).json(someitem)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})


router.put('/:id', async(req, res) => {
    const { id } = req.params

    try {
        const response = await someItem.findByIdAndUpdate(id, req.body)
        if(!response) throw Error('smth went wrong')
        const updated = { ...response._doc, ...req.body}
        res.status(200).json(updated)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params

    try {
        const removed = await someItem.findByIdAndDelete(id)
        if(!removed) throw Error('smth went wrong')
        res.status(200).json(removed)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router
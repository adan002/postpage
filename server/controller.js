const views = require('./db.json')

let globalID = 11

module.exports = {
getViews: (req, res) =>{
    res.status(200).send(views)
    },
    
      createViews: (req, res) => {
       
        const {title, imageURL} = req.body;
        let newViews = {
            title: title,
            imageURL,
            id: globalID
        }
        views.push(newViews)
        globalID++
        res.status(200).send(views)
      }
}
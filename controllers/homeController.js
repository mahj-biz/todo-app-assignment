const path=require('path');
let defaultFolderPath=path.join(__dirname,'../');

function homeController(req, res) {
    res.sendFile(defaultFolderPath + "/views/index.html");
}

module.exports = homeController;
/**
 * GET /
 * Homepage
 * 
 */

exports.homePage = async(req,res)=>{
    
        const locals  = {
            title : 'NodeJs Notes',
            description : 'Free NodeJs Notes App'
        }
        res.render('index',{
            locals,
            layout: '../views/layouts/front-page'
        }
        ); 
}



/**
 * GET /
 * Sbout
 * 
 */

exports.about = async(req,res)=>{
    const locals  = {
        title : 'About - NodeJs Notes',
        description : 'Free NodeJs Notes App'
    }
    res.render('about',locals); 
}
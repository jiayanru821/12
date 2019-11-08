const bodyParser=require('body-parser')
const {bookNavData,bookMallData,bookMallDetailData}=require('./data')

// let userList=[
//     {
//         id:'001',
//         username:'admin',
//         pwd:'123456'
//     },{
//         id:'002',
//         username:'jyr',
//         pwd:'123'
//     }
// ]

// let myBook=[]

// module.exports={
//     lintOnSave:false,
//     devServer:{
//         before(app){
//             app.use(bodyParser.json())
//             app.post('/api/login',(req,res)=>{
//                 let {username,pwd}=req.body
//                 let user=userList.find(item=>item.username===username)
//                 if(user){
//                     if(user.pwd===pwd){
//                         res.send({
//                             code:200,
//                             data:{user},
//                             message:'登陆成功'
//                         })
//                     }else{
//                         res.send({
//                             code:400,
//                             message:'密码错误'
//                         })
//                     }
//                 }else{
//                     res.send({
//                         code:400,
//                         message:'用户名不存在'
//                     })
//                 }
//             })
//             //导航
//             app.get('/getnav',(req,res)=>{
//                 res.send({
//                     code:200,
//                     data:bookNavData,
//                     message:'导航'
//                 })
//             })
//             //列表
//             app.get('/getlist',(req,res)=>{
//                 let {id}=req.query
//                 let list=bookMallData.find(item=>item.id==id).list
//                 list.forEach(item=>{
//                     //添加字段，判断收藏和已收藏
//                     item.is_in_my_book=myBook.findIndex(book=>book.id===item.id)>=0
//                 })
//                 res.send({
//                     code:200,
//                     data:list,
//                     message:'列表'
//                 })
//             })
//             //详情
//             app.get('/api/detail',(req,res)=>{
//                 let {id} =req.query
//                 bookMallDetailData.forEach(item=>{
//                     item.list.forEach(book=>{
//                         if(book.id==id){
//                             //添加字段，判断收藏和已收藏
//                             book.is_in_my_book=myBook.findIndex(bookItem=>bookItem.id===book.id)>=0
//                             res.send({
//                                 code:200,
//                                 data:book,
//                                 message:'详情'
//                             })
//                         }
//                     })
//                 })
//             })

//             app.post('/api/add',(req,res)=>{
//                 let {book} =req.body
//                 myBook.push(book)
//                 res.send({
//                     code:200,
//                     data:myBook,
//                     message:'添加成功'
//                 })
//             })

//             app.get('/get/mybook',(req,res)=>{
//                 res.send({
//                     code:200,
//                     data:myBook,
//                     message:'书包'
//                 })
//             })

//             app.post('/api/updata',(req,res)=>{
//                 let {myBookNew} =req.body
//                 myBook=myBookNew
//                 res.send({
//                     code:200,
//                     data:myBook,
//                     message:'更新完成'
//                 })
//             })
//         }
//     }
// }
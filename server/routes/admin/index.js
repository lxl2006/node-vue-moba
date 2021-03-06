const express = require("express");
const path = require("path");
const router = express.Router({
  mergeParams: true,
});
// “类别”数据的模型
// const Category = require('../../models/Category')

module.exports = (app) => {
  // express提供的嵌套路由
  app.use(
    "/admin/api/rest/:resource",
    async (req, res, next) => {
      // inflection模块下的classify方法把要请求的资源名称categories改为数据库中的模型名称Category
      const modelName = require("inflection").classify(req.params.resource);
      req.Model = require(`../../models/${modelName}`);
      next();
    },
    router
  );

  app.post("/admin/api/login", async (req, res) => {
    const AdminUser = require("../../models/AdminUser");
    const { username, password } = req.body;
    // 查找用户
    const user = await AdminUser.findOne({ username });
    if (!user) {
      res.status(422).send({
        message: "用户名不存在",
      });
    }
    // 校验密码
    const isValid = require("bcryptjs").compareSync(password, user.password);
    if (!isValid) {
      res.status(422).send({
        message: "密码错误",
      });
    }

    const jwt = require("jsonwebtoken");
    const token = jwt.sign({ id: user._id }, "2rhiu27f7f2l9oopsfg");
    res.send({ token });
  });

  // 添加功能的子路由
  router.post("/", async (req, res) => {
    // 向服务器添加一条数据
    const model = await req.Model.create(req.body);
    res.send(model);
  });
  // 根据ID修改分类名称
  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  // 删除分类
  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id);
    res.send({
      msg: "success",
    });
  });
  // 获取分类列表
  router.get("/", async (req, res) => {
		const token = String(req.headers.authorization || '').split(' ').pop();
		
	} , async (req, res) => {
    // Category存在关联数据，要特殊处理
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100);
    res.send(items);
  });
  // 根据ID获取单个分类
  router.get("/:id", async (req, res) => {
    // id是在URL中，所以对应req.params
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });

  // 处理二进制文件的中间件
  const multer = require("multer");
  // 指定上传的文件路径
  const upload = multer({ dest: path.join(__dirname, "../../uploads") });
  // 'file'指的是客户端传递来的数据名称
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    // req.file是multer.single中间件加上的
    // console.log(req.file)
    const file = req.file;
    file.url = `http://www.sq311.xyz:81/uploads/${file.filename}`;
    res.send(file);
  });
};

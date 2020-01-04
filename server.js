const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const blogPostRouter = require('./routes/blogPostRoute');
const commentRouter = require('./routes/commentRoute');
const reviewRouter = require('./routes/reviewRoute');
const orderRouter = require('./routes/orderRoute');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/product', productRouter.routes);
app.use('/api/user', userRouter.routes);
app.use('/api/blogpost', blogPostRouter.routes);
app.use('/api/comment', commentRouter.routes);
app.use('/api/review', reviewRouter.routes);
app.use('/api/order', orderRouter.routes);

app.get('/', (req, res) => {
  res.send('Working');
});

module.exports.start = () => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
};
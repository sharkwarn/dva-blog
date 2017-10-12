import dva from 'dva';
import './index.css';
import classy from 'markdown-it-classy';

window.md.use(classy);
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example'));
app.model(require('./models/upload'));
app.model(require('./models/saveArticle'));
app.model(require('./models/articleList'));
app.model(require('./models/articleDetail'));
app.model(require('./models/banner'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

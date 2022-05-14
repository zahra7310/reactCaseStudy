
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

import {Layout} from './component/layout';
import { ModulesPage } from './component/pages/moduls';

import { ClassComponentPage } from './component/pages/class-component-page';
import { HomePage } from './component/pages/Home';
import { FunctionComponent4 } from './react-component/function-component';
import { UsersPage } from './component/pages/users';
import { Tutorials } from './component/pages/tutorials';
import { WelcomePage } from './component/pages/tutorials/welcome';
import ComponentLifecycle from './component/pages/tutorials/lifecycle';
import { ReactHook } from './component/pages/tutorials/hook';
import { PostPage } from './component/pages/post';
import { PageNotFound } from './component/pages/notfound';
import { NewUser } from './component/pages/users/newuser';
import { EditUser } from './component/pages/users/edituser';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Layout>
          <Routes>
           <Route path='/' element={<HomePage/>}></Route>
           <Route path='tutorials' element={<Tutorials/>}>
              <Route index element={<WelcomePage />}></Route>
              <Route path='moduls' element={<ModulesPage />}></Route>
              <Route path='FunctionComponent' element={<FunctionComponent4 />}></Route>
              <Route path='ClassComponentPage' element={<ClassComponentPage />}></Route>
              <Route path='lifecycle' element={<ComponentLifecycle/>}></Route>
              <Route path='ReactHook' element={<ReactHook/>}></Route>
            </Route>
           <Route path='UsersPage' element={<UsersPage />} ></Route>
           <Route path='postPage' element={<PostPage />}> </Route>
           <Route path='UsersPage/new' element={<NewUser />}> </Route>
           <Route path='UsersPage/edit/:id' element={<EditUser />}></Route>
           
           <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
      </Layout>
    </div>
    </BrowserRouter>
  );
}


export default App;

import LoginProject from './Login';
import SignupProject from './Signup';
import DetailProject from './Detail';
import DataProject from './Data';
import InputProject from './Input';
import EditProject from './Edit';
import TabProject from './Menu/Tab';

module.exports = [

  {
    name: 'Login',
    component: LoginProject,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupProject,
    options: { headerShown: false },
  },
  {
    name: 'Tab',
    component: TabProject,
    options: { headerShown: false },
  },
  {
    name: 'Detail',
    component: DetailProject,
    options: { headerShown: false },
  },
  {
    name: 'Data',
    component: DataProject,
    options: { headerShown: false },
  },
  {
    name: 'Input',
    component: InputProject,
    options: { headerShown: false },
  },
  {
    name: 'Edit',
    component: EditProject,
    options: { headerShown: false },
  },

];

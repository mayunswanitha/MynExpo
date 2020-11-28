import LoginProject from './Login';
import SignupProject from './Signup';
import DetailProject from './Detail';
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
];

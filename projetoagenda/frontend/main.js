import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import '/assets/css/style.css';


// página login
import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();


// página incluir valores 
import Contato from './modules/Contato';

const contato = new Contato('.form-register');
contato.init();
import { useNavigate } from 'react-router-dom';
import logoQapp from '../../../../assets/images/logoQapp.png'

export default function Logo() {

    const history = useNavigate();
    function navigateToHome(e: { preventDefault: () => void; }) {
        e.preventDefault();
        history('/projects');
    }


    return (
        <img onClick={navigateToHome} id="img-logo" src={logoQapp} alt="Logo da empresa QApp" />
    );
  }
  

  
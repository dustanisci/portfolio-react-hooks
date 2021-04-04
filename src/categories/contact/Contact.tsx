import PrimaryTheme from '../../shared/themes/primary-theme';
import { CategorieContainer } from './../../shared/components/categorie-container/CategorieContainer';

function Contact() {
  return (
    <CategorieContainer
      title='contato'
      titleColor='#FFF'
      colorFirstLetter="#000"
      background={PrimaryTheme.Pink}
    >
      <div>teste</div>
    </CategorieContainer>
  );
}

export default Contact;

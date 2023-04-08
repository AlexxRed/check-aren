import ISection from '../ISection';
import IHelpFormButton from './IHelpFormButton';
import IHelpFormImage from './IHelpFormImage';

export default interface IConsultation {
    section: ISection;
    description: string;
    button: IHelpFormButton;
    image: IHelpFormImage;
}
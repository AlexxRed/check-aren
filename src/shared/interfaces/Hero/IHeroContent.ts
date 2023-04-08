import ISection from '../ISection';
import IHeroButton from './IHeroButton';

export default interface IHeroContent {
    section: ISection;
    description: string;
    button: IHeroButton;
}
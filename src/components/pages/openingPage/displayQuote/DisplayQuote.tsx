import {quotes} from '../../../data/Quotes'
import './displayQuote.scss'
import Typewriter from 'react-ts-typewriter';

export const DisplayQuote = () => {

    return (
        <div className="display-quote-container">
            <Typewriter text={quotes} speed={80} delay={2000} loop={true}/>
        </div>
    )
}
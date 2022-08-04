import { NavigationBar } from "../../navigationBar/NavigationBar"
import { DisplayQuote } from "./displayQuote/DisplayQuote"

export const OpeningPage = () => {
    return (
        <div className="">
            <NavigationBar/>
            <DisplayQuote/>
        </div>
    )
}
import Hero from "../component/homeComponet/Hero";
import Card from "../component/homeComponet/Card";
import NewCollection from "../component/homeComponet/NewCollection";
import NewArrival from "../component/homeComponet/NewArrival";
import Review from "../component/homeComponet/Review";



export default function Home() {
    return (
        <>
            <Hero />
            <Card />
            <NewCollection />
            <NewArrival />
            <Review />

        </>
    )
}

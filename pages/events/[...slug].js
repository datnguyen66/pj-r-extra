import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function FilteredEventsPage(){
    const router = useRouter()

    const filterData = router.query.slug
    console.log(filterData);
    if(!filterData){
        return(
            <p>
                loading...
            </p>
        )
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numMonth) || isNaN(numYear) || numYear > 2030 || numYear < 2021  || numMonth < 1 || numMonth > 12) {
        return (
            <div>
                <h1> Invalid filter. Please adjust your values!</h1>
            </div>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!filteredEvents || filteredEvents.length ==0){
        return (
            <div>
                <h1>No events found for the chosen filter!</h1>
            </div>
        )
    }
    return(
        <div>
            <EventList items={filteredEvents} />
        </div>
    )
}
export default FilteredEventsPage;
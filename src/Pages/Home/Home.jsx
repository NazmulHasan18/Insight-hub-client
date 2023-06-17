import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import moment from "moment";
import PageTitle from "../Shared/PageTItle/PageTitle";
import { Link } from "react-router-dom";
import HPNewsFeed from "./HPNewsFeed";
import HPEventCard from "./HPEventCard";
import HPJobCard from "./HPJobCard";

const Home = () => {
   const [loading, setLoading] = useState(true);
   const [newses, setNewses] = useState([]);
   const [events, setEvents] = useState([]);
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      fetch("/news.json")
         .then((res) => res.json())
         .then((data) => {
            setNewses(data);
            setLoading(false);
         });
   }, []);

   useEffect(() => {
      fetch("/events.json")
         .then((res) => res.json())
         .then((data) => {
            setEvents(data);
         });
   }, []);

   useEffect(() => {
      fetch("/jobs.json")
         .then((res) => res.json())
         .then((data) => {
            setJobs(data);
         });
   }, []);

   return (
      <Container>
         <PageTitle title={"Feature Blogs"}></PageTitle>
         <Row className="">
            <Col className="my-2 bg-white py-2 rounded order-sm-2 order-lg-1" sm={6} lg={3} id="events">
               <h2 className="fs-4 fw-bold text-center">Events</h2>
               <div className="border p-3">
                  {events
                     .sort((a, b) => {
                        const dateA = moment(`${a.date} ${a.time}`, "YYYY-MM-DD h:mm A");
                        const dateB = moment(`${b.date} ${b.time}`, "YYYY-MM-DD h:mm A");
                        return dateB - dateA;
                     })
                     .slice(0, 6)
                     .map((event, index) => (
                        <HPEventCard key={index} event={event}></HPEventCard>
                     ))}
                  <Link to="/events">
                     <Button className="w-100 rounded-top-0" variant="outline-secondary">
                        Secondary
                     </Button>
                  </Link>
               </div>
            </Col>
            <Col md={8} lg={6} className="py-5 rounded bg-white order-sm-1 order-lg-2" id="news">
               {newses
                  .sort((a, b) => {
                     const dateA = moment(`${a.postDate} ${a.postTime}`, "YYYY-MM-DD h:mm A");
                     const dateB = moment(`${b.postDate} ${b.postTime}`, "YYYY-MM-DD h:mm A");
                     return dateB - dateA;
                  })

                  .map((news) => (
                     <HPNewsFeed key={news._id} news={news} loading={loading}></HPNewsFeed>
                  ))}
            </Col>
            <Col className="bg-white rounded py-2 my-2 order-sm-3 order-lg-3" id="jobs" sm={6} lg={3}>
               <h2 className="fs-4 fw-bold text-center">Jobs</h2>
               <div className="border p-3">
                  {jobs
                     .sort((a, b) => {
                        const dateA = moment(`${a.deadline} `, "YYYY-MM-DD h:mm A");
                        const dateB = moment(`${b.deadline} `, "YYYY-MM-DD h:mm A");
                        return dateB - dateA;
                     })
                     .slice(0, 6)
                     .map((job, index) => (
                        <HPJobCard key={index} job={job}></HPJobCard>
                     ))}
                  <Link to="/events">
                     <Button className="w-100 rounded-top-0" variant="outline-secondary">
                        Secondary
                     </Button>
                  </Link>
               </div>
            </Col>
         </Row>
      </Container>
   );
};

export default Home;

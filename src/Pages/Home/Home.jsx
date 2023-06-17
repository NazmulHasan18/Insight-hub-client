import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import moment from "moment";
import PageTitle from "../Shared/PageTItle/PageTitle";
import HPEventCard from "./HPEventCard";
import { Link } from "react-router-dom";
import HPNewsFeed from "./HPNewsFeed";
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
      fetch("/events.json")
         .then((res) => res.json())
         .then((data) => {
            setEvents(data);
            setLoading(false);
         });
      fetch("/jobs.json")
         .then((res) => res.json())
         .then((data) => {
            setJobs(data);
            setLoading(false);
         });
   }, []);

   return (
      <Container>
         <PageTitle title={"News Feed"}></PageTitle>
         <Row>
            <Col className="d-none d-md-block my-2 bg-white py-2 rounded" lg={3}>
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
            <Col md={8} lg={6} className="py-5 m-2 rounded bg-white">
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
            <Col className="d-none d-lg-block bg-white rounded my-2">
               <h2 className="fs-4 fw-bold text-center">Jobs</h2>
               <div className="border p-3">
                  {jobs
                     .sort((a, b) => {
                        const dateA = moment(`${a.deadline} `, "YYYY-MM-DD h:mm A");
                        const dateB = moment(`${b.date} `, "YYYY-MM-DD h:mm A");
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

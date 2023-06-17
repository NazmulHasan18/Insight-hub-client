import moment from "moment";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HPEventCard = ({ event }) => {
   return (
      <Card className="mb-3" style={{ maxWidth: "18rem" }}>
         <Card.Img variant="top" src="https://i.ibb.co/6HMKkNq/HPeventcard.jpg" style={{ height: "6rem" }} />
         <Card.Body>
            <div className="d-flex justify-content-between">
               <Card.Text className="mb-0">{moment(event?.date).format("MMM Do YY")}</Card.Text>
               <Card.Text className="mb-0">{event?.time}</Card.Text>
            </div>
            <Card.Title className="fs-6">{event?.title}</Card.Title>
            <Link to="/events">View Details</Link>
         </Card.Body>
      </Card>
   );
};

export default HPEventCard;

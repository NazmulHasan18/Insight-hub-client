import moment from "moment";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HPJobCard = ({ job }) => {
   return (
      <Card className="mb-3">
         <Card.Header as="h5" className="bg-secondary text-white">
            {job.title}
         </Card.Header>
         <Card.Body>
            <Card.Title className="fs-6">{job.company}</Card.Title>
            <Card.Text className="text-secondary mb-0" style={{ fontSize: "14px" }}>
               {job.salary}
            </Card.Text>
            <Card.Text>Deadline: {moment(job.deadline).format("MMM Do YY")}</Card.Text>
            <Link to="/jobs">
               <Button size="sm" variant="outline-primary">
                  View Details
               </Button>
            </Link>
         </Card.Body>
      </Card>
   );
};

export default HPJobCard;

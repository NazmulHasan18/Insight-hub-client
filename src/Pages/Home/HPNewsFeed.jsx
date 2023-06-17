import moment from "moment/moment";
import { useState } from "react";
import { Card, Image, Spinner } from "react-bootstrap";
import { FaBookmark, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const HPNewsFeed = ({ news, loading }) => {
   const [bookmark, setBookmark] = useState(false);

   if (loading) {
      return (
         <>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
         </>
      );
   }
   return (
      <Card className="mb-4 rounded-0" id={`${news._id}`}>
         <Card.Header className="d-flex gap-3 align-items-center">
            <Image
               src="https://i.ibb.co/7XxhLwj/P3-OLGJ1-copy-1.png"
               style={{ height: "60px" }}
               roundedCircle
            />
            <div className="flex-grow-1">
               <h4>{news?.author?.name}</h4>
               <p className="text-secondary">
                  {news?.postTime} {moment(news?.postDate).format("MMM Do YY")}
               </p>
            </div>
            <p className="text-secondary">
               <FaEye /> {news?.views}
            </p>
         </Card.Header>
         <Card.Img variant="top" src="https://i.ibb.co/g3TCrSg/class1.jpg" className="rounded-0" />
         <Card.Body>
            <h4>{news?.title} </h4>
            <Card.Text className="fs-5">
               {news?.description} <a href={news?.link}>More...</a>
            </Card.Text>
         </Card.Body>
         <Card.Footer className="text-muted">
            <div className="d-flex justify-content-between">
               <p>{moment(news?.postDate, "YYYY-MM-DD").fromNow()} </p>{" "}
               <p
                  className={`${bookmark && "text-warning"} `}
                  onClick={() => {
                     setBookmark(true);
                     toast.success("Bookmark Added Success full", {
                        theme: "colored",
                     });
                  }}
               >
                  <FaBookmark />
               </p>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default HPNewsFeed;

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageTitle from "../Shared/PageTItle/PageTitle";
import { useEffect, useState } from "react";
import moment from "moment";

const Blogs = () => {
   const [categories, setCategories] = useState([]);
   const [featuredPosts, setFeaturedPosts] = useState([]);
   useEffect(() => {
      fetch("/categories.json")
         .then((response) => response.json())
         .then((data) => setCategories(data));
      fetch("/news.json")
         .then((res) => res.json())
         .then((data) => {
            setFeaturedPosts(data);
         });
   }, []);

   // const featuredPosts = [
   //    {
   //       title: "The Art of Productivity",
   //       category: "Productivity",
   //       excerpt: "Discover practical tips to boost your productivity and accomplish more in less time.",
   //       image: "path-to-image1.jpg",
   //    },
   //    {
   //       title: "Exploring Nature: A Photographic Journey",
   //       category: "Travel",
   //       excerpt:
   //          "Embark on a visual adventure through breathtaking landscapes captured by talented photographers.",
   //       image: "path-to-image2.jpg",
   //    },
   // ];

   // Example data for latest blog posts
   // const latestPosts = [
   //    {
   //       title: "10 Must-Try Recipes for Food Lovers",
   //       category: "Food & Cooking",
   //       excerpt: "Get inspired with these delicious recipes that will satisfy your taste buds.",
   //    },
   //    {
   //       title: "The Power of Mindfulness: Cultivating Inner Peace",
   //       category: "Wellness",
   //       excerpt:
   //          "Learn how to incorporate mindfulness practices into your daily life for a calmer and more balanced existence.",
   //    },
   // ];

   return (
      <div>
         <Container className="mt-4">
            <section id="blogs" className="segment">
               <Container>
                  <PageTitle title="Blogs"></PageTitle>
                  <Row>
                     <Col md={6}>
                        <h3>Featured Posts</h3>
                        {featuredPosts
                           .sort((a, b) => {
                              const viewA = a.views;
                              const viewB = b.views;
                              return viewB - viewA;
                           })
                           .slice(0, 2)
                           .map((post) => (
                              // <Card className="mb-3">
                              //    <Card.Img variant="top" src={post.image} />
                              //    <Card.Body>
                              //       <Card.Title>{post.title}</Card.Title>
                              //       <Card.Text>{post.excerpt}</Card.Text>
                              //       <Card.Text>Category: {post.category}</Card.Text>
                              //    </Card.Body>
                              // </Card>
                              <Card key={post._id} className="mb-3">
                                 <Card.Img src={post.image} alt="Card image" style={{ height: "250px" }} />
                                 <Card.ImgOverlay className="bg-dark text-white bg-opacity-50">
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.description}</Card.Text>
                                    <Card.Text>
                                       Last Update {moment(post?.postDate, "YYYY-MM-DD").fromNow()}{" "}
                                    </Card.Text>
                                    <a href={`#${post._id}`}>
                                       <Button variant="outline-light">View Post</Button>
                                    </a>
                                 </Card.ImgOverlay>
                              </Card>
                           ))}
                     </Col>
                     <Col>
                        <h3>Categories</h3>
                        <Row>
                           {categories.map((category, index) => (
                              <Col md={6} key={index} className="mb-3">
                                 <Card>
                                    <Card.Body>
                                       <Card.Title>{category.title}</Card.Title>
                                       <Card.Text>{category.description}</Card.Text>
                                    </Card.Body>
                                 </Card>
                              </Col>
                           ))}
                        </Row>
                     </Col>
                  </Row>

                  <h3>Latest Posts</h3>
                  <Row>
                     {featuredPosts
                        .sort((a, b) => {
                           const dateA = moment(`${a.postDate} ${a.postTime}`, "YYYY-MM-DD h:mm A");
                           const dateB = moment(`${b.postDate} ${b.postTime}`, "YYYY-MM-DD h:mm A");
                           return dateB - dateA;
                        })
                        .slice(0, 2)
                        .map((post, index) => (
                           <Col key={index} md={6} className="mb-3">
                              <Card>
                                 <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.description}</Card.Text>
                                    <Card.Text>Category: {post.category}</Card.Text>
                                 </Card.Body>
                              </Card>
                           </Col>
                        ))}
                  </Row>
               </Container>
            </section>
         </Container>
      </div>
   );
};

export default Blogs;

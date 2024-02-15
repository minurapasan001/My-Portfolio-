import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import library from "../../Assets/Projects/library.jpg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import parking from "../../Assets/Projects/parking.png";
import cruise_ship from "../../Assets/Projects/cruise ship.png";
import Quiz from "../../Assets/Projects/Quiz.jpg";
import Tic_Tac_game from "../../Assets/Projects/Tic-Tac-Toe game.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cruise_ship}
              isBlog={false}
              title="Cruise Ship"
              description="A Java-based system for pre-reserving cruise ship seats allows passengers to pick their preferred seats through a user-friendly interface. The system actively maintains seat availability, preventing double bookings by updating a seat occupancy database in real-time. This streamlined solution simplifies the seat reservation process for both passengers."
              ghLink="https://github.com/minurapasan001/Cruise-Ship-Boarding-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic_Tac_game}
              isBlog={false}
              title="Tic-Tac-Toe game"
              description="The code you received is a straightforward implementation of a Tic-Tac-Toe game in C#.It permits two players to alternately mark a 3x3 grid with their symbols. The game's objective is to be the first to align three of your symbols either horizontally, vertically, or diagonally. If the grid fills up without a winner, the game concludes as a draw."
              ghLink="https://github.com/minurapasan001/Tic-Tac-Toe-Game/blob/main/Tic-Tac-Toe%203/Program.cs"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parking}
              isBlog={false}
              title="Parking System"
              description="The Java-based library management system simplifies book access and retrieval from a library.Users can efficiently search for books, borrow them, and return them with ease. This system streamlines the processes of borrowing and returning books, making it convenient for library users to find and manage their reading materials."
              ghLink="https://github.com/minurapasan001/Parking_System-"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library System"
              description="The Java-based library management system simplifies book access and retrieval from a library. Users can efficiently search for books, borrow them, and return them with ease. This system streamlines the processes of borrowing and returning books, making it convenient for library users to find and manage their reading materials."
              ghLink="https://github.com/minurapasan001/Library-"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Quiz Page"
              description="This HTML document is designed for a web-based quiz,featuring multiple-choice questions and a timer.It offers users real-time feedback by showing the number of correct answers and the time they spent on the quiz.This interactive format enhances the user's quiz-taking experience,allowing them to assess their performance and efficiency."
              ghLink="https://github.com/minurapasan001/HTML-Quiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'Emotion_Detection_CNN' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%."
              ghLink="https://github.com/minurapasan001/TRANQUILIZER"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from 'react'
import pocketlistImage from '../images/pl-pic.png'
import pocketBurgerImage from '../images/pb-pic.png'
import parlezImage from '../images/pc-pic.png'

const Project = () => (
  <div>
    <h3>POCKETLIST</h3>
    <p>November 2019</p>
    <a href="https://github.com/mikeyqq/serverless-stack-client">
      <span className="image main">
        <img src={pocketlistImage} alt="pocketlist" />
      </span>
    </a>

    <>
      <h3>
        A simple note application that has the ability to attach any document
        and image.
      </h3>
      <ul>
        <li>
          Pocketlist was built with the idea of an easy in your pocket note
          taking application that can upload document and images.
        </li>
        <li>
          <b>
            <u>Amazon web services - Cognito </u>
          </b>
          is a simple user identity and data synchronization authentication
          service that helps Pocketlist securely manage and synchronize app data
          for our users across their web and mobile devices.
        </li>
        <li>
          <b>
            <u>Amazon web services - API Gateway </u>
          </b>
          provides REST API for our single page application to connect with
          other services within AWS through provided endpoint.
        </li>
        <li>
          <b>
            <u>Amazon web services - Lambda </u>
          </b>
          is a compute service that lets you run code without provisioning or
          managing servers. AWS Lambda executes the code only when needed, from
          a few requests per day to thousands per second. AWS Lambda works with
          <b>
            <u> Amazon web services - DynamoDb as our nosql database</u>
          </b>
          and
          <b>
            <u> Amazon web services - S3 </u>
          </b>
          bucket very often in our application to put, get, and delete
          items/files.
        </li>
      </ul>
    </>
    <>
      <h3>Tech Stack:</h3>
      <ul>
        <li>React-Hook</li>
        <li>AWS - Amplify</li>
        <li>AWS - Cognito</li>
        <li>AWS - API Gateway</li>
        <li>AWS - Lambda</li>
        <li>AWS - DynamoDb</li>
        <li>AWS - S3</li>
        <li>SEED - CI/CD</li>
        <li>Netlify</li>
        <li>React-Bootstrap</li>
      </ul>
    </>
    <hr></hr>
    <h3>POCKET BURGER</h3>
    <p>September - October 2019</p>
    <a href="https://github.com/mikeyqq/Burger-project-react">
      <span className="image main">
        <img src={pocketBurgerImage} alt="pocket-burger" />
      </span>
    </a>
    <>
      <h3>A mobile fast-food ordering application.</h3>
      <ul>
        <li>
          Pocket Burger was created to mimick other fast food ordering
          restaurants like Mcdonald, and Tim Hortons.
        </li>
        <li>
          The application has the ability to take in burger orders customized to
          your liking based on ingredients.
        </li>
        <li>
          <b>
            <u>Firebase - Realtime Database </u>
          </b>
          is a NoSql cloud hosted database. Data is synced across all clients in
          realtime, and remains available when your app goes offline. Firebase
          Realtime database was implemented due to it's capability to handle
          realtime high traffic orders coming in like a fast food restaurant.
        </li>
        <li>
          <b>
            <u>Firebase - Authentication </u>
          </b>
          allowed Pocket Burger users to personalized their experience with the
          applications with secure authentication. User's identity allows the
          app to securely save user data in the cloud and provide the same
          personalized experience across all of the user's devices.
        </li>
      </ul>
    </>
    <>
      <h3>Tech Stack:</h3>
      <ul>
        <li>React</li>
        <li>Firebase - Realtime Database</li>
        <li>Firebase - Authentication</li>
        <li>Axios</li>
      </ul>
    </>
    <hr></hr>
    <h3>Parlez</h3>
    <p>September 2019</p>

    <a href="https://github.com/mikeyqq/Parlez">
      <span className="image main">
        <img src={parlezImage} alt="parlez" />
      </span>
    </a>
    <>
      <h3>
        Parlez is a realtime messaging application utilizing socket.io to allow
        multiple single chats and group chats between users.
      </h3>
      <ul>
        <li>
          Parlez was a final project completed within 11 weeks at Lighthouse
          Lab.
        </li>
        <li>
          Parlez is the long lost younger sister application of Whatsapp. Parlez
          provides user with the ability to add friends with their email
          address, create one to one chat, create group chat with multiple
          friends, delete chats, and search for chats.
        </li>
        <li>
          Parlez uses <b>React </b>as the front-end with useHook/useContext to
          eliminate the process of passing data through many levels of the app
          components.
        </li>
        <li>
          Parlez uses <b>Express </b>as the back-end server to compliment using
          <b> PostgreSQL </b>due to many relational data model with our
          applications.
        </li>
        <li>
          <b>Socket.io </b>was the tip of the iceberg added to this project. We
          learned this new technology while we were building Parlez. Socket.io
          allowed our users to really experience high traffic realtime
          conversational features like multiple one to one chats and multiple
          group chats in the application.
        </li>
      </ul>
    </>
    <>
      <h3>Tech Stack:</h3>
      <ul>
        <li>React</li>
        <li>Express</li>
        <li>Socket.io</li>
        <li>PostgreSQL</li>
        <li>Material-UI</li>
        <li>Storybook</li>
      </ul>
    </>
  </div>
)

export default Project

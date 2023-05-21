import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>MiniMotorMania | Blog</title>
      </Helmet>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 blogs">
      <h1 data-aos="fade-up" className="text-4xl font-bold text-[#ffc800] text-center my-12">Blog</h1>
            
        <div className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500">
            An access token is a credential that grants access to protected resources in an application. It is typically issued after authentication and has a limited lifespan. Refresh tokens, on the other hand, are long-lived tokens that can be used to obtain new access tokens once the original token expires. Access tokens are usually stored on the client-side, either in memory or short-lived storage, while refresh tokens should be stored securely and confidentially, such as in an HTTP-only cookie or encrypted storage. This separation helps mitigate the risk of exposing sensitive access credentials and enhances the overall security of the application.
          </p>
        </div>
        <div className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">Compare SQL and NoSQL databases?</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500">SQL and NoSQL databases differ in their data models and storage paradigms. SQL databases, such as MySQL or PostgreSQL, use a structured schema and predefined tables with a fixed schema to store data. They provide ACID (Atomicity, Consistency, Isolation, Durability) guarantees and are suitable for complex relationships and transactions. NoSQL databases, like MongoDB or Redis, offer a flexible schema or schema-less approach, allowing for dynamic and unstructured data. They prioritize scalability and performance over strict consistency, making them ideal for handling large amounts of data and distributed systems. NoSQL databases excel in scenarios where high availability, horizontal scaling, and rapid development are essential.</p>
        </div>
        <div className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">What is express js? What is Nest JS? same</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500">Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and intuitive way to build web applications and APIs by offering a set of robust features and middleware. Express.js allows developers to handle routes, HTTP requests, and responses easily, manage sessions, handle cookies, and integrate with various templating engines. It is widely used in the Node.js ecosystem for building server-side applications.
            <br />
            NestJS is a progressive, TypeScript-based web framework for building scalable and efficient server-side applications. It is built on top of Express.js and utilizes modern JavaScript features and design patterns. NestJS follows the modular architecture principle, providing a powerful dependency injection system, decorators, and TypeScript support. It is known for its scalability, extensibility, and developer-friendly approach. NestJS offers features like built-in support for async functions, validation, authentication, and database integration, making it suitable for building complex and robust applications.</p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6">What is MongoDB aggregate and how does it work?</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-500">MongoDB's aggregate is a powerful data processing pipeline used for advanced querying and data manipulation in MongoDB. It allows users to perform complex data aggregation tasks and perform computations on collections of documents. The aggregate pipeline consists of multiple stages, such as filtering, sorting, grouping, transforming, and calculating aggregate values. Each stage operates on the input documents and passes the results to the next stage. Users can use various operators and expressions to define the pipeline stages and perform operations like filtering, grouping, counting, summing, averaging, and more. The aggregate pipeline enables flexible and efficient data aggregation and analysis in MongoDB.</p>
        </div>
      </div>
    </>
  );
};

export default Blog;

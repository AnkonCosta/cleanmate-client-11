import React from "react";

const Blog = () => {
  return (
    <div className="bg-white max-w-screen-lg mx-auto px-5">
      <div className="text-center p-10 border border-green-600 mb-2 ">
        <h1 className="text-2xl font-bold mb-5 ">
          What is the difference between SQL and NoSQL?
        </h1>
        <p>
          When it comes to choosing a database the biggest decisions is picking
          a relational (SQL) or non-relational (NoSQL) data structure. While
          both the databases are viable options still there are certain key
          differences between the two that users must keep in mind when making a
          decision. SQL is the programming language used to interface with
          relational databases. (Relational databases model data as records in
          rows and tables with logical links between them). NoSQL is a class of
          DBMs that are non-relational and generally do not use SQL.
        </p>
      </div>
      <div className="text-center p-10 border border-green-600 mb-2 ">
        <h1 className="text-2xl font-bold mb-5 ">
          What is JWT, and how does it work?
        </h1>
        <p>
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
          (RFC 7519) for securely transmitting information between parties as
          JSON object. It is compact, readable and digitally signed using a
          private key/ or a public key pair by the Identity Provider(IdP). The
          purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </div>
      <div className="text-center p-10 border border-green-600  ">
        <h1 className="text-2xl font-bold  ">
          What is the difference between javascript and NodeJS?
        </h1>
        <p>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. JavaScript is a client-side scripting
          language that is lightweight, cross-platform, and interpreted. Both
          Java and HTML include it. Node.js, on the other hand, is a V8-based
          server-side programming language. As a result, it is used to create
          network-centric applications. It's a networked system made for
          data-intensive real-time applications. If we compare node js vs.
          python, it is clear that node js will always be the preferred option.
        </p>
      </div>
      <div className="text-center p-10 border border-green-600 mt-2 ">
        <h1 className="text-2xl font-bold mb-5 ">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;

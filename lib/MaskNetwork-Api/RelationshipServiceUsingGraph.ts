// // docs we are using :- https://docs.next.id/core-concepts/relation-service/rs-graphdb
// // our query is from :- https://docs.next.id/core-concepts/relation-service/rs-example

// // YourComponent.tsx
// import React from "react";
// import { useQuery } from "@apollo/client";
// import identity from "./Twitter.graphql"; // Replace with the actual path to your query file

// interface QueryVariables {
//   platform: String;
//   identity: String;
// }

// function YourComponent() {
//   const { loading, error, data } = useQuery<any, QueryVariables>(identity, {
//     variables: {
//       platform: "Value1", // Replace with your actual parameter values
//       identity: "Value2", // Replace with your actual parameter values
//     },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   // Access the fetched data in the 'data' variable
//   const {
//     /* your data fields */
//   } = data;

//   return <div>{/* Display your data here */}</div>;
// }

// export default YourComponent;

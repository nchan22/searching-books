import gql from "graphql-tag";

// add a mutation that adds a user that when entering a username, email and password, it needs to be a string. based on same token and user details
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          image
          link
        }
      }
    }
  }
`;

// add login user that requires the email & password to be a string, and when logged in, will have same token and matching user info
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          link
          image
        }
      }
    }
  }
`;

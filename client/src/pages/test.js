import React from "react";
import { useQuery } from "@apollo/client";

const MENTOR_USER_INFO_QUERY = gql`
  query MentorUserInfo {
    user {
      _id
      email
      focus
      role
      education
      about
      username
      why
      image_url
      reviews {
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;


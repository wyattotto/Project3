import { useAuth } from './authSelector';

const { useQuery, gql, useMutation } = require('@apollo/client');

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

//make ageneric mutation  hook that takes a query and optaional data  appends token headers
export function useMutationWithToken(query, data = {}) {
  const { token } = useAuth();
  const [mutateFunction, { loading, error, data: mutationData }] = useMutation(
    query,
    {
      context: {
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      },
      variables: data,
    }
  );

  return { mutateFunction, loading, error, mutationData };
}

//make ageneric query  hook that takes a query and optaional data  appends token headers
export function useQueryWithToken(query, data = {}) {
  const { token } = useAuth();
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(query, {
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    },
    variables: data,
  });

  return { loading, error, queryData };
}

export default function useMentorUserInfo() {
  const {
    loading,
    error,
    queryData: data,
  } = useQueryWithToken(MENTOR_USER_INFO_QUERY);
  const mentor = data?.user || {};
  return { loading, error, mentor };
}

export async function getCalendlyScheduledEvents(calendly_id) {
  const events = await fetch(
    `https://api.calendly.com/scheduled_events/${calendly_id}`,
    {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_CALENDLY_TOKEN}`,
      },
    }
  ).catch(err => console.error(err));

  console.log('calendly_scheduled events', events);
  return events;
  // const url = `https://api.calendly.com/v2/projects/${calendly_id}/events`;
  // const headers = {
  //   "Authorization": `Bearer ${process.env.REACT_APP_CALENDLY_TOKEN}`,
  // };
  // const response = await fetch(url, { headers });
  // if (response.status === 200) {
  //   return await response.json()["events"];
  // } else {
  //   return [];
  // }
}

/**
 * make function take takes a calendly personal access token and and projectid and retreives all events
 * using fetch  api and return the reteived events
*/

// matchesApi.ts
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setMatches } from "../../redux/slices/matchesSlice";
import { LOAD_MATCHES } from "../../GraphQL/Queries";

import { useQuery } from "@apollo/client";

export function useFetchMatches() {
  const dispatch = useDispatch();

  const { error: matchesError, loading: matchesLoading, data: matchesData } = useQuery(LOAD_MATCHES);
 
  useEffect(() => {
    if (matchesData) {
      const { matches } = matchesData;
      dispatch(setMatches(matches));
    }
  }, [matchesData]);

  return { matchesData,
    matchesError,
    matchesLoading,};
}

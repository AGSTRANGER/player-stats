import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMatches } from "../../redux/slices/matchesSlice";
import { LOAD_MATCHES } from "../../GraphQL/MatchQueries";
import { useQuery } from "@apollo/client";
import { Match } from "../../types";

type MatchesData = {
  matches: Match[];
};

export function useFetchMatches() {
  const dispatch = useDispatch();

  const {
    error: matchesError,
    loading: matchesLoading,
    data: matchesData,
  } = useQuery<MatchesData>(LOAD_MATCHES);

  useEffect(() => {
    if (matchesData) {
      const { matches } = matchesData;
      dispatch(setMatches(matches));
    }
  }, [matchesData]);

  return { matchesData, matchesError, matchesLoading };
}

import * as actionTypes from "./actionTypes";
import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: actionTypes.CHANGE_SEARCH_FIELD,
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: actionTypes.REQUEST_ROBOTS_PENDING
      })
    ).toEqual({ ...initialStateRobots, isPending: true });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    const payload = [
      {
        id: "1",
        name: "test",
        email: "test@gmail.com"
      }
    ];
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: actionTypes.REQUEST_ROBOTS_SUCCESS,
        payload: payload
      })
    ).toEqual({ ...initialStateRobots, robots: payload, isPending: false });
  });

  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    const payload = "Error";
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: actionTypes.REQUEST_ROBOTS_FAILED,
        payload: payload
      })
    ).toEqual({ ...initialStateRobots, error: payload, isPending: false });
  });
});

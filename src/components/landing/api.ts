import { User } from "@/shared/types";

export const createUser = async(payload: User) => {
    return fetch(`/api/user`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    .then(res => { return res.json() })
    .catch(err => console.log(err))
  };



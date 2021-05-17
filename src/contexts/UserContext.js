import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [favorite, setFavorite] = useState([]);
  const [favoriteProgram, setFavoriteProgram] = useState([]);

  useEffect(() => {
    whoami();
  }, []);

  useEffect(() => {}, [user]);

  const addToFav = async (newFav) => {
    // remove if already in array
    if (favorite.some((f) => f.id === newFav.id)) {
      setFavorite(favorite.filter((f) => f.id !== newFav.id));
      await fetch("/api/v1/user/deleteFav/" + newFav.id, {
        method: "DELETE",
      });
      return;
      // add if not in array
    } else setFavorite([...favorite, newFav]);

    let result = await fetch("/api/v1/user/addToFav", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFav),
    });
    result = result.json();

    return result;
  };

  const addProgramToFav = async (newFavProgram) => {
    // remove if already in array
    if (favoriteProgram.some((a) => a.id === newFavProgram.id)) {
      setFavoriteProgram(
        favoriteProgram.filter((a) => a.id !== newFavProgram.id)
      );
      await fetch("/api/v1/user/deleteFavProgram/" + newFavProgram.id, {
        method: "DELETE",
      });
      return;
      // add if not in array
    } else setFavoriteProgram([...favoriteProgram, newFavProgram]);

    let result = await fetch("/api/v1/user/addProgramToFav", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFavProgram),
    });
    result = result.json();

    return result;
  };

  const whoami = async () => {
    const response = await fetch("/api/v1/user/whoami", {
      method: "GET",
    });

    const data = await response.json();
    if (data) {
      setUser(data);
      console.log(user);
    }
  };

  const login = async (existingUser) => {
    const response = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: existingUser.email,
        password: existingUser.password,
      }),
    });
    const data = await response.json();
    console.log("login data:", data);
    if (data.success) {
      whoami();
      return true;
    }
  };

  const register = async (newUser) => {
    let result = await fetch("/api/v1/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    result = await result.json();

    return result;
  };

  const logout = async () => {
    await fetch("/api/v1/user/logout", {
      method: "GET",
    });
    setUser(null);
  };

  const values = {
    register,
    login,
    whoami,
    logout,
    user,
    favorite,
    addToFav,
    addProgramToFav,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;

//adım 1 type constant yarat
export const ADD_INCOMPLETED = "Yarıda Kalmışlara Ekle";
export const ADD_COMPLETED = "tamamlanmışlara Ekle";
export const ADD_MYLIST = "Listeme Ekle";
export const REMOVE_MYLIST = "REMOVE_MYLIST";

//adım 2 action creator func yaz
export const addIncompleted = (movie) => {
  return {
    type: ADD_INCOMPLETED,
    payload: movie,
  };
};

export const addCompleted = (movie) => {
  return {
    type: ADD_COMPLETED,
    payload: movie,
  };
};

export const addMyList = (movie) => {
  return {
    type: ADD_MYLIST,
    payload: movie,
  };
};

export const removeMyList = (id) => {
  return {
    type: REMOVE_MYLIST,
    payload: id,
  };
};
